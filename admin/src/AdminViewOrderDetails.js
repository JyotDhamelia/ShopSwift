import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import Footer from './Footer';
import BaseAddress from "./BaseAddress";
import axios from "axios";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IsLogedIn from './FunctionalCookies';

function AdminViewOrderDetails() {

    IsLogedIn();

    let [id,setId ] = useState('');
    let [fullname,setFullname ] = useState('');
    let [address1, setAddress1 ] = useState('');
    let [address2, setAddress2 ] = useState('');
    let [city, setCity ] = useState('');
    let [pincode, setPincode ] = useState('');
    let [billdate, setBilldate ] = useState('');
    let [ammount, setAmmount ] = useState('');
    let [orderstatus, setOrderstatus ] = useState('');

    let FetchOrder = function () {
        let url = window.location.href;
        let last_position_of_slash = url.lastIndexOf("/") + 1;
        let id = url.substring(last_position_of_slash);
        let apiAddress = BaseAddress() + "orders.php?orderid=" + id;
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    showError("Error Ocuured while fetching orders");
                }
                else if (data[1]['total'] == 0) {
                    showError("No Data Found");
                }
                else {
                    setId(response.data[2]['id']);
                    setAddress1(response.data[2]['address1']);
                    setAddress2(response.data[2]['address2']);
                    setFullname(response.data[2]['fullname']);
                    setBilldate(response.data[2]['billdate']);
                    setCity(response.data[2]['city']);
                    setAmmount(response.data[2]['amount']);
                    setOrderstatus(response.data[2]['orderstatus']);
                    setPincode(response.data[2]['pincode']);  
                }
            }
        });
    }

    useEffect(() => {
        FetchOrder()
    });

  return (
    <>
      <AdminMenu />
      <ToastContainer/>
      <div className="flex items-center justify-center bg-indigo-200 mt-36 mb-15">
        <div className="relative flex w-96 flex-col rounded-xl bg-indigo-100 bg-clip-border text-gray-700 shadow-md">
          <div className="p-10">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Latest Order
              </h5>
              <Link to="/admin-orders" className="block font-sans text-sm font-bold leading-normal text-blue-500 antialiased">
                View all
              </Link>
            </div>
            <div className="divide-y divide-gray-200 mt-5">
              <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
                <div className="flex items-center gap-x-3 mr-5">
                  <img src="/Images/images.jpeg" alt="" className="relative inline-block h-14 w-14 rounded-full object-cover object-center mr-2" />
                  <div>
                    <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                      {id} - {fullname}
                    </h6>
                    <p className="block font-sans text-m font-light leading-normal text-gray-700 antialiased capitalize">
                      {address1}
                    </p>
                    <p className="block font-sans text-m font-light leading-normal text-gray-700 antialiased capitalize">
                      {address2}
                    </p>
                    <p className="block font-sans text-m font-light leading-normal text-gray-700 antialiased capitalize">
                      {city}-{pincode}
                    </p>
                  </div>
                </div>
                <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                 ₹{ammount}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminViewOrderDetails;
