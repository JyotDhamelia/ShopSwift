import React from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import { withCookies } from "react-cookie";
import { IsLogedIn2 } from "./ClassCookies";
import axios from "axios";
import BaseAddress from "./BaseAddress";

class AdminEditCategory extends IsLogedIn2 {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: null,
            photo: null,
            oldphoto: null,
            islive: null
        }
    }

    setStatus = (value) => {
        this.setState({
            islive: value
        });
    }

    updateTitle = (value) => {
        this.setState({
            title: value
        });
    }

    updatePhoto = (value) => {
        this.setState({
            photo: value
        });
    }

    UpdateCategory = (event) => {
        event.preventDefault();
        console.log(this.state.title, this.state.islive, this.state.photo);
        //call api
        let apiAddress = BaseAddress() + "update_category.php"
        let formData = new FormData();
        formData.append("id", this.state.id);
        formData.append("title", this.state.title);
        formData.append("islive", this.state.islive);
        formData.append("photo", this.state.photo);

        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: formData,
            config: { header: { 'content-type': 'enctype/form-data' } }
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != "no")
                    alert(data[0]['error']);
                else if (data[1]['success'] == "no") {
                    alert(data[2]['message']);
                }
                else {
                    alert(data[2]['message']);
                    window.location = "/admin-category";
                }
            }
        });
    }

    componentDidMount() {
        //fetch category data from server of specific category 
        var url = window.location.href;
        var last_slash_position = url.lastIndexOf("/") + 1;
        var id = url.substring(last_slash_position);
        let ApiAddress = BaseAddress() + "category.php?id=" + id;
        let context = this;
        axios({
            url: ApiAddress,
            method: 'get',
            responseType: 'json',
        }).then((response) => {
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != "no") {
                    alert(data[0]['error']);
                }
                else if (data[1]['total'] == 0) {
                    alert('no category found');
                }
                else {
                    context.setState({
                        id: data[2]['id'],
                        title: data[2]['title'],
                        oldphoto: data[2]['photo'],
                        islive: data[2]['islive']
                    });
                }
            }
        });
    }

    render() {
        return (<>
            <AdminMenu />
            <section className="text-gray-900 bg-indigo-200 mt-5 flex justify-center items-center capitalize mx-3">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <div className="lg:w-2/3 md:w-1/2 bg-indigo-300 bg-opacity-50 rounded-lg p-8 w-full">
                        <h2 className="text-gray-900 text-lg font-bold title-font mb-5">Edit category</h2>
                        <form onSubmit={(event) => this.UpdateCategory(event)}>
                            <div className="mb-4">
                                <label htmlFor="title" className="leading-7 text-sm text-gray-900">Change title</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    placeholder="Category title"
                                    name="title"
                                    required
                                    value={this.state.title}
                                    onChange={(event) => this.UpdateTitle(event.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="photo" className="leading-7 text-sm text-gray-900">Change Photo</label>
                                    <input
                                        type="file"
                                        id="photo"
                                        className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        name="photo"
                                        accept="image/*"
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
                                                value={1}
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
                                                value={0}
                                            />
                                            <span className="ml-2 text-gray-900">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="photo" className="leading-7 text-sm text-gray-900">Old Photo</label>
                                <img class="h-auto max-w-full rounded round-lg w-56" src={"http://www.theeasylearnacademy.com/shop/images/category/" + this.state.oldphoto} />
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg w-full">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>);
    }
}
export default withCookies(AdminEditCategory);