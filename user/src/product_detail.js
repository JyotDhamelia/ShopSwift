import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBase, getBaseImage } from "./Common";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function ProductDetail() {
  var [product, setProduct] = useState('');
  let navigate = useNavigate();

  useEffect(function () {
    if (product === '') {
      let productid = window.location.href.split("/").pop();
      let apiAddress = getBase() + "product.php?productid=" + productid;
     
      axios({
        method: "get",
        responseType: "json",
        url: apiAddress
      }).then(function (response) {
        if (response.status === 200) {
          let data = response.data;
          if (data[0]['error'] !== 'no') {
            alert(data[0]['error']);
          } else if (data[1]['total'] === 0) {
            alert("No product found");
          } else {
            data.splice(0, 2);
            setProduct(data[0]);
          }
        }
      }).catch(function (error) {
        navigate('/error');
      });
    }
  }, [product, navigate]);

  const fallbackImage = "https://via.placeholder.com/200"; 

  return (
    <>
      <div>
        <Menu />
        <main className="page-wrapper pb-5 mt-5">
          <div className="mt-5">
            <div className="container pt-1">
              <div className="d-lg-flex justify-content-between pb-1">
                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                  <h1 className="h4 text-dark mb-0">Product Details</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-5 mt-5">
            <div className="row shadow-sm rounded-3 bg-light">
              <section className="col-lg-6 py-4">
                <div className="d-flex justify-content-center">
                  <img
                    src={getBaseImage() + "product/" + product.photo}
                    className="img-fluid rounded-2"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                    onError={(e) => e.target.src = fallbackImage}
                  />
                </div>
              </section>
              <section className="col-lg-6 pt-4 pt-lg-0 px-4 px-lg-5">
                <div className="mb-4 mt-4">
                  <h4 className="text-dark">Product: {product.title}</h4>
                </div>
                <div className="mb-4">
                  <h5 className="text-dark">Price: {product.price}</h5>
                  <p>Details: {product.detail}</p>
                </div>
                <div className="d-flex gap-3">
                  <button className="btn btn-primary btn-lg w-48" type="button">
                    <FaHeart className="fs-lg me-2" /> Add to Favorites
                  </button>
                  <button className="btn btn-warning btn-lg w-48" type="button">
                    <FaShoppingCart className="fs-lg me-2" /> Add to Cart
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
