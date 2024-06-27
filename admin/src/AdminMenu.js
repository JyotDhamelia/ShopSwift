import React from "react";
import { Link } from "react-router-dom";

export default function AdminMenu() {
    return (<>
        <header class="text-gray-900 bg-indigo-300 body-font border-b border-opacity-20">
            <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <a href="/admin-home" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <div>
                        <img src="/Images/Shop-Swift.jpg" height="60" width="60" />
                    </div>
                    <span class="ml-3 text-xl font-bold">Shop-Swift<span className="text-sm font-semibold"> (Admin Panel)</span></span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base text-gray-900 justify-center">
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-home"><i class="fas fa-home fa-2xs"></i> Home</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-category"><i class="fa-solid fa-boxes-packing fa-2xs"></i> Categories</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-products"><i class="fa-solid fa-boxes-packing fa-2xs"></i> Products</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-users"><i class="fas fa-user fa-2xs"></i> Customers</Link>
                    <Link class="mr-5 text-gray-900 hover:text-gray-600 font-bold" to="/admin-orders"><i class="fa-solid fa-cart-shopping fa-2xs"></i> Orders</Link>
                    <Link class="mr-3 text-gray-900 hover:text-gray-600 font-bold" to="/admin-change-password"><i class="fa-solid fa-key fa-2xs"></i> Change Password</Link>
                    <span className="text-gray-900 font-bold">|</span>
                    <Link class="ml-3 text-gray-900 hover:text-gray-600 font-bold" to="/admin-logout">Log Out  <i class="fa-solid fa-right-from-bracket fa-2xs"></i></Link>
                </nav>
            </div>
        </header>
    </>);
}
