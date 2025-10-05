import Menu from "./Menu";
import Footer from "./Footer";
import Checkout from "./Checkout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getBase, getBaseImage } from "../helpers/Common";
import { useNavigate } from "react-router-dom";
import { toast } from "../helpers/toastHelper";
import { FiTrash, FiCreditCard, FiShoppingCart } from "react-icons/fi";

export default function Cart() {
  var [data, setData] = useState([]);
  var [total, setTotal] = useState(0);
  var [cookies, setCookie] = useCookies(["user"]);
  var [showCheckout, setShowCheckout] = useState(false);
  let navigate = useNavigate();

  let DeleteFromCart = function (cartid, price, quantity) {
    let apiAddress = getBase() + "delete_from_cart.php?cartid=" + cartid;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress,
    }).then((response) => {
      if (response.status === 200) {
        let temp = response.data;
        if (temp[0]['error'] != "no")
          toast.error(temp[0]['error']);
        else {
          toast.success("item deleted from cart");
          let tempdata = data.filter((item) => item.cartid != cartid);
          setData(tempdata);
          let sum = price * quantity;
          setTotal(total - sum);
        }
      }
    });
    return false;
  }

  const fallbackImage = "https://via.placeholder.com/200";

  const handleCheckoutSuccess = async () => {
    setShowCheckout(false);
    
    // Delete all cart items from database - wait for all to complete
    const deletePromises = data.map(item => {
      const apiAddress = getBase() + "delete_from_cart.php?cartid=" + item.cartid;
      return axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress,
      }).catch(err => console.error('Failed to delete cart item:', err));
    });
    
    // Wait for all deletions to complete
    await Promise.all(deletePromises);
    
    // Clear frontend state after all deletions complete
    setData([]);
    setTotal(0);
    toast.success('order placed successfully!');
  };

  let DisplayItemInCart = function (item) {
    return (
      <div className="cart-item-card mb-4">
        <div className="cart-item-inner">
          <div className="cart-item-image">
            <img
              src={getBaseImage() + "product/" + item.photo}
              alt={item.title}
              onError={(e) => e.target.src = fallbackImage}
            />
          </div>
          <div className="cart-item-details">
            <h3 className="cart-item-title">{item.title}</h3>
            <div className="cart-item-price-info">
              <span className="unit-price">₹{item.price}</span>
              <span className="quantity">× {item.quantity}</span>
              <span className="total-price">= ₹{item.price * item.quantity}</span>
            </div>
          </div>
          <button 
            className="cart-item-delete"
            onClick={() => DeleteFromCart(item.cartid, item.price, item.quantity)}
            title="Remove from cart"
          >
            <FiTrash size={18} />
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (data.length == 0) {
      var apiAddress = getBase() + "cart.php?usersid=" + cookies['userid'];
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress,
      }).then((response) => {
        if (response.status === 200) {
          let temp = response.data;
          if (temp[0]['error'] != "no")
            toast.error(temp[0]['error']);
          else if (temp[1]['total'] == 0) {
            toast.info("cart is empty");
          }
          else {
            temp.splice(0, 2);
            var temp_total = 0;
            for (let i = 0; i < temp.length; i++) {
              temp_total += (temp[i].price * temp[i].quantity);
            }
            setTotal(temp_total);
            setData(temp);
          }
        }
      }).catch(function (error) {
        navigate('/error');
      });
    }
  });

  return (
    <>
      <div>
        <main className="page-wrapper" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
          <Menu />
          
          <div className="hero-section py-5 mt-5">
            <div className="container">
              <div className="text-center mb-5">
                <div className="d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ background: 'rgba(220, 53, 69, 0.1)', padding: '15px', borderRadius: '50%' }}>
                  <FiShoppingCart size={40} color="#dc3545" />
                </div>
                <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
                  Shopping Cart
                </h1>
                <p className="lead text-muted">Review your items before checkout</p>
              </div>
            </div>
          </div>

          <div className="container pb-5">
            <div className="row g-4">
              <div className="col-lg-8">
                {data.length === 0 ? (
                  <div className="cart-empty-state">
                    <FiShoppingCart size={80} color="#6c757d" />
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                    <a href="/" className="btn-modern btn-modern-primary">
                      Continue Shopping
                    </a>
                  </div>
                ) : (
                  data.map((item) => DisplayItemInCart(item))
                )}
              </div>
              
              <div className="col-lg-4">
                <div className="cart-summary">
                  <h3 className="cart-summary-title">Order Summary</h3>
                  <div className="cart-summary-content">
                    <div className="cart-summary-row">
                      <span>Subtotal</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="cart-summary-row">
                      <span>Shipping</span>
                      <span className="text-success">Free</span>
                    </div>
                    <div className="cart-summary-divider"></div>
                    <div className="cart-summary-row cart-summary-total">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                    <button 
                      className="btn-modern btn-modern-primary w-100 mt-4"
                      onClick={() => setShowCheckout(true)}
                      disabled={data.length === 0}
                    >
                      <FiCreditCard className="me-2" />
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      {showCheckout && (
        <Checkout 
          total={total}
          cartItems={data}
          onClose={() => setShowCheckout(false)}
          onSuccess={handleCheckoutSuccess}
        />
      )}
    </>
  );
}
