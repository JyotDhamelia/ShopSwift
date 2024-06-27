import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import axios from "axios";
import BaseAddress from "./BaseAddress";
import showError from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function AdminUsers() {

    let [users, setUsers] = useState([]);

    let DisplayUsers = function (item) {
        return (<>
            <tr class="bg-indigo-100 border-b dark:bg-indigo-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                </th>
                <td class="px-6 py-4">
                    {item.email}
                </td>
                <td class="px-6 py-4">
                    {item.mobile}
                </td>
                <td class="px-6 py-4">
                    <Link to={"/admin-view-users/" + item.id} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                </td>
            </tr>
        </>);
    }

    let FetchUsers = function () {
        let Apiaddress = BaseAddress() + "users.php";
        axios({
            method: 'get',
            url: Apiaddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                let data = response.data;
                if (data[0]['error'] !== 'no') {
                    showError(data[0]['error']);
                }
                else if (data[1]['total'] === 0) {
                    showError("No Data Found");
                }
                else {
                    data.splice(0, 2);
                    setUsers(data);
                }
            }
        }).catch((error) => {
            showError('oops something went wrong, please contact developer....');
        });
    }

    useEffect(() => {
        FetchUsers();
    });

    return (<>
        <AdminMenu />
        <ToastContainer />
        <div className="mx-4 md:mx-16 mt-7">
            <h1 className="mt-7 font-bold text-xl text-gray-700"><i class="fas fa-user fa-sm"></i> Manage Users</h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center capitalize">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3" width="10%">
                                <i class="fa-solid fa-id-card fa-sm"></i> User Id
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                <i class="fa-solid fa-envelope fa-sm"></i> Email
                            </th>
                            <th scope="col" class="px-6 py-3" width="5%">
                                <i class="fa-solid fa-mobile fa-sm"></i> Mobile
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                <i class="fa-solid fa-eye fa-sm"></i> View Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) => DisplayUsers(item))}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </>);
}

export default AdminUsers;