import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import Footer from './Footer';
import BaseAddress from "../helpers/BaseAddress";
import axios from "axios";
import showError from "../helpers/toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IsLogedIn from '../helpers/FunctionalCookies';

function AdminViewUserDetails() {

  IsLogedIn();

  let [id, setId] = useState('');
  let [email, setEmail] = useState('');
  let [mobile, setMobile] = useState('');

  let FetchUsers = function () {
    let url = window.location.href;
    let last_position_of_slash = url.lastIndexOf("/") + 1;
    let id = url.substring(last_position_of_slash);
    let apiAddress = BaseAddress() + "users.php?id=" + id;
    axios({
      url: apiAddress,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        let data = response.data;
        if (data[0]['error'] !== 'no') {
          showError("Error Occured while fetching users");
        }
        else if (data[1]['total'] === 0) {
          showError("No Data Found");
        }
        else {
          const foundObject = response.data.find(obj => obj.id === id);
          setId(foundObject.id);
          setEmail(foundObject.email);
          setMobile(foundObject.mobile);
        }
      }
    }).catch((error) => {
      showError('oops something went wrong, please contact developer....');
    });
  }

  useEffect(() => {
    FetchUsers()
  });

  return (
    <>
      <AdminMenu />
      <ToastContainer />
      <div className="flex items-center justify-center bg-indigo-200 mt-36 mb-15">
        <div className="relative flex w-104 flex-col rounded-xl bg-indigo-100 bg-clip-border text-gray-700 shadow-md">
          <div className="p-10">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                <i class="fas fa-user fa-xs"></i> User Details
              </h5>
              <Link to="/admin-users" className="block font-sans text-sm font-bold leading-normal text-blue-500 antialiased hover:underline">
                View all
              </Link>
            </div>
            <div className="divide-y divide-gray-200 mt-5">
              <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
                <div className="flex items-center gap-x-3 mr-5">
                  <img src="/Images/images.jpeg" alt="" className="relative inline-block h-14 w-14 rounded-full object-cover object-center mr-2" />
                  <div>
                    <p className="block font-sans text-m font-light leading-normal text-gray-700 antialiased capitalize">
                      <span className='font-semibold'> User id - </span> {id}
                    </p>
                    <p className="block font-sans text-m font-light leading-normal text-gray-700 antialiased capitalize">
                      <span className='font-semibold'> Email id - </span> {email}
                    </p>
                    <p className="block font-sans text-m font-light leading-normal text-gray-700 antialiased capitalize">
                      <span className='font-semibold'> Mobile No - </span> {mobile}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default AdminViewUserDetails;