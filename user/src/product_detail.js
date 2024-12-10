import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getBase,getBaseImage} from "./Common";
export default function ProductDetail() {
    var [product, setProduct] = useState('');
    let navigate = useNavigate();
    useEffect(function () {
        console.log(product);
        if(product  === '')
        {
            let productid = window.location.href.split("/").pop();
            let apiAddress = getBase() + "product.php?productid=" + productid;
            //api call
            axios({
                method: "get",
                responseType: "json",
                url: apiAddress
            }).then(function (response) {
                console.log(response);
                if(response.status === 200)
                {
                    let data = response.data;
                    if(data[0]['error'] !== 'no')
                    {
                        alert(data[0]['error']);
                    }
                    else if(data[1]['total'] === 0)
                    {
                        alert("No product found");
                    }
                    else 
                    {
                        console.log(data);
                        data.splice(0, 2); //delete first two elements
                        setProduct(data[0]);
                    }
                }
            }).catch(function (error) {
                navigate('/error');
            });
        }
    });
    return (<>
      <div>
      <main className="page-wrapper" style={{ overflow: 'scroll', paddingBottom: '50px' }}>
            <Menu />
            <div className="page-title-overlap bg-accent pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">

                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">{product.title}</h1>
                    </div>
                </div>
            </div>
            {/* Shadow box*/}
            <div className="container mb-3 pb-3">
                <div className="bg-light shadow-lg rounded-3">
                    <div className="row">
                        {/* Content*/}
                        <section className="col-lg-5 pt-2 pt-lg-4 pb-4 mb-lg-3">
                            <div className="pt-3 px-4 pe-lg-0 ps-xl-5">
                              
                                <img src={getBaseImage() + "product/" + product.photo} alt="Product image" className="img-fluid" />
                                {/* Wishlist + Sharing*/}
                                <div className="row mt-4">
                                    <div className="col">
                                        <span className="fs-4">{product.price}</span>
                                    </div>
                                    <div className="col"> <button className="btn btn-outline-accent" type="button"><i className="ci-heart fs-lg me-2" />Add to Favorites</button></div>
                                    <div className="col"> <button className="btn btn-outline-accent" type="button"><i className="ci-bag fs-lg me-2" />Add to cart</button></div>
                                
                                </div>
                            </div>
                        </section>
                        <section className="col-lg-7 pt-4 pt-lg-0 ps-xl-5">
                        <div className="pt-5 px-4 pe-lg-0 ps-xl-5">
                            <h4>{product.detail}</h4>
                        </div>
                        </section>
                        {/* Sidebar*/}

                    </div>
                </div>
            </div>
            {/* Product description*/}

        </main>
      </div>
        <Footer />
    </>);
}