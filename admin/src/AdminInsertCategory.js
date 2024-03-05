import React, { useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import IsLogedIn from "./FunctionalCookies";
import BaseAddress from "./BaseAddress";
import axios from "axios";

export default function AdminInsertCategory() {

    IsLogedIn();

    let [title, setTitle] = useState();
    let [photo, setPhoto] = useState();
    let [isLive, setisLive] = useState(1);

    let InsertCategory = function(event)
    {
        event.preventDefault();
        let ApiAddress = BaseAddress() + "insert_category.php";
        let formData = new FormData();
        formData.append('title',title);
        formData.append('photo',photo);
        formData.append('islive',isLive);

        axios({
            method: 'post',
            url: ApiAddress,
            responseType: 'json',
            data: formData,
            headers:{
                'content-type' : 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response.data);
            if(response.status == 200)
            {
                let data = response.data;
                if(data[0]['error'] != 'no')
                {
                    alert(data[0]['error']);
                }
                else if(data[1]['success'] == 'yes')
                {
                    alert(data[2]['message']);
                    window.location = 'admin-category';
                }
            }
        });
    }

    return (<>
        <AdminMenu />
        <section className="text-gray-400 bg-gray-900 mt-5 flex justify-center items-center capitalize mx-3">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 w-full">
                    <h2 className="text-white text-lg font-medium title-font mb-5">Add new category</h2>
                    <form method='post' onSubmit={(event) => InsertCategory(event)} encType="multipart/form-data">
                        <div className="mb-4">
                            <label htmlFor="title" className="leading-7 text-sm text-gray-400">Category title</label>
                            <input
                                type="text"
                                id="title"
                                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Category title"
                                name="title"
                                required
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="photo" className="leading-7 text-sm text-gray-400">Select Photo</label>
                                <input
                                    type="file"
                                    id="photo"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    name="photo"
                                    accept="image/*"
                                    required
                                    onChange={(event) => setPhoto(event.target.files[0])}
                                />
                            </div>
                            <div>
                                <p><b>Is this category Live?</b></p>
                                <div className="mt-2">
                                    <label htmlFor="yes" className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio text-blue-500"
                                            name="status"
                                            id="yes"
                                            defaultChecked
                                            required
                                            value='1'
                                            onChange={(event) => setisLive(event.target.value)}
                                        />
                                        <span className="ml-2 text-gray-100">Yes</span>
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
                                            onChange={(event) => setisLive(event.target.value)}
                                        />
                                        <span className="ml-2 text-gray-100">No</span>
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
