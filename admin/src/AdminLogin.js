import React, { useState } from "react";
import BaseAddress from "./BaseAddress";
import { useCookies } from "react-cookie";
import axios from "axios";

function AdminLogin() {

    let [email, setEmail] = useState();
    let [Password, setPassword] = useState();
    let [cookies, setCookies] = useCookies(['user']);

    let ConfirmLogin = function (event) {
        event.preventDefault();
        var ApiAddress = BaseAddress() + "login.php";
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
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    alert(data[0]['error']);
                }
                else if (data[1]['success'] == 'yes') {
                    alert(data[2]['message']);
                    setCookies('userid',data[3]['id'],{path: '/'});
                    window.location = '/admin-home';
                }
                else if (data[1]['success'] == 'no') {
                    alert(data[2]['message']);
                }
            }
        });
    }

    return (<>
        <section className="text-gray-400 bg-gray-900 body-font min-h-screen flex justify-center items-center">
            <div className="container flex flex-col justify-center items-center mx-auto">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 w-full">
                    <h2 className="text-white text-lg font-medium title-font mb-5">Log In</h2>
                    <form method="post" encType="multipart/form/data" onSubmit={(event) => ConfirmLogin(event)}>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="Password" className="leading-7 text-sm text-gray-400">Password</label>
                            <input type="password" id="Password" name="Password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={Password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Log In</button>
                    </form>
                    <p className="text-s mt-3">Can't Log In? <a href="" className="text-blue-500">Recover Account</a></p>
                </div>
            </div>
        </section>
    </>);
}
export default AdminLogin;