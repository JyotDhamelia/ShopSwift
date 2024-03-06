import React from "react";
import { Link } from "react-router-dom";

export default function AdminMenu() {
    return (<>
        <header class="text-gray-900 bg-indigo-300 body-font border-b border-opacity-20">
            <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <div>
                        <img src="./Images/Shop-Swift.png" height="60" width="60" />
                    </div>
                    <span class="ml-3 text-xl font-bold">Shop-Swift<span className="text-sm font-semibold"> (Admin Pannel)</span></span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base text-gray-900 justify-center">
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-home">Home</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-category">Categories</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-products">Products</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-users">Customers</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-orders">Orders</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-change-password">Change Password</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-logout">Log Out</Link>
                </nav>
            </div>
        </header>
    </>);
}
