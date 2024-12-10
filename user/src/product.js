import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import {getBase,getBaseImage} from "./Common";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export default function Product() {
  let [cookies, setCookie] = useCookies(["user"]);
  var [products, setProduct] = useState([]);
  var [message,setMessage] = useState('' ); 
  let navigate = useNavigate();
  let AddToCartOrWishList = function(productid,apiAddress)
  {
    let userid = cookies['userid'];
    apiAddress = getBase() + `${apiAddress}?productid=${productid}&usersid=${userid}`;
    axios({
        method: 'get',
        url: apiAddress,
        responseType:  'json'
      }).then((response) => {
          console.log(response);
          let data = response.data;
          if(data[0]['error'] !='no')
            alert(data[0]['error']);
          else 
          {
            alert(data[1]['message']);
          }
      });
  }
  let DisplayProduct = function (product) {
    return (<div className="col mb-2">
      <article className="card h-100 border-0 shadow">
        <div className="card-img-top position-relative overflow-hidden">
          <a className="d-block" href={"/product-detail/" + product.id}>
            <img src={getBaseImage() + "product/" + product.photo} alt="Product image" />
          </a>
          <button
            className="btn-wishlist btn-sm position-absolute top-0 end-0"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Add to Favorites">
             <i className="ci-heart"></i>
          </button>
        </div>
        <div className="card-body">
          <h3 className="product-title mb-2 fs-base">
            <a
              className="d-block text-truncate"
              href="nft-single-auction-live.html"
            >
              {product.title}
            </a>
          </h3>
          <div className="d-flex align-items-center flex-wrap">
            <span className="mt-1 ms-1 fs-xs text-muted">
              Rs {product.price}
            </span>
          </div>
        </div>
        <div className="card-footer mt-n1 py-2 border-0">
          <button type="button" className="btn btn-primary d-block w-100 mt-2"
          onClick={() => AddToCartOrWishList(product.id,'add_to_cart.php')}>Add to cart</button>

          <button type="button" className="btn btn-warning d-block w-100 mt-2"
          onClick={() => AddToCartOrWishList(product.id,'add_to_wishlist.php')}>Add to wishlist</button>
        </div>
      </article>
    </div>
    )
  }
  useEffect(function () {
    if (products.length === 0) {
      var categoryid = window.location.href.split("/").pop();
      axios({
        method: "get",
        url: getBase() + "product.php?categoryid=" + categoryid
      })
        .then(function (response) {
          if (response.status !== 200) {
            alert("Something went wrong, please try again later.");
          }
          else {
            var data = response.data;
            if(data[0]['error'] != 'no')
            {
              alert(data[0]['error']);
              return;
            }
            else if(data[1]['total'] == 0)
            {
              setMessage("No product found");
              return;
            }
            else 
            {
                console.log(data);
                data.splice(0, 2); //delete first two elements
                setProduct(data);
            }
          }
        })
        .catch(function (error) {
          navigate('/error');
      });
    }
  })
  return (
    <>
      <div>
        <main className="page-wrapper pb-5">
          <Menu />
          <div className="bg-accent pt-4 pb-5">
            <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
              <div className="d-lg-flex justify-content-between pb-3">

                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                  <h1 className="h3 text-light mb-0">Category</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container pb-5 mb-2 mb-md-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="h3 text-center">{message}</h2>
                </div>
            </div>
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-sm-4 gy-3 pt-sm-3">
              {products.map((product) => DisplayProduct(product))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
