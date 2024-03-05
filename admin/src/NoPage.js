import React from "react";
import { Link } from "react-router-dom";

function NoPage()
{
    return(<>
    <section className="text-gray-400 bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 w-full text-center">
          <h2 className="text-white text-2xl font-medium title-font mb-4">404 - Page Not Found</h2>
          <p className="text-gray-100 mb-8">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            <i className="fas fa-arrow-left mr-2"></i> Go Back to Home
          </Link>
        </div>
      </div>
    </section></>);
}
export default NoPage;