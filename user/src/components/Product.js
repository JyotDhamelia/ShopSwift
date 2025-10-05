import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBase, getBaseImage } from "../helpers/Common";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiPackage } from "react-icons/fi";
import { toast } from "../helpers/toastHelper";
import "../css/styles.css";

export default function Product() {
  let [cookies] = useCookies(["user"]);
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const fallbackImage = "https://via.placeholder.com/200";

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

  const DisplayProduct = (product) => {
    return (
      <div className="col">
        <div className="product-card h-100">
          <div className="product-card-inner">
            <div className="product-badge">New</div>
            <div className="product-image-wrapper">
              <a href={"/product-detail/" + product.id}>
                <img
                  src={getBaseImage() + "product/" + product.photo}
                  alt={product.title}
                  className="product-image"
                  onError={(e) => e.target.src = fallbackImage}
                />
              </a>
            </div>
            <div className="product-body">
              <h5 className="product-title">
                <a
                  href={"/product-detail/" + product.id}
                  className="text-decoration-none"
                >
                  {product.title}
                </a>
              </h5>
              <div className="product-price-wrapper">
                <span className="product-price">₹{product.price}</span>
              </div>
              <div className="product-actions">
                <button
                  type="button"
                  className="btn-product btn-cart"
                  onClick={(e) => {
                    e.preventDefault();
                    AddToCartOrWishList(product.id, "add_to_cart.php");
                  }}
                  title="Add to Cart"
                >
                  <FiShoppingCart className="me-2" />
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="btn-product btn-wishlist"
                  onClick={(e) => {
                    e.preventDefault();
                    AddToCartOrWishList(product.id, "add_to_wishlist.php");
                  }}
                  title="Add to Wishlist"
                >
                  <FiHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (products.length === 0) {
      const categoryId = window.location.href.split("/").pop();
      axios
        .get(getBase() + "product.php?categoryid=" + categoryId)
        .then((response) => {
          if (response.status !== 200) {
            toast.error("something went wrong, please try again later.");
          } else {
            const data = response.data;
            if (data[0]["error"] !== "no") {
              setMessage(data[0]["error"]);
            } else if (data[1]["total"] === 0) {
              setMessage("No products found");
            } else {
              data.splice(0, 2);
              setProducts(data);
            }
          }
        })
        .catch(() => {
          toast.error("failed to load products");
          navigate("/error");
        });
    }
  }, [navigate, products]);

  return (
    <>
      <Menu />
      <main className="page-wrapper pb-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
        <div className="hero-section py-5 mt-5">
          <div className="container">
            <div className="text-center mb-5">
              <div className="d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ background: 'rgba(220, 53, 69, 0.1)', padding: '15px', borderRadius: '50%' }}>
                <FiPackage size={40} color="#dc3545" />
              </div>
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
                Our Products
              </h1>
              <p className="lead text-muted">Browse through our amazing collection</p>
            </div>
          </div>
        </div>
        
        <div className="container pb-5">
          {message ? (
            <div className="row">
              <div className="col-12">
                <div className="alert alert-info text-center" style={{ 
                  background: 'white', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  borderRadius: '15px',
                  padding: '30px'
                }}>
                  <h2 className="h3">{message}</h2>
                </div>
              </div>
            </div>
          ) : (
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
              {products.map((product) => DisplayProduct(product))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
