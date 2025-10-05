import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getBase, getBaseImage } from "../helpers/Common";
import { useNavigate } from "react-router-dom";
import { toast } from "../helpers/toastHelper";
import { FiTrash, FiShoppingCart, FiHeart } from "react-icons/fi";

export default function Wishlist() {
    var [data, setData] = useState([]);
    var [cookies, setCookie] = useCookies(["user"]);
    let navigate = useNavigate();

    let DeleteFromWishlist = function (wishlistid) {
        let apiAddress = getBase() + "delete_from_wishlist.php?wishlistid=" + wishlistid;

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
                    toast.success("item removed from wishlist");
                    let tempdata = data.filter((item) => item.id != wishlistid);
                    setData(tempdata);
                }
            }
        });
        return false;
    }

    let MoveToCart = function (productid, wishlistid) {
        let userid = cookies['userid'];
        let apiAddress = getBase() + `move_to_cart.php?usersid=${userid}&productid=${productid}`;
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
                    toast.success("item moved to cart");
                    // Delete from wishlist after moving to cart
                    DeleteFromWishlist(wishlistid);
                }
            }
        });
    }

    const fallbackImage = "https://via.placeholder.com/200";

    let DisplayItemInWishlist = function (item) {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="product-card h-100">
                    <div className="product-card-inner">
                        <div className="product-badge">Wishlist</div>
                        <button 
                            className="wishlist-delete-btn"
                            onClick={() => DeleteFromWishlist(item.id)}
                            title="Remove from Wishlist"
                        >
                            <FiTrash size={18} />
                        </button>
                        <div className="product-image-wrapper">
                            <a href={`/product-detail/${item.productid}`}>
                                <img
                                    src={getBaseImage() + "product/" + item.photo}
                                    alt={item.title}
                                    className="product-image"
                                    onError={(e) => e.target.src = fallbackImage}
                                />
                            </a>
                        </div>
                        <div className="product-body">
                            <h5 className="product-title">
                                <a href={`/product-detail/${item.productid}`} className="text-decoration-none">
                                    {item.title}
                                </a>
                            </h5>
                            <div className="product-price-wrapper">
                                <span className="product-price">₹{item.price}</span>
                            </div>
                            <button 
                                className="btn-product btn-cart w-100 mt-3"
                                onClick={() => MoveToCart(item.productid, item.id)}
                            >
                                <FiShoppingCart className="me-2" />
                                Move to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        if (data.length === 0) {
            var apiAddress = getBase() + "wishlist.php?usersid=" + cookies['userid'];
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
                        toast.info("wishlist is empty");
                    }
                    else {
                        temp.splice(0, 2); 
                        setData(temp);
                    }
                }
            }).catch(function (error) {
                navigate('/error');
            });
        }
    }, [data, cookies, navigate]);

    return (
        <>
            <div>
                <main className="page-wrapper pb-5" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
                    <Menu />
                    
                    <div className="hero-section py-5 mt-5">
                        <div className="container">
                            <div className="text-center mb-5">
                                <div className="d-inline-flex align-items-center justify-content-center mb-3" 
                                     style={{ background: 'rgba(220, 53, 69, 0.1)', padding: '15px', borderRadius: '50%' }}>
                                    <FiHeart size={40} color="#dc3545" />
                                </div>
                                <h1 className="display-4 fw-bold mb-3" style={{ color: '#2c3e50' }}>
                                    My Wishlist
                                </h1>
                                <p className="lead text-muted">Your favorite products saved for later</p>
                            </div>
                        </div>
                    </div>

                    <div className="container pb-5">
                        {data.length === 0 ? (
                            <div className="cart-empty-state">
                                <FiHeart size={80} color="#6c757d" />
                                <h3>Your wishlist is empty</h3>
                                <p>Save items you love for later!</p>
                                <a href="/" className="btn-modern btn-modern-primary">
                                    Continue Shopping
                                </a>
                            </div>
                        ) : (
                            <div className="row">
                                {data.map((item) => DisplayItemInWishlist(item))}
                            </div>
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
