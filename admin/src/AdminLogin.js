import React, { useState } from "react";
import BaseAddress from "./BaseAddress";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import showError from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLogin() {

    let [email, setEmail] = useState();
    let [Password, setPassword] = useState();
    let [cookies, setCookies] = useCookies(['user']);

    let ConfirmLogin = function (event) {
        event.preventDefault();
        var ApiAddress = BaseAddress() + "admin_login.php";
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', Password);

        axios({
            method: 'post',
            url: ApiAddress,
            encType: 'json',
            data: formData
        }).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                let data = response.data;
                if (data[0]['error'] !== 'no') {
                    alert(data[0]['error']);
                }
                else if (data[1]['success'] === 'yes') {
                    setCookies('userid', data[3]['id'], { path: '/' });
                    window.location = '/admin-home';
                }
                else if (data[1]['success'] === 'no') {
                    alert(data[2]['message']);
                }
            }
        }).catch((error) => {
            showError("oops something went wrong, please contact developer....");
        });
    }

    return (<>
    <ToastContainer />
        <section className="bg-indigo-200 body-font min-h-screen flex justify-center items-center">
            <div className="container flex flex-col justify-center items-center mx-auto">
                <div className="lg:w-2/3 md:w-1/2 bg-indigo-300 bg-opacity-50 rounded-lg p-8 w-full">
                    <h2 className="text-gray-900 text-lg font-bold title-font mb-5 "><i class="fas fa-sign-in fa-sm"></i> Log In</h2>
                    <form method="post" encType="multipart/form/data" onSubmit={(event) => ConfirmLogin(event)}>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-900">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-indigo-200 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="Password" className="leading-7 text-sm text-gray-900">Password</label>
                            <input type="password" id="Password" name="Password" className="w-full bg-indigo-200 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={Password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"><i class="fas fa-sign-in fa-xs"></i> Get Started</button>
                    </form>
                    <p className="text-s mt-3 text-gray-800">Can't Log In? <Link to="/admin-forgot-password" className="text-blue-500 hover:text-blue-700">Recover Account</Link></p>
                </div>
            </div>
        </section>
    </>);
}
export default AdminLogin;