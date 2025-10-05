import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import BaseAddress from "../helpers/BaseAddress";
import axios from "axios";
import showError from "../helpers/toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import IsLogedIn from "../helpers/FunctionalCookies";

function AdminOrders() {

    IsLogedIn();

    let [orders, setOrders] = useState([]);
    let [orderfetched, setOrderfetched] = useState('false');

    let DisplayOrders = function (item) {
        return (<>
            <tr class="bg-indigo-100 border-b dark:bg-indigo-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                </th>
                <td class="px-6 py-4">
                    {item.fullname} <br />
                    {item.address1} <br />
                    {item.address2} <br />
                    {item.city} - {item.pincode}
                </td>
                <td class="px-6 py-4">
                    {item.billdate}
                </td>
                <td class="px-6 py-4">
                    ₹{item.amount}
                </td>
                <td class="px-6 py-4">
                    {item.orderstatus}
                </td>
                <td class="px-6 py-4">
                    <Link to={"/admin-view-orders/" + item.id} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                </td>
            </tr>
        </>)
    }

    let FetchOrders = function () {
        if (orderfetched === 'false') {
            let Apiaddress = BaseAddress() + "orders.php";
            axios({
                method: 'get',
                url: Apiaddress,
                responseType: 'json'
            }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    let data = response.data;
                    if (data[0]['error'] !== 'no') {
                        showError("Error While Feching Orders");
                    }
                    else if (data[1]['total'] === 0) {
                        showError("No Data Found");
                    }
                    else {
                        data.splice(0, 2);
                        setOrders(data);
                        setOrderfetched('true');
                    }
                }
            }).catch((error) => {
                showError('oops something went wrong, please contact developer....');
            });
        }
    }

    useEffect(() => {
        FetchOrders();
    });

    return (<>
        <AdminMenu />
        <ToastContainer />
        <div className="mx-4 md:mx-16 mt-7">
            <h1 className="mt-7 font-bold text-xl text-gray-700"><i class="fa-solid fa-cart-shopping fa-sm"></i> Manage Orders</h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center capitalize">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3" width="10%">
                                <i class="fa-solid fa-id-card fa-sm"></i> Order Id
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                <i class="fas fa-info-circle fa-sm"></i> Customer Detail
                            </th>
                            <th scope="col" class="px-6 py-3" width="5%">
                                <i class="fas fa-calendar-alt fa-sm"></i> Date
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                <i class="fa fa-money fa-sm"></i> Ammount
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                <i class="fa-solid fa-list-check fa-sm"></i> Status
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                <i class="fa-solid fa-eye fa-sm"></i> View Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item) => DisplayOrders(item))}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </>);
}

export default AdminOrders;