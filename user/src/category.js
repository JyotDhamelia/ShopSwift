import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBase } from "./Common";

export default function Category() {
  let navigate = useNavigate();

  var DisplayCategory = function (category) {
    return (
      <div className="col">
        <div className="card h-100 border-0 shadow-sm text-center">
          <div className="card-img-top position-relative overflow-hidden d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
            <a className="d-block mt-3" href={"/product/" + category.id}>
              <img
                src={
                  "http://theeasylearnacademy.com/shop/images/category/" +
                  category.photo
                }
                alt={category.title}
                style={{
                  maxHeight: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </a>
          </div>
          <div className="card-body">
            <h5 className="product-title mb-2">
              <a
                href={"/product/" + category.id}
                className="text-decoration-none text-dark"
              >
                {category.title}
              </a>
            </h5>
          </div>
        </div>
      </div>
    );
  };

  var [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      axios
        .get(getBase() + "category.php")
        .then((response) => {
          if (response.status === 200) {
            let data = response.data;
            if (data[0]["error"] !== "no") alert(data[0]["error"]);
            else {
              if (data[1]["total"] === 0) alert("No data found");
              else {
                console.log(response.data);
                data.splice(0, 2);
                setData(response.data);
              }
            }
          }
        })
        .catch((error) => {
          navigate("/error");
        });
    }
  });

  return (
    <>
      <div>
        <Menu />
        <main className="page-wrapper pb-5">
          <div className="mt-5">
            <div className="container pt-1">
              <div className="d-lg-flex justify-content-between pb-1">
                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                  <h1 className="h4 text-dark mb-0">Categories</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-md-2 mt-5">
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-4">
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
