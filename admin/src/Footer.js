import React from "react";

export default function Footer() {
    return (<>
        <footer className="text-gray-600 body-font mt-5 flex justify-center mb-5">               
            <div className="bg-indigo-200">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Online-Shop -
                        <a rel="noopener noreferrer" className="text-gray-600 ml-1">All Rights Reserved</a>
                    </p>
                </div>
            </div>
        </footer>
    </>);
}
