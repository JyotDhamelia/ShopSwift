import { React, useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";
import axios from "axios";
import BaseAddress from "./BaseAddress";
import { Link } from "react-router-dom";
import IsLogedIn from "./FunctionalCookies";
import showError, { showMessage } from "./toast-message";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withCookies } from "react-cookie";


function AdminProducts() {
  IsLogedIn();

  let [product, setProduct] = useState([]);

  let DisplayProduct = function (item) {
    return (
      <>
        <tr class="bg-indigo-100 border-b dark:bg-indigo-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-600">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white"
          >
            {item.id}
          </th>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
            {item.categorytitle}
          </td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
            {item.title}
          </td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
            <img alt=""
              src={
                "http://www.theeasylearnacademy.com/shop/images/product/" +
                item.photo
              }
            />
          </td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
          ₹{item.price}
          </td>
          <td class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
            {item.stock} Pcs.
          </td>
          <td class="px-6 py-4">
            <Link
              to={"/admin-edit-products/" + item.id}
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </Link>
          </td>
          <td class="px-6 py-4">
            <a
              href=""
              onClick={(e) => DeleteProduct(e, item.id)}
              class="font-medium text-red-600 dark:text-red-500 hover:underline"
            >
              Delete
            </a>
          </td>
        </tr>
      </>
    );
  };

  let DeleteProduct = function (e, id) {
    e.preventDefault();
    let apiAddress = BaseAddress() + "delete_product.php?id=" + id;
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
        setProduct(
          product.filter((item) => {
            if (item.id !== id) return item;
          })
        );
      }
    }).catch((error) => {
      showError('oops something went wrong, please contact developer....');
    });
  };

  let FetchProducts = function () {
    let Apiaddress = BaseAddress() + "product.php";
    if (product.length === 0) {
      axios({
        method: "get",
        url: Apiaddress,
        responseType: "json",
      }).then((response) => {
        console.log(response);
        let data = response.data;
        let error = data[0]['error'];
          if (error !== 'no') {
            showError(error);
          }
          else {
            let total = data[1]['total'];
            if (total === 0) {
              showError('no products available');
            }
            else {
              data.splice(0, 2);
              setProduct(data);
            }
          }
        })
        .catch((error) => {
          showError('oops something went wrong, please contact developer....');
        });
    }
  };

  useEffect(() => {
    FetchProducts();
  });

  return (
    <>
      <AdminMenu />
      <ToastContainer />
      <div className="mx-4 md:mx-16 mt-7">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-gray-700"><i class="fa-solid fa-boxes-packing fa-sm"></i> Manage Products</h1>
          <Link to="/admin-insert-products">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <i class="fa-solid fa-circle-plus fa-xs"></i> Add Product
            </button>
          </Link>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center capitalize">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fa-solid fa-id-card fa-sm"></i> Product Id
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fa-solid fa-clipboard fa-sm"></i> Category
                </th>
                <th scope="col" class="px-6 py-3" width="5%">
                <i class="fas fa-list-alt fa-sm"></i> Name
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fa-solid fa-image fa-sm"></i> Photo
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fa fa-money fa-sm"></i> Price
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fas fa-warehouse fa-sm"></i> Stock
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fas fa-edit fa-sm"></i> Update
                </th>
                <th scope="col" class="px-6 py-3" width="10%">
                <i class="fa-solid fa-trash fa-sm"></i> Remove
                </th>
              </tr>
            </thead>
            <tbody>{product.map((item) => DisplayProduct(item))}</tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default withCookies(AdminProducts);
