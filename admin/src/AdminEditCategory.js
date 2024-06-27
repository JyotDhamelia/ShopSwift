import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import { withCookies } from "react-cookie";
import axios from "axios";
import BaseAddress from "./BaseAddress";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IsLogedIn from "./FunctionalCookies";


function AdminEditCategory() {
   
    IsLogedIn();

    let [id, setId] = useState('');
    let [title, setTitle] = useState('');
    let [oldPhoto, setOldPhoto] = useState('');
    let [photo, setPhoto] = useState('');
    let [islive, setIsLive] = useState('');
    let [isFetched, setIsFetched] = useState(false);

    let UpdateCategory = function (event) {
        event.preventDefault();
        let apiAddress = BaseAddress() + "update_category.php";
        let formData = new FormData();
        formData.append("id", id);
        formData.append("title", title);
        formData.append("islive", islive);
        formData.append("photo", photo);
        console.log(formData);
        axios({
            method: "post",
            responseType: "json",
            url: apiAddress,
            data: formData,
            config: { header: { "content-type": "enctype/form-data" } },
        }).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                let data = response.data;
                let error = data[0]["error"];
                if (error !== "no")
                    alert(error);
                else {
                    let success = data[1]["success"];
                    if (success === 'no') {
                        let message = data[2]["message"];
                        alert(message);
                    }
                    else {
                        let message = data[2]["message"];
                        alert(message);
                        window.location = "/admin-category";
                    }
                } 
            }
        }).catch((error) => {
            showError("oops something went wrong, please contact developer....");
        });
    };

    let FetchCategory = function()
    {
        if (isFetched === false) {
            var url = window.location.href;
            var last_slash_position = url.lastIndexOf("/") + 1;
            var id = url.substring(last_slash_position);
            setId(id);
            let ApiAddress = BaseAddress() + "category.php?id=" + id;
            axios({
                url: ApiAddress,
                method: "get",
                responseType: "json",
            }).then((response) => {
                if (response.status === 200) {
                    let data = response.data;
                    let error = data[0]["error"];
                    if (error !== "no") {
                        showError(error);
                    } else {
                        let total = data[1]["total"];
                        if (total === 0) {
                            showError("no category found");
                        } else {
                            setTitle(response.data[2]['title']);
                            setOldPhoto(response.data[2]['photo']);
                            setIsLive(response.data[2]['islive']);
                            setIsFetched(true);
                        }
                    }
                }
            }).catch((error) => {
                showError("oops something went wrong, please contact developer....");
            });
        }
    }

    useEffect(() => {
     FetchCategory();
    });

    return (
        <>
            <AdminMenu />
            <ToastContainer />
            <section className="text-gray-900 bg-indigo-200 mt-5 flex justify-center items-center capitalize mx-3">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <div className="lg:w-2/3 md:w-1/2 bg-indigo-300 bg-opacity-50 rounded-lg p-8 w-full">
                        <h2 className="text-gray-900 text-lg font-bold title-font mb-5">
                        <i class="fas fa-edit fa-sm"></i> Edit category
                        </h2>
                        <form onSubmit={UpdateCategory}>
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="leading-7 text-sm text-gray-900"
                                >
                                    Change title
                                </label>
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
                                    <label
                                        htmlFor="photo"
                                        className="leading-7 text-sm text-gray-900"
                                    >
                                        Change Photo
                                    </label>
                                    <input
                                        type="file"
                                        id="photo"
                                        className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-900"
                                        name="photo"
                                        accept="image/*"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                    />
                                </div>
                                <div>
                                    <p>Is this category Live?</p>
                                    <div className="mt-2">
                                        <label htmlFor="yes" className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio text-blue-500"
                                                name="status"
                                                id="yes"
                                                required
                                                value='1' checked={islive === '1'}
                                                onChange={(e) => setIsLive('1')}

                                            />
                                            <span className="ml-2 text-gray-900">Yes</span>
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="no" className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio text-blue-500"
                                                name="status"
                                                id="no"
                                                required
                                                value='0'
                                                onChange={(e) => setIsLive('0')} checked={islive === '0'}
                                            />
                                            <span className="ml-2 text-gray-900">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <label
                                    htmlFor="photo"
                                    className="leading-7 text-sm text-gray-900"
                                >
                                    Old Photo
                                </label>
                                <img
                                    class="h-auto max-w-full rounded round-lg w-56"
                                    src={
                                        "http://www.theeasylearnacademy.com/shop/images/category/" +
                                        oldPhoto
                                    }
                                />
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg w-full"
                                >
                                   <i class="fas fa-save fa-sm"></i> Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default withCookies(AdminEditCategory);
