import { React, useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import axios from "axios";
import BaseAddress from "./BaseAddress";
import { Link } from "react-router-dom";
import IsLogedIn from "./FunctionalCookies";

function AdminProducts() {

    IsLogedIn();

    let [product, setProduct] = useState([]);

    let DisplayProduct = function (item) {
        return (<>
            <tr class="bg-indigo-100 border-b dark:bg-indigo-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                    {item.id}
                </th>
                <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                    {item.categorytitle}
                </td>
                <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                    {item.title}
                </td>
                <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                    <img src={"http://www.theeasylearnacademy.com/shop/images/product/" + item.photo} />
                </td>
                <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                    {item.price}
                </td>
                <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                    {item.stock}
                </td>
                <td class="px- py-4 text-gray-700">
                    {item.detail}
                </td>
                <td class="px-6 py-4">
                    <a href={"/admin-edit-products/" + item.id} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
        </>);
    }

    useEffect(() => {
        let Apiaddress = BaseAddress() + "product.php";
        if (product.length == 0) {
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
                        setProduct(data);
                    }
                }
            });
        }
    });

    return (<>
        <AdminMenu />
        <div className="mx-4 md:mx-16 mt-7">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-gray-700">Manage Products</h1>
                <Link to="/admin-insert-products"><button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add Product</button></Link>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center capitalize">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3" width="10%">
                                Product Id
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3" width="5%">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                Photo
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                Stock
                            </th>
                            <th scope="col" class="px-6 py-3" width="10%">
                                Details
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
                        {product.map((item) => DisplayProduct(item))}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </>);
}
export default AdminProducts;