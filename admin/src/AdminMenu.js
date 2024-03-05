import React from "react";
import { Link } from "react-router-dom";

export default function AdminMenu() {
    return (<>
        <header class="text-gray-900 bg-indigo-300 body-font border-b border-opacity-20">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
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
