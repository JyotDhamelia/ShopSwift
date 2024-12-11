import Menu from "./menu";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBase, getBaseImage } from "./Common";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Product() {
  let [cookies] = useCookies(["user"]);
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const AddToCartOrWishList = (productId, apiAddress) => {
    let userId = cookies["userid"];
    apiAddress = getBase() + `${apiAddress}?productid=${productId}&usersid=${userId}`;
    axios
      .get(apiAddress)
      .then((response) => {
        const data = response.data;
        if (data[0]["error"] !== "no") {
          alert(data[0]["error"]);
        } else {
          alert(data[1]["message"]);
        }
      })
      .catch(() => alert("Failed to add to cart or wishlist. Please try again."));
  };

  const DisplayProduct = (product) => {
    return (
      <div className="col">
        <div className="card h-100 border-0 shadow-sm text-center">
          <div
            className="card-img-top position-relative overflow-hidden d-flex justify-content-center align-items-center"
            style={{ height: "250px" }}
          >
            <a className="d-block" href={"/product-detail/" + product.id}>
              <img
                src={getBaseImage() + "product/" + product.photo}
                alt={product.title}
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
                href={"/product-detail/" + product.id}
                className="text-decoration-none text-dark fw-bold"
              >
                {product.title}
              </a>
            </h5>
            <p className="text-muted mb-2">Rs {product.price}</p>
          </div>
          <div className="card-footer mt-n1 py-2 border-0">
            <button
              type="button"
              className="btn btn-primary d-block w-100 mt-2"
              onClick={() => AddToCartOrWishList(product.id, "add_to_cart.php")}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="btn btn-warning d-block w-100 mt-2"
              onClick={() => AddToCartOrWishList(product.id, "add_to_wishlist.php")}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (products.length === 0) {
      const categoryId = window.location.href.split("/").pop();
      axios
        .get(getBase() + "product.php?categoryid=" + categoryId)
        .then((response) => {
          if (response.status !== 200) {
            alert("Something went wrong, please try again later.");
          } else {
            const data = response.data;
            if (data[0]["error"] !== "no") {
              setMessage(data[0]["error"]);
            } else if (data[1]["total"] === 0) {
              setMessage("No products found");
            } else {
              data.splice(0, 2); // Remove first two elements
              setProducts(data);
            }
          }
        })
        .catch(() => navigate("/error"));
    }
  }, [navigate, products]);

  return (
    <>
      <div>
      <Menu />
        <main className="page-wrapper pb-5 mt-5">
          <div>
            <div className="container pt-1">
              <div className="d-lg-flex justify-content-between pb-1">
                <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                  <h1 className="h4 text-dark mb-0">Products</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-md-2 mt-5">
            {message ? (
              <div className="row">
                <div className="col-12">
                  <h2 className="h3 text-center">{message}</h2>
                </div>
              </div>
            ) : (
              <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-4">
                {products.map((product) => DisplayProduct(product))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
