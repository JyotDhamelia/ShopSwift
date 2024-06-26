import React from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import BaseAddress from "./BaseAddress";
import axios from "axios";
import { IsLogedIn2 } from './ClassCookies';
import { withCookies } from "react-cookie";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class AdminOrders extends IsLogedIn2 {

    DisplayOrders = function (item) {
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
                    {item.amount}
                </td>
                <td class="px-6 py-4">
                    {item.orderstatus}
                </td>
                <td class="px-6 py-4">
                    <a href="" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
            </tr>
        </>)
    }

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        let Apiaddress = BaseAddress() + "orders.php";
        axios({
            method: 'get',
            url: Apiaddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    showError("Error While Feching Orders");
                }
                else if (data[1]['total'] == 0) {
                    showError("No Data Found");
                }
                else {
                    data.splice(0, 2);
                    this.setState({
                        orders: data
                    });
                }
            }
        });
    }

    render() {
        return (<>
            <AdminMenu />
            <ToastContainer/>
            <div className="mx-4 md:mx-16 mt-7">
                <h1 className="mt-7 font-bold text-xl text-gray-700">Manage Orders</h1>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center capitalize">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Order Id
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Customer Detail
                                </th>
                                <th scope="col" class="px-6 py-3" width="5%">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Ammount
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    View Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orders.map((item) => this.DisplayOrders(item))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>);
    }
}

export default withCookies(AdminOrders);