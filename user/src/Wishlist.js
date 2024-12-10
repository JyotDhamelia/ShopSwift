import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {getBase} from "./Common";
import { useNavigate } from "react-router-dom";
export default function Wishlist() {
    var [data, setData] = useState([]);
    var [cookies, setCookie] = useCookies(["user"]);
    let navigate = useNavigate();
    let DeleteFromWishlist = function (wishlistid) 
    {
        let apiAddress = getBase() + "delete_from_wishlist.php?wishlistid=" + wishlistid;
        
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress,
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                let temp = response.data;
                if (temp[0]['error'] != "no")
                    alert(temp[0]['error']);
                else {
                    alert("Item removed from wishlist");
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
            console.log(response);
            if (response.status === 200) {
                let temp = response.data;
                if (temp[0]['error'] != "no") //error
                    alert(temp[0]['error']);
                else {
                    alert("Item moved to cart");
                    //remove item from wishlist
                    let tempdata = data.filter((item) => item.id != productid);
                    setData(tempdata);
                }
            }
        });
    }
    let DisplayItemInWishlist = function (item) {
        return (<div className="col-sm-6 mb-3 pt-3">
            <div className='card'>
                <div className="card-body shadow">
                    <a className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="#" style={{ "width": "12.5rem" }}>
                        <img className="rounded-3" src={"https://theeasylearnacademy.com/shop/images/product/" + item.photo} alt="Product" /><span className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2" data-bs-toggle="tooltip" title="Remove from Favorites">
                            <i className="ci-trash" onClick={() => DeleteFromWishlist(item.id)} /></span></a>
                    <div className="text-center text-sm-start">
                        <h3 className="h6 product-title mb-2"><a href="marketplace-single.html">{item.title}</a></h3>
                        <div className="d-inline-block text-accent">{item.price}</div>
                    </div>
                    <button className="btn btn-primary btn-sm d-block w-100 mt-3" type="button" onClick={() => MoveToCart(item.id)}><i className="ci-cart fs-sm me-1" />Move to cart</button>
                </div>
            </div>
        </div>);
    }

    useEffect(() => {
        if (data.length == 0) {
            //api call

            var apiAddress = getBase() + "wishlist.php?usersid=" + cookies['userid'];
            // alert(apiAddress);
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress,
            }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    let temp = response.data;
                    if (temp[0]['error'] != "no")
                        alert(temp[0]['error']);
                    else if (temp[1]['total'] == 0) {
                        alert("Cart is empty");
                    }
                    else {
                        //cart has at least 1 item 
                        temp.splice(0, 2); //remove 1st 2 items from list 
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
                <main className="page-wrapper pb-5">
                    <Menu />
                    {/* Page Title*/}
                    <div className="bg-accent pt-4 pb-5">
                        <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
                            <div className="d-lg-flex justify-content-between pb-3">

                                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                                    <h1 className="h3 text-light mb-0">Wishlist</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-5 pb-3 mt-5">
                        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                            <div className="row">
                                {/* Content*/}
                                <section className="col-lg-12 pt-2 pt-lg-4 pb-4 mb-3">
                                    <div className="pt-2 px-4 pe-lg-0 ps-xl-5">
                                        <div className="row">
                                            {data.map((item) => DisplayItemInWishlist(item))}
                                        </div>
                                    </div>
                                </section>
                                {/* Sidebar*/}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
