import Menu from "./Menu";
import Footer from "./Footer";
import Slider from "./Slider";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getBase, getBaseImage } from "../helpers/Common";
import { FiArrowRight, FiShoppingBag, FiShoppingCart, FiHeart, FiPackage } from "react-icons/fi";
import { toast } from "../helpers/toastHelper";
import "../css/styles.css";

export default function Category() {
  const navigate = useNavigate();
  let [cookies] = useCookies(["user"]);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
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

  useEffect(() => {
    if (data.length === 0) {
      axios
        .get(getBase() + "category.php")
        .then((response) => {
          if (response.status === 200) {
            const responseData = response.data;
            if (responseData[0]["error"] !== "no") {
              toast.error(responseData[0]["error"]);
            } else if (responseData[1]["total"] === 0) {
              toast.info("no data found");
            } else {
              responseData.splice(0, 2);
              setData(responseData);
            }
          }
        })
        .catch(() => {
          setError(true);
          navigate("/error");
        });
    }

    // Fetch featured products
    if (products.length === 0) {
      axios
        .get(getBase() + "product.php")
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            if (data[0]["error"] === "no" && data[1]["total"] > 0) {
              data.splice(0, 2);
              // Get first 8 products
              setProducts(data.slice(0, 8));
            }
          }
        })
        .catch(() => {
          console.log("Failed to load products");
        });
    }
  }, [data, products, navigate]);

  if (error) {
    return (
      <div className="text-center">
        <h3>Failed to load categories. Please try again later.</h3>
      </div>
    );
  }

  return (
    <>
      <Menu />
      <Slider />
      <main className="page-wrapper pb-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
        <div className="hero-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <div className="d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ background: 'rgba(220, 53, 69, 0.1)', padding: '15px', borderRadius: '50%' }}>
                <FiShoppingBag size={40} color="#dc3545" />
              </div>
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
                Explore Our Categories
              </h1>
              <p className="lead text-muted">Discover amazing products across various categories</p>
            </div>
          </div>
        </div>
        
        <div className="container pb-5">
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
            {data.map((category) => (
              <div key={category.id} className="col">
                <a href={`/product/${category.id}`} className="text-decoration-none">
                  <div className="category-card h-100">
                    <div className="category-card-inner">
                      <div className="category-image-wrapper">
                        <img
                          src={`https://theeasylearnacademy.com/shop/images/category/${category.photo}`}
                          alt={category.title}
                          className="category-image"
                        />
                        <div className="category-overlay">
                          <div className="category-overlay-content">
                            <span className="explore-text">
                              Explore <FiArrowRight className="ms-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="category-body">
                        <h5 className="category-title">{category.title}</h5>
                        <div className="category-divider"></div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        {products.length > 0 && (
          <>
            <div className="hero-section py-5">
              <div className="container">
                <div className="text-center mb-5">
                  <div className="d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ background: 'rgba(220, 53, 69, 0.1)', padding: '15px', borderRadius: '50%' }}>
                    <FiPackage size={40} color="#dc3545" />
                  </div>
                  <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
                    Featured Products
                  </h1>
                  <p className="lead text-muted">Check out our latest and trending products</p>
                </div>
              </div>
            </div>
            
            <div className="container pb-5">
              <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
                {products.map((product) => (
                  <div className="col" key={product.id}>
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
                ))}
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
