import React from "react";
import AdminMenu from './AdminMenu';
import Footer from './Footer';

function ChangePassword() {
    return (<>
        <AdminMenu />
        <section className="bg-indigo-200 body-font mt-7 flex justify-center items-center">
            <div className="container flex flex-col justify-center items-center mx-auto">
                <div className="lg:w-2/3 md:w-1/2 bg-indigo-300 bg-opacity-50 rounded-lg p-8 w-full">
                    <h2 className="text-gray-900 text-lg font-bold title-font mb-5 ">Change Password</h2>
                    <form method="post" encType="multipart/form/data">
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-900">Current Password</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-900">New Password</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="Password" className="leading-7 text-sm text-gray-900">Confirm Password</label>
                            <input type="password" id="Password" name="Password" className="w-full bg-gray-600 bg-opacity-20  focus:ring-2 focus:ring-blue-400 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Change Password</button>
                    </form>
                </div>
            </div>
        </section>
        <Footer />
    </>)
}
export default ChangePassword;