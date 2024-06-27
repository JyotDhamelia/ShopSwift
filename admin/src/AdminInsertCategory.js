import React, { useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import IsLogedIn from "./FunctionalCookies";
import BaseAddress from "./BaseAddress";
import axios from "axios";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminInsertCategory() {

    IsLogedIn();

    let [title, setTitle] = useState();
    let [photo, setPhoto] = useState();
    let [isLive, setisLive] = useState(1);

    let InsertCategory = function (event) {
        event.preventDefault();
        let ApiAddress = BaseAddress() + "insert_category.php";
        let formData = new FormData();
        formData.append('title', title);
        formData.append('photo', photo);
        formData.append('islive', isLive);

        axios({
            method: 'post',
            url: ApiAddress,
            responseType: 'json',
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    showError("Could not insert Category");
                }
                else if (data[1]['success'] == 'yes') {
                    let message = data[2]['message'];
                    showMessage(message);
                    window.location = 'admin-category';
                }
            }
        });
    }

    return (<>
        <AdminMenu />
        <ToastContainer />
        <section className="text-gray-400 bg-indigo-200 mt-5 flex justify-center items-center capitalize mx-3">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="lg:w-2/3 md:w-1/2 bg-indigo-300 bg-opacity-50 rounded-lg p-8 w-full">
                    <h2 className="text-gray-900 text-lg font-bold title-font mb-5"><i class="fa-solid fa-circle-plus fa-sm"></i> Add new category</h2>
                    <form method='post' onSubmit={(event) => InsertCategory(event)} encType="multipart/form-data">
                        <div className="mb-4">
                            <label htmlFor="title" className="leading-7 text-sm text-gray-900">Category title</label>
                            <input
                                type="text"
                                id="title"
                                className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900"
                                placeholder="Category title"
                                name="title"
                                required
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="photo" className="leading-7 text-sm text-gray-900">Select Photo</label>
                                <input
                                    type="file"
                                    id="photo"
                                    className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    name="photo"
                                    accept="image/*"
                                    required
                                    onChange={(event) => setPhoto(event.target.files[0])}
                                />
                            </div>
                            <div>
                                <p className="text-gray-900">Is this category Live?</p>
                                <div className="mt-2">
                                    <label htmlFor="yes" className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-gray-900"
                                            name="status"
                                            id="yes"
                                            defaultChecked
                                            required
                                            value='1'
                                            onChange={(event) => setisLive(event.target.value)}
                                        />
                                        <span className="ml-2 text-gray-900">Yes</span>
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="no" className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-gray-900"
                                            name="status"
                                            id="no"
                                            required
                                            value='0'
                                            onChange={(event) => setisLive(event.target.value)}
                                        />
                                        <span className="ml-2 text-gray-900">No</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg w-full">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <Footer />
    </>);
}
