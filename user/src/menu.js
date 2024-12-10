import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function Menu() {
  const [cookies] = useCookies(["user"]);
  const isLoggedIn = cookies['userid'] !== undefined;

  return (
    <header
      className="navbar navbar-expand-lg text-dark shadow-sm"
      style={{ backgroundColor: "#B3C7F9" }} // Light blue color from the image
    >
      <div className="container">
        {/* Brand with image */}
        <Link className="navbar-brand d-flex align-items-center text-dark" to="/">
          <img
            src="./images/Shop-Swift.jpg"
            alt=""
            style={{ width: "50px", height: "50px" }}
            className="me-2"
          />
          <span className="fw-bold fs-5">Shop-Swift</span>
        </Link>

        {/* Toggle button for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/">
                Home
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/wishlist">
                    Wishlist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/checkout">
                    Checkout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
