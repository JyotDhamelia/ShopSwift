import React from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import axios from "axios";
import BaseAddress from "./BaseAddress";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";
import { IsLogedIn2 } from './ClassCookies';

class AdminCategory extends IsLogedIn2 {

    DisplayCategory = function (item) {
        return (<><tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
            </th>
            <td class="px-6 py-4">
                {item.title}
            </td>
            <td class="px-6 py-4">
                <img src={"http://www.theeasylearnacademy.com/shop/images/category/" + item.photo} />
            </td>
            <td class="px-6 py-4">
                {this.status[item.islive]}
            </td>
            <td class="px-6 py-4">
                <a href={'/admin-edit-category/' + item.id} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
            </td>
        </tr></>)
    }

    constructor(props) {
        super(props);
        this.state = {
            category: []
        }
        this.status = ['No', 'Yes'];
    }

    componentDidMount() {
        let Apiaddress = BaseAddress() + "category.php";

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
                    alert("No Category Found");
                }
                else {
                    data.splice(0, 2);
                    this.setState({
                        category: data
                    })
                }
            }
        })
    }

    render() {
        return (<>
            <AdminMenu />
            <div className="mx-4 md:mx-16 mt-7">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">Manage Categories</h1>
                    <Link to="/admin-insert-category"><button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add Category</button></Link>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center capitalize">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Category Id
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3" width="5%">
                                    Photo
                                </th>
                                <th scope="col" class="px-6 py-3" width="10%">
                                    Available
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
                            {this.state.category.map((item) => this.DisplayCategory(item))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>);
    }
}
export default withCookies(AdminCategory);