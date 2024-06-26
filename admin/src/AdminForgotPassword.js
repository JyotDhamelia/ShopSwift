import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState } from "react";
import BaseAddress from "./BaseAddress";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ForgotPassword() {

    let [currentPassword, setCurrentPassword] = useState();
    let [newPassword, setNewPassword] = useState();
    let [confirmPassword, setConfirmPassword] = useState();
    let [cookies, setCookies] = useCookies('user');

    let ChangePassword = function (event) {
        console.log(currentPassword);
        console.log(newPassword);
        console.log(confirmPassword);
        console.log(cookies['userid']);
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            showError("New Password & Confirm Password did not matched.");
            return;
        }

        let apiAddress = BaseAddress() + "change_password.php";
        let formData = new FormData();

        formData.append("id", cookies["userid"]);
        formData.append("password", currentPassword);
        formData.append("newpassword", newPassword);

        axios({
            url: apiAddress,
            method: 'post',
            responseType: 'json',
            data: formData
        }).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                let data = response.data;
                if (data[0]['error'] != 'no') {
                    showError("Error Occured while changing password");
                }
                else if (data[1]['success'] == 'yes') {
                    let message = data[2]['message'];
                    showMessage(message);
                    window.location = '/admin-home';
                }
            }
            window.location = '/admin-home';
        });
    };

    return (<>
    <ToastContainer />
        <section className="bg-indigo-200 body-font mt-7 flex justify-center items-center">
            <div className="container flex flex-col justify-center items-center mx-auto">
                <div className="lg:w-2/3 md:w-1/2 bg-indigo-300 bg-opacity-50 rounded-lg p-8 w-full">
                    <h2 className="text-gray-900 text-lg font-bold title-font mb-5 ">Change Password</h2>
                    <form method="post" encType="multipart/form/data" onSubmit={(event) => ChangePassword(event)}>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-900">Current Password</label>
                            <input type="password" id="currentpassword" name="currentpassword" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={currentPassword}
                                onChange={(event) => setCurrentPassword(event.target.value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-900">New Password</label>
                            <input type="password" id="newpassword" name="newpassword" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="Password" className="leading-7 text-sm text-gray-900">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                        </div>
                        <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Save New Password</button>
                    </form>
                </div>
            </div>
        </section>
    </>)
}
export default ForgotPassword;