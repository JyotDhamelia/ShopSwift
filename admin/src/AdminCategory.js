import { React, useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import axios from "axios";
import BaseAddress from "./BaseAddress";
import { Link } from "react-router-dom";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IsLogedIn from "./FunctionalCookies";
import { withCookies } from "react-cookie";


function AdminCategory() {
  IsLogedIn();

  let [category, setCategory] = useState([]);

  let DisplayCategory = function (item) {
    return (
      <>
        <tr class="bg-indigo-100 border-b dark:bg-indigo-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-600">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.id}
          </th>
          <td class="px-6 py-4">{item.title}</td>
          <td class="px-6 py-4">
            <img
              src={
                "http://www.theeasylearnacademy.com/shop/images/category/" +
                item.photo
              }
            />
          </td>
          <td className="px-6 py-4">{item.islive == 1 ? 'Yes' : 'No'}</td>
          <td class="px-6 py-4">
            <a
              href={"/admin-edit-category/" + item.id}
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
          <td class="px-6 py-4">
            <a href="" onClick={(e) => DeleteCategory(e, item.id)} class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
          </td>
        </tr>
      </>
    );
  };

  let FetchCategory = function () {
    let Apiaddress = BaseAddress() + "category.php";
    if (category.length == 0) {
      axios({
        method: "get",
        url: Apiaddress,
        responseType: "json",
      })
        .then((response) => {
          console.log(response);
          let data = response.data;
          let error = data[0]["error"];
          if (error !== "no") {
            showError(error);
          } else {
            let total = data[1]["total"];
            if (total === 0) {
              showError("no category available");
            } else {
              data.splice(0, 2);
              setCategory(data);
            }
          }
        })
        .catch((error) => {
          showError("oops something went wrong, please contact developer....");
        });
    }
  };

  useEffect(() => {
    FetchCategory();
  });

  let  DeleteCategory = function(e,id){
    e.preventDefault();
    let apiAddress = BaseAddress() + "delete_category.php?id=" + id;
    console.log(apiAddress);
    axios({
      method: "get",
      responseType: "json",
      url: apiAddress,
    }).then((response) => {
      console.log(response);
      let error = response.data[0]["error"];
      if (error !== "no") 
        showError(error);
      else {
        showMessage(response.data[1]["message"]);
        setCategory(
          category.filter((item) => {
            if (item.id !== id) return item;
          })
        );
      }
    });
  }

  return (
    <>
      <AdminMenu />
      <ToastContainer />
      <div className="mx-4 md:mx-16 mt-7">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-gray-700"><i class="fa-solid fa-boxes-packing fa-sm"></i> Manage Categories</h1>
          <Link to="/admin-insert-category">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <i class="fa-solid fa-circle-plus fa-xs"></i> Add Category
            </button>
          </Link>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center capitalize">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fa-solid fa-id-card fa-sm"></i> Category Id
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fas fa-list-alt fa-sm"></i> Name
                </th>
                <th scope="col" class="px-6 py-3" width="5%">
                <i class="fa-solid fa-image fa-sm"></i> Photo
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fa-solid fa-list-check fa-sm"></i> Available
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fas fa-edit fa-sm"></i> Update
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fa-solid fa-trash fa-sm"></i> Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {category.map((item) => DisplayCategory(item))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default withCookies(AdminCategory);
