import React, { useState } from "react";
import Footer from "./Footer";
import AdminMenu from "./AdminMenu";
import { withCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";
import BaseAddress from "./BaseAddress";
import showError from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IsLogedIn from "./FunctionalCookies";


function AdminEditProducts() {
    IsLogedIn();
    let [title, setTitle] = useState('');
    let [categoryid, setCategoryid] = useState('');
    let [category, setCategory] = useState([]);
    let [price, setPrice] = useState('');
    let [detail, setDetail] = useState('');
    let [photo, setPhoto] = useState('');
    let [stock, setStock] = useState('');
    let [id, setId] = useState('');
    let [IsDataFetched, setIsDataFetched] = useState('');

    let FetchProductData = function () {
        if (IsDataFetched == false) {
            let url = window.location.href;
            let last_position_of_slash = url.lastIndexOf("/") + 1;
            let id = url.substring(last_position_of_slash);
            setId(id);
            let apiAddress = BaseAddress() + "product.php?productid=" + id;

            axios({
                url: apiAddress,
                method: 'get',
                encodingType: 'json'
            }).then((response) => {
                if (response.status === 200) {
                    let data = response.data;
                    let error = data[0]['error'];
                    if (error !== 'no') {
                        showError(error);
                    }
                    else {
                        let total = data[1]['total'];
                        if (total === 0) {
                            showError("no category available");
                        }
                        else {
                            setTitle(data[2]['title']);
                            setDetail(data[2]['detail']);
                            setPrice(data[2]['price']);
                            setStock(data[2]['stock']);
                            setCategoryid(data[2]['categoryid']);
                            setPhoto(data[2]['photo']);
                            setIsDataFetched(true);
                        }
                    }
                }
            }).catch((error) => {
                showError("oops something went wrong, please contact developer....");
            });
        }
    }

    let FetchCategoryData = function () {
        if (IsDataFetched === false) {
            let apiAddress = BaseAddress() + "category.php";
            axios({
                url: apiAddress,
                method: 'get',
                encodingType: 'json',
            }).then((response) => {
                if (response.status === 200) {
                    let data = response.data;
                    let error = data[0]['error'];
                    if (error !== 'no') {
                        showError(error);
                    }
                    else {
                        let total = data[1]['total'];
                        if (total === 0) {
                            showError("no category found")
                        }
                        else {
                            data.splice(0, 2);
                            setCategory(data);
                            setIsDataFetched(true);
                        }
                    }
                }
            }).catch((error) => {
                showError("oops something went wrong, please contact developer....");
            });
        }
    }

    let UpdateProduct = function (event) {
        event.preventDefault();
        let apiAddress = BaseAddress() + "update_product.php";
        let formData = new FormData();
        formData.append("name", title);
        formData.append("photo", photo);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("detail", detail);
        formData.append("productid", id);
        formData.append("categoryid", categoryid);
        console.log("form data has", formData.keys, formData.values);
        axios({
            method: 'post',
            encType: 'json',
            url: apiAddress,
            data: formData,
            config: { header: { 'content-type': 'enctype/form-data' } }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                let data = response.data;
                let error = data[0]['error'];
                if (error !== "no") {
                    alert(error);
                }
                else {
                    let message = data[2]['message']
                    alert(message);
                }
                if (data[1]['success'] === 'yes') {
                    window.location = "/admin-products";
                }
            }
        }).catch((error) => {
            showError("oops something went wrong, please contact developer....");
        });
    }

    useEffect(() => {
        FetchProductData();
        FetchCategoryData();
    });

    return (<>
        <AdminMenu />
        <ToastContainer />
        <div className="bg-indigo-200 capitalize">
            <div className="container mx-auto p-4 flex justify-center items-center">
                <div className="lg:w-2/3 md:w-3/4 sm:w-full bg-indigo-300 bg-opacity-50 rounded-lg p-4">
                    <h2 className="text-gray-900 text-lg font-bold title-font mb-5"><i class="fas fa-edit fa-sm"></i> Edit product</h2>
                    <form method="post" onSubmit={(event) => UpdateProduct(event)}>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="title" className="leading-7 text-sm text-gray-900">Change Product title</label>
                                <input type="text" id="title" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" placeholder="Product title" name="title" required value={title} onChange={(event) => setTitle(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="stock" className="leading-7 text-sm text-gray-900">Change Stock</label>
                                <input type="number" id="stock" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" placeholder="Product stock" name="stock" required value={stock} onChange={(event) => setStock(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="categoryid" className="leading-7 text-sm text-gray-900">Change Category</label>
                                <select className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" required onChange={(event) => setCategoryid(event.target.value)}>
                                    <option disabled selected className="text-gray-400">Select category</option>
                                    {
                                        category.map((item) => {
                                            let temp;
                                            if (item.id == categoryid)
                                                temp = <option value={item.id} selected>{item.title}</option>
                                            else
                                                temp = <option value={item.id}>{item.title}</option>
                                            return temp
                                        })
                                    }
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="leading-7 text-sm text-gray-900">Change Price</label>
                                <input type="number" id="price" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" placeholder="Product price" name="price" required value={price} onChange={(event) => setPrice(event.target.value)} />
                            </div>
                            <div className="inline">
                                <label htmlFor="photo" className="leading-7 text-sm text-gray-900">Change Photo</label>
                                <input type="file" id="photo" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" name="photo" accept="image/*" required onChange={(event) => setPhoto(event.target.files[0])} />
                                <div className="mt-2">
                                    <label htmlFor="photo" className="leading-7 text-sm text-gray-900">Old Photo</label>
                                    <img class="h-auto max-w-full rounded round-lg w-56" src={"http://www.theeasylearnacademy.com/shop/images/product/" + photo} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="detail" className="leading-7 text-sm text-gray-900">Change Detail</label>
                                <textarea className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" placeholder="Product description" id="detail" style={{ "height": "80px" }} name="detail" required value={detail} onChange={(event) => setDetail(event.target.value)} />
                                <div className="mb-4">
                                    <div className="pt-4">
                                        <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg w-full"><i class="fas fa-save fa-sm"></i> Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}
export default withCookies(AdminEditProducts);