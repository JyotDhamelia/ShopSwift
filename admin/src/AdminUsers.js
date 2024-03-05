import React from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import axios from "axios";
import BaseAddress from "./BaseAddress";
import { IsLogedIn2 } from './ClassCookies';
import { withCookies } from "react-cookie";

class AdminUsers extends IsLogedIn2 {

    DisplayUsers = function (item) {
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
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
        </>);
    }

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let Apiaddress = BaseAddress() + "users.php";
        axios({
            method: 'get',
            url: Apiaddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    alert(data[0]['error']);
                }
                else if (data[1]['total'] == 0) {
                    alert("No Data Found");
                }
                else {
                    data.splice(0, 2);
                    this.setState({
                        users: data
                    })
                }
            }
        })
    }

    render() {
        return (<>
            <AdminMenu />
            <div className="mx-4 md:mx-16 mt-7">
                <h1 className="mt-7 font-bold text-xl text-gray-700">Manage Users</h1>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center capitalize">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    User Id
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3" width="5%">
                                    Mobile
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Update
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((item) => this.DisplayUsers(item))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>);
    }
}
export default withCookies(AdminUsers);