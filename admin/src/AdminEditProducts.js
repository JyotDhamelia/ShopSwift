import React from "react";
import Footer from "./Footer";
import AdminMenu from "./AdminMenu";
import { withCookies } from "react-cookie";
import { IsLogedIn2 } from "./ClassCookies";
import axios from "axios";
import BaseAddress from "./BaseAddress";

class AdminEditProducts extends IsLogedIn2 {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: null,
            stock: null,
            categorytitle: null,
            price: null,
            oldphoto: null,
            photo: null,
            detail: null,
            Categories: []
        }
    }

    UpdateCategory = (value) => {
        this.setState({
            categorytitle: value
        })
    }

    UpdateStock = (value) => {
        this.setState({
            stock: value
        })
    }

    UpdateTitle = (value) => {
        this.setState({
            title: value
        })
    }

    UpdatePhoto = (value) => {
        this.setState({
            photo: value
        })
    }

    UpdatePrice = (value) => {
        this.setState({
            price: value
        })
    }

    UpdateDetail = (value) => {
        this.setState({
            detail: value
        })
    }

    componentDidMount() {
        let Apiaddress = BaseAddress() + "product.php?id=" + id;
        var url = window.location.href;
        var last_slash = url.lastIndexOf("/") + 1;
        var id = url.substring(last_slash);

        axios({
            url: Apiaddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != "no") {
                    alert(data[0]['error']);
                }
                else if (data[1]['total'] == 0) {
                    alert("No Data Found");
                }
                else {
                    this.setState({
                        title: data[2]['title'],
                        oldphoto: data[2]['photo'],
                        detail: data[2]['detail'],
                        stock: data[2]['stock'],
                        price: data[2]['price'],
                        categorytitle: data[2]['categorytitle']
                    });
                }
            }
        });

        let ApiAddress = BaseAddress() + "category.php";
        axios({
            url: ApiAddress,
            method: 'get',
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
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
                        Categories: data
                    })
                }
            }
        });
    }

    UpdateProduct = (event) =>
    {
        event.preventDefault();
        let ApiAddress = BaseAddress() + "update_product.php";
        let formData = new FormData();

        axios({
            method: 'post',
            url: ApiAddress,
            responseType: 'json',
            data: formData
        }).then((response) => {
            console.log(response.data);
            if(response.data == 200)
            {
                let data = response.data;
                if(data[0]['error'] != 'no')
                {
                    alert(data[0]['error']);
                }
                else if(data[1]['success'] == 'no')
                {
                    alert(data[2]['message']);
                }
                else
                {
                    alert(data[2]['message']);
                    window.location = '/admin-products';
                }
            }
        });
    }

    render() {
        return (<>
            <AdminMenu />
            <div className="bg-gray-900 capitalize">
                <div className="container mx-auto p-4 flex justify-center items-center">
                    <div className="lg:w-2/3 md:w-3/4 sm:w-full bg-gray-800 bg-opacity-50 rounded-lg p-4">
                        <h2 className="text-white text-lg font-medium title-font mb-4">Edit product</h2>
                        <form method="post" onSubmit={(event) => this.UpdateProduct(event)}>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label htmlFor="title" className="leading-7 text-sm text-gray-400">Change Product title</label>
                                    <input type="text" id="title" className="w-full sm:w-full md:w-full lg:w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Product title" name="title" required value={this.state.title} onChange={(event) => this.UpdateTitle(event.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="stock" className="leading-7 text-sm text-gray-400">Change Stock</label>
                                    <input type="number" id="stock" className="w-full sm:w-full md:w-full lg:w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Product stock" name="stock" required value={this.state.stock} onChange={(event) => this.UpdateStock(event.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="categoryid" className="leading-7 text-sm text-gray-400">Change Category</label>
                                    <select className="w-full sm:w-full md:w-full lg:w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out form-select form-select-lg" required
                                        onChange={(event) => this.UpdateCategory(event.target.value)}>
                                        <option disabled selected className="text-gray-400">Select category</option>
                                        {
                                            this.state.Categories.map((item) => {
                                                return (<option value={item.id}>{item.title}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="price" className="leading-7 text-sm text-gray-400">Change Price</label>
                                    <input type="number" id="price" className="w-full sm:w-full md:w-full lg:w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Product price" name="price" required value={this.state.price} onChange={(event) => this.UpdatePrice(event.target.value)} />
                                </div>
                                <div className="inline">
                                    <label htmlFor="photo" className="leading-7 text-sm text-gray-400">Change Photo</label>
                                    <input type="file" id="photo" className="w-full sm:w-full md:w-full lg:w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-3 px-5 leading-8 transition-colors duration-200 ease-in-out" name="photo" accept="image/*" required onChange={(event) => this.UpdatePhoto(event.target.files[0])} />
                                    <div className="mt-2">
                                        <label htmlFor="photo" className="leading-7 text-sm text-gray-400">Old Photo</label>
                                        <img class="h-auto max-w-full rounded round-lg w-56" src={"http://www.theeasylearnacademy.com/shop/images/product/" + this.state.oldphoto} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="detail" className="leading-7 text-sm text-gray-400">Change Detail</label>
                                    <textarea className="w-full sm:w-full md:w-full lg:w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Product description" id="detail" style={{ "height": "80px" }} name="detail" required value={this.state.detail} onChange={(event) => this.UpdateDetail(event.target.value)} />
                                    <div className="mb-4">
                                        <div className="pt-4">
                                            <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg w-full">Save Changes</button>
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
}
export default withCookies(AdminEditProducts);