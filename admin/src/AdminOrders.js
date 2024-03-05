import React from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import BaseAddress from "./BaseAddress";
import axios from "axios";
import { IsLogedIn2 } from './ClassCookies';
import { withCookies } from "react-cookie";

class AdminOrders extends IsLogedIn2 {

    DisplayOrders = function (item) {
        return (<>
            <div
                class="mx-3 mt-6 flex flex-col rounded-lg bg-indigo-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-900 sm:shrink-0 sm:grow sm:basis-0">
                {/* <a href="#!">
                        <img
                            class="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                            alt="Hollywood Sign on The Hill" />
                    </a> */}
                <div class="p-6">
                    <h5
                        class="mb-2 text-xl font-medium leading-tight text-gray-700 dark:text-neutral-50">
                        Name: {item.fullname}
                    </h5>
                    <p class="mb-4 text-base text-gray-700 dark:text-neutral-200">
                    Address: {item.address1} <br/>
                    {item.address2} <br/>
                    {item.city} - {item.pincode}
                    </p>
                </div>
            </div>
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
                    alert(data[0]['error']);
                }
                else if (data[1]['total'] == 0) {
                    alert("No Data Found");
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
            <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
                {this.state.orders.map((item) => this.DisplayOrders(item))}
            </div>
            <Footer />
        </>);
    }
}

export default withCookies(AdminOrders);