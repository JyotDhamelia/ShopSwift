import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getBase, getBaseImage } from "./Common";
import { useNavigate } from "react-router-dom";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import { FaTrash, FaShoppingCart } from "react-icons/fa"; 
import "react-toastify/dist/ReactToastify.css";

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
                    showError(temp[0]['error']);
                else {
                    showMessage("Item removed from wishlist");
                    let tempdata = data.filter((item) => item.id != wishlistid);
                    setData(tempdata);
                }
            }
        });
        return false;
    }

    let MoveToCart = function (productid) {
        let userid = cookies['userid'];
        let apiAddress = getBase() + `move_to_cart.php?usersid=53&productid=${productid}`;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress,
        }).then((response) => {
            if (response.status === 200) {
                let temp = response.data;
                if (temp[0]['error'] != "no") //error
                    showError(temp[0]['error']);
                else {
                    showMessage("Item moved to cart");
                    let tempdata = data.filter((item) => item.id != productid);
                    setData(tempdata);
                }
            }
        });
    }

    const fallbackImage = "https://via.placeholder.com/200";

    let DisplayItemInWishlist = function (item) {
        return (
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="card shadow-sm border-0 d-flex flex-column">
                    <div className="card-body d-flex flex-column">
                        <a href="#" className="d-block mb-3 position-relative">
                            {/* Image displayed as usual */}
                            <img className="img-fluid rounded-3"
                                src={getBaseImage() + "product/" + item.photo}
                                style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }}
                                onError={(e) => e.target.src = fallbackImage}
                            />
                            {/* Trash bin icon placed at the top-right corner */}
                            <span className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
                                data-bs-toggle="tooltip" title="Remove from Wishlist"
                                onClick={() => DeleteFromWishlist(item.id)}>
                                <FaTrash size={10} /> {/* Using the FaTrash icon here */}
                            </span>
                        </a>
                        <h5 className="h6 product-title mb-2 text-truncate" style={{ lineHeight: "1.2em" }}>
                            <a href="marketplace-single.html">{item.title}</a>
                        </h5>
                        <p className="text-muted mb-3">{item.price}</p>
                        <button className="btn btn-primary btn-sm mt-auto" onClick={() => MoveToCart(item.id)}>
                            <FaShoppingCart size={15} className="me-1" /> 
                            Move to cart
                        </button>
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
                        showError(temp[0]['error']);
                    else if (temp[1]['total'] == 0) {
                        showMessage("Wishlist is empty");
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
            <ToastContainer />
            <div>
                <main className="page-wrapper pb-5">
                    <Menu />
                    {/* Page Title */}
                    <div className="mt-5">
                        <div className="container pt-1">
                            <div className="d-lg-flex justify-content-between pb-1">
                                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                                    <h1 className="h4 text-dark mb-0">Wishlist</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Wishlist Items */}
                    <div className="">
                        <div className="container">
                            <div className="row">
                                <section className="col-12 pt-2 pt-lg-4">
                                    <div className="row">
                                        {data.length === 0 ? (
                                            <div className="col-12 text-center">
                                                <h4>Your wishlist is empty.</h4>
                                            </div>
                                        ) : (
                                            data.map((item) => DisplayItemInWishlist(item))
                                        )}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
