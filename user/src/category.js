import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getBase} from "./Common";
export default function Category() 
{
  let navigate = useNavigate();
  var DisplayCategory = function(category){
      return (
      <div className="col mb-2">
        <article className="card h-100 border-0 shadow">
          <div className="card-img-top position-relative overflow-hidden">
            <a className="d-block" href={"/product/" + category.id} >
              <img src={"http://theeasylearnacademy.com/shop/images/category/" + category.photo} alt="Product image" />
            </a>
           
          </div>
          <div className="card-body">
            <h3 className="product-title mb-2 fs-base">
              <a
                className="d-block text-truncate"
                href={"/product/" + category.id} 
              >
                {category.title}
              </a>
            </h3>

          </div>
        </article>
      </div>);
  }
  var [data, setData] = useState([]);
  useEffect(() => {
    if (data.length === 0) {
      axios
        .get( getBase() + "category.php")
        .then((response) => 
        {
          if (response.status === 200) {
            let data = response.data;
            if (data[0]['error'] != "no")
              alert(data[0]['error']);
            else {
              if (data[1]['total'] == 0)
                alert("No data found");
              else {
                console.log(response.data);
                data.splice(0, 2);
                setData(response.data);
              }
            }
          }
        })
        .catch((error) => {
          // alert("we got error in response " + error.message);
          //console.log("code = ", response.code);
          // console.log(error);
          navigate('/error');
        });
    }
  })
  return (
    <>
      <div>
        <main className="page-wrapper pb-5">
          {/* Navbar for NFT Marketplace demo*/}
          {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
          <Menu />
          {/* Page Title*/}
          <div className="bg-accent pt-4 pb-5">
            <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
              <div className="d-lg-flex justify-content-between pb-3">

                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                  <h1 className="h3 text-light mb-0">Shop</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container pb-5 mb-2 mb-md-4">
            {/* Toolbar*/}

            {/* Products grid*/}
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3 pt-sm-3">
            {data.map((category) => {
                return DisplayCategory(category);
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
