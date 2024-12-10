import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import {useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {getBase} from "./Common";
export default function Checkout() {
    var [firstname,setFirstName] = useState();
    var [lastname,setLastName] = useState();
    var [mobile,setMobile] = useState();
    var [city,setCity] = useState();
    var [pincode,setPincode] = useState();
    var [address,setAddress] = useState();
    var [remarks,setRemarks] = useState();
    var [cookies, setCookie] = useCookies(["user"]);
    let navigate = useNavigate();
    let DoCheckout = (event) => {
        event.preventDefault();
        let apiAddress = getBase() + "checkout.php";
        var data = new FormData();
        data.append('fullname',firstname + " " + lastname);
        data.append('mobile',mobile);
        data.append('city',city);
        data.append('pincode',pincode);
        data.append('address',address);
        data.append('address2','some address');
        data.append('remarks',remarks);
        data.append('userid',cookies.userid);
        /*
                1) [{"error":"input is missing"}]
                2) [{"error":"no"},{"success":"no"},{"message":"cart is empty"}]
                3) [{"error":"no"},{"success":"no"},{"message":"following items are out of stock \ndell laptop"}]
                4) [{"error":"no"},{"success":"yes"},{"message":"order placed successfully with orderid 4"}]
            */
        axios({
            method: "post",
            responseType: "json",
            data: data,
            url: apiAddress
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                let data = response.data;
                console.log(data);
                if (data[0]['error'] !== 'no') {
                    alert(data[0]['error']);
                }
                alert(data[2]['message']);
                if (data[1]['success'] === 'yes') {
                    // setCookie("userid", data[3]['id']);
                    navigate('/');
                }
            }
        });
    }
    return (
        <>
            <div>
                <main className="page-wrapper pb-5">
                    {/* Navbar for NFT Marketplace demo*/}
                    {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
                    <Menu />
                    {/* Page Title*/}
                    <div className="bg-accent pt-4 pb-5">
                        <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
                            <div className="d-lg-flex justify-content-between pb-3">

                                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                                    <h1 className="h3 text-light mb-0">Checkout</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="row ">
                    <div className="col-12 m-3">
                    <main style={{ "padding-top": "1rem" }}>
                        <section className="pt-4">
                            <div className=" pt-2">
                                {/* Page title + breadcrumb*/}

                                {/* Content*/}
                                {/* Checkout form*/}
                                <form className="needs-validation" 
                                onSubmit={(event) => DoCheckout(event)} >
                                    <div className="row g-0 pb-5 mb-xl-3">
                                        {/* Delivery details*/}
                                        <div className="col-xl-11    mb-3">
                                            <h2 className="h5 mb-4">Delivery details</h2>
                                            <div className="row gx-4 gy-3">
                                                <div className="col-sm-4">
                                                    <label className="form-label" htmlFor="firstname">First name <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" id="firstname" required
                                                    onChange={(event) => setFirstName(event.target.value)} />
                                                    <div className="invalid-feedback">Please enter your first name!</div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <label className="form-label" htmlFor="lastname">Last name <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" id="lastname" required
                                                     onChange={(event) => setLastName(event.target.value)} />
                                                    <div className="invalid-feedback">Please enter your last name!</div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <label className="form-label" htmlFor="mobile">Phone number <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="tel" id="mobile" required 
                                                     onChange={(event) => setMobile(event.target.value)} />
                                                    <div className="invalid-feedback">Please enter your phone number!</div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label" htmlFor="city">City</label>
                                                    <input className="form-control bg-image-none" type="text" id="city" required 
                                                     onChange={(event) => setCity(event.target.value)} />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label" htmlFor="pincode">Pincode</label>
                                                    <input className="form-control bg-image-none" type="number" id="pincode" 
                                                     onChange={(event) => setPincode(event.target.value)}/>
                                                </div>
                                                <div className="col-sm-12">
                                                    <label className="form-label" htmlFor="co-address">Address <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" id="co-address"  required 
                                                     onChange={(event) => setAddress(event.target.value)} />
                                                    <div className="invalid-feedback">Please enter your address!</div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <label className="form-label" htmlFor="remarks">Remarks</label>
                                                    <textarea className="form-control bg-image-none" id="remarks" rows={6} placeholder="Please write here any additional information..." defaultValue={""} 
                                                     onChange={(event) => setRemarks(event.target.value)}/>
                                                </div>
                                                <div className="col-sm-12">
                                                    <button type="submit" className="btn btn-accent btn-shadow d-block w-100">
                                                        Place Order (Cash on delivery)
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                        {/* Footer*/}
                     
                    </main>
                    </div>
                </div>

                </main>
                <Footer />
            </div>
        </>
    );
}
