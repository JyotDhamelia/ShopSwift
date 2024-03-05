import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useCookies } from "react-cookie";
import IsLogedIn from "./FunctionalCookies";
import BaseAddress from "./BaseAddress";
import axios from "axios";

function AdminHome() {

    IsLogedIn();

    let [totalCategories, setTotalcategories] = useState('');
    let [totalUsers, setTotalusers] = useState('');
    let [totalProducts, setTotalproducts] = useState('');
    let [totalOrders, setTotalorders] = useState('');

    let FetchCategory = function () {
        let apiAddress = BaseAddress() + "category.php";
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    alert(data[0]['error']);
                }
                else if (data[1]['total'] == 0) {
                    alert("No Data Found");
                }
                else {
                    setTotalcategories(data[1]['total']);
                    console.log(totalCategories);
                }
            }
        });
    }

    let FetchOrders = function () {
        let apiAddress = BaseAddress() + "orders.php";
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    alert(data[0]['error']);
                }
                else if (data[1]['total'] == 0) {
                    alert("No Data Found");
                }
                else {
                    setTotalorders(data[1]['total']);
                    console.log(totalOrders);
                }
            }
        });
    }

    let FetchProducts = function () {
        let apiAddress = BaseAddress() + "product.php";
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != "no") {
                    alert(data[0]['error']);
                }
                else if (data[1]['total'] == 0) {
                    alert("No Data Found")
                }
                else {
                    setTotalproducts(data[1]['total']);
                    console.log(totalProducts);
                }
            }
        });
    }

    let FetchUsers = function () {
        let apiAddress = BaseAddress() + "users.php";
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    alert(data[0]['error']);
                }
                else if (data[1]['total'] == 0) {
                    alert("No Data Found");
                }
                else {
                    setTotalusers(data[1]['total']);
                    console.log(totalUsers);
                }
            }
        });
    }

    useEffect(() => {
        FetchCategory();
        FetchUsers();
        FetchOrders();
        FetchProducts();
    });

    return (<>
        <AdminMenu />
        <div className="container mx-auto mt-28 mb-24">
            <h2 className="text-2xl text-gray-700 font-semibold text-center mb-16">Welcome Admin</h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <div className="bg-blue-500 p-5 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                            <Link to="/admin-category" className="text-white">
                                <div className="text-4xl font-semibold">{totalCategories} Types</div>
                                <div className="text-sm mt-2">View Types</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-green-500 p-5 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                            <Link to="/admin-products" className="text-white">
                                <div className="text-4xl font-semibold">{totalProducts} Items</div>
                                <div className="text-sm mt-2">View Products</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-yellow-500 p-5 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out">
                            <Link to="/admin-users" className="text-white">
                                <div className="text-4xl font-semibold">{totalUsers} Users</div>
                                <div className="text-sm mt-2">View Users</div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-gray-600 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out">
                            <Link to="/admin-orders" className="text-white">
                                <div className="text-4xl font-semibold">{totalOrders} Order</div>
                                <div className="text-sm mt-2">View Orders</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}
export default AdminHome;