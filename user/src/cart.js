import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getBase, getBaseImage } from "./Common";
import { useNavigate } from "react-router-dom";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { FaTrash, FaCreditCard } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  var [data, setData] = useState([]);
  var [total, setTotal] = useState(0);
  var [cookies, setCookie] = useCookies(["user"]);
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
          showError(temp[0]['error']);
        else {
          showMessage("Item deleted from cart");
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

  let DisplayItemInCart = function (item) {
    return (
      <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
        <a className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="#" style={{ "width": "12.5rem" }}>
          <img
            className="rounded-3"
            src={getBaseImage() + "product/" + item.photo}
            alt="Product"
            onError={(e) => e.target.src = fallbackImage}
          />
          <span className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2" data-bs-toggle="tooltip" title="Remove from cart">
            <FaTrash size={10} onClick={() => DeleteFromCart(item.cartid, item.price, item.quantity)} />
          </span>
        </a>
        <div className="text-center text-sm-start">
          <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">{item.title}</a></h3>
          <div className="d-inline-block text-accent">{item.price}</div>
          <div className="d-inline-block text-accent">X {item.quantity}</div>
          <div className="d-inline-block text-accent">= {item.price * item.quantity}</div>
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
            showError(temp[0]['error']);
          else if (temp[1]['total'] == 0) {
            showMessage("Cart is empty");
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
      <ToastContainer />
      <div>
        <main className="page-wrapper">
          <Menu />
          <div className="mt-5">
            <div className="container pt-1">
              <div className="d-lg-flex justify-content-between pb-1">
                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                  <h1 className="h4 text-dark mb-0">Cart</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-5 pb-3 mt-5">
            <div className="bg-light shadow-lg rounded-3 overflow-hidden">
              <div className="row">
                <section className="col-lg-8 pt-2 pt-lg-4 pb-4 mb-3">
                  <div className="pt-2 px-4 pe-lg-0 ps-xl-5">
                    {data.map((item) => DisplayItemInCart(item))}
                  </div>
                </section>
                <aside className="col-lg-4 ps-xl-5">
                  <hr className="d-lg-none" />
                  <div className="p-4 h-100 ms-auto border-start">
                    <div className="px-lg-2">
                      <div className="text-center mb-4 py-3 border-bottom">
                        <h2 className="h6 mb-3 pb-1">Cart total</h2>
                        <h3 className="fw-normal">{total}</h3>
                      </div>
                      <a className="btn btn-primary btn-shadow d-block w-100 mt-4" href="marketplace-checkout.html">
                        <FaCreditCard size={20} className="me-2" />
                        Secure Checkout
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
