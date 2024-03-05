import { React, useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import BaseAddress from "./BaseAddress";
import axios from "axios";
import IsLogedIn from "./FunctionalCookies";

export default function AdminInsertProducts() {

    IsLogedIn();

    let [title, setTitle] = useState();
    let [categoryid, setCategoryid] = useState();
    let [stock, setStock] = useState();
    let [price, setPrice] = useState();
    let [detail, setDetail] = useState();
    let [photo, setPhoto] = useState();
    let [category, setCategory] = useState([]);

    useEffect(() => {
        if (category.length == 0) {
            let ApiAddress = BaseAddress() + "category.php";
            axios({
                method: 'get',
                url: ApiAddress,
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
                        setCategory(data);
                    }
                }
            });
        }
    });

    let InsertProducts = function (e) {
        e.preventDefault();
        var ApiAddress = BaseAddress() + "insert_product.php";
        var formData = new FormData();
        formData.append("categoryid", categoryid);
        formData.append("name", title);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("photo", photo);
        formData.append("detail", detail);
        axios({
            method: 'post',
            url: ApiAddress,
            responseType: 'json',
            data: formData,
            config: { header: { 'content-type': 'enctype/form-data' } }
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no')
                    alert(data[0]['error']);
                else if (data[1]['success'] == 'yes') {
                    alert(data[2]['message']);
                    window.location = '/admin-products';
                }
            }
        });
    }
    return (<>
        <AdminMenu />
        <div className="bg-indigo-200 capitalize">
            <div className="container mx-auto p-5 flex justify-center items-center">
                <div className="lg:w-2/3 md:w-3/4 sm:w-full bg-indigo-300 bg-opacity-50 rounded-lg p-4">
                    <h2 className="text-gray-900 text-lg font-bold title-font mb-4">Add new product</h2>
                    <form method="post" encType="multipart/form-data" onSubmit={(event) => InsertProducts(event)}>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="title" className="leading-7 text-sm text-gray-900">Product title</label>
                                <input type="text" id="title" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" placeholder="Product title" name="title" required value={title} onChange={(event) => setTitle(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="stock" className="leading-7 text-sm text-gray-900">Stock</label>
                                <input type="number" id="stock" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" placeholder="Product stock" name="stock" required value={stock} onChange={(event) => setStock(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="photo" className="leading-7 text-sm text-gray-900">Select Photo</label>
                                <input type="file" id="photo" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" name="photo" accept="image/*" required onChange={(event) => setPhoto(event.target.files[0])} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="leading-7 text-sm text-gray-900">Price</label>
                                <input type="number" id="price" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" placeholder="Product price" name="price" required value={price} onChange={(event) => setPrice(event.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="categoryid" className="leading-7 text-sm text-gray-900">Select Category</label>
                                <select className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" required onChange={(event) => setCategoryid(event.target.value)} >
                                    <option disabled selected className="text-gray-400">Select Category</option>
                                    {
                                        category.map((item) => {
                                            return (<option value={item.id}>{item.title}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="detail" className="leading-7 text-sm text-gray-900">Detail</label>
                                <textarea className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900" placeholder="Product description" id="detail" style={{ "height": "80px" }} name="detail" required onChange={(event) => setDetail(event.target.value)} />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="mb-4">
                                <div className="pt-2">
                                    <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg w-full">Save</button>
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
