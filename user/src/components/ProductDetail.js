import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getBase, getBaseImage } from "../helpers/Common";
import { FiHeart, FiShoppingCart, FiTag, FiInfo } from 'react-icons/fi';
import { toast } from "../helpers/toastHelper";
import "../css/styles.css";

export default function ProductDetail() {
  var [product, setProduct] = useState('');
  let [cookies] = useCookies(["user"]);
  let navigate = useNavigate();

  const AddToCartOrWishList = (productId, apiAddress) => {
    let userId = cookies["userid"];
    if (!userId) {
      toast.error("Please login to add items to cart or wishlist");
      navigate("/login");
      return;
    }
    apiAddress = getBase() + `${apiAddress}?productid=${productId}&usersid=${userId}`;
    axios
      .get(apiAddress)
      .then((response) => {
        const data = response.data;
        if (data[0]["error"] !== "no") {
          toast.error(data[0]["error"]);
        } else {
          toast.success(data[1]["message"]);
        }
      })
      .catch(() => toast.error("Failed to add to cart or wishlist. Please try again."));
  };

  useEffect(function () {
    if (product === '') {
      let productid = window.location.href.split("/").pop();
      let apiAddress = getBase() + "product.php?productid=" + productid;
     
      axios({
        method: "get",
        responseType: "json",
        url: apiAddress
      }).then(function (response) {
        if (response.status === 200) {
          let data = response.data;
          if (data[0]['error'] !== 'no') {
            toast.error(data[0]['error']);
          } else if (data[1]['total'] === 0) {
            toast.error("no product found");
          } else {
            data.splice(0, 2);
            setProduct(data[0]);
          }
        }
      }).catch(function (error) {
        toast.error("failed to load product details");
        navigate('/error');
      });
    }
  }, [product, navigate]);

  const fallbackImage = "https://via.placeholder.com/200"; 

  return (
    <>
      <Menu />
      <main className="page-wrapper pb-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
        <div className="container py-5 mt-5">
          <div className="row g-4">
            <div className="col-12 mb-4">
              <div className="text-center">
                <h1 className="display-5 fw-bold mb-2" style={{ color: '#2c3e50' }}>
                  Product Details
                </h1>
                <div style={{ 
                  width: '80px', 
                  height: '4px', 
                  background: 'linear-gradient(90deg, #dc3545, #ff6b6b)',
                  margin: '0 auto',
                  borderRadius: '2px'
                }}></div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="product-detail-card">
                <div className="product-detail-image-wrapper">
                  <img
                    src={getBaseImage() + "product/" + product.photo}
                    alt={product.title}
                    className="product-detail-image"
                    onError={(e) => e.target.src = fallbackImage}
                  />
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="product-detail-info">
                <div className="product-detail-header">
                  <h2 className="product-detail-title">{product.title}</h2>
                  <div className="product-badge-detail">New Arrival</div>
                </div>
                
                <div className="product-detail-price-section">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <FiTag size={24} color="#dc3545" />
                    <span className="product-detail-price">₹{product.price}</span>
                  </div>
                </div>
                
                <div className="product-detail-description">
                  <div className="d-flex align-items-start gap-2 mb-2">
                    <FiInfo size={20} color="#6c757d" className="mt-1" />
                    <div>
                      <h5 className="mb-2" style={{ color: '#2c3e50', fontWeight: '600' }}>Description</h5>
                      <p className="text-muted mb-0">{product.detail || 'No description available for this product.'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="product-detail-actions">
                  <button 
                    className="btn-detail btn-detail-cart" 
                    type="button"
                    onClick={() => AddToCartOrWishList(product.id, "add_to_cart.php")}
                  >
                    <FiShoppingCart className="me-2" size={20} />
                    Add to Cart
                  </button>
                  <button 
                    className="btn-detail btn-detail-wishlist" 
                    type="button"
                    onClick={() => AddToCartOrWishList(product.id, "add_to_wishlist.php")}
                  >
                    <FiHeart className="me-2" size={20} />
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
