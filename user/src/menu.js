import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function Menu() {
  const [cookies] = useCookies(["user"]);
  const isLoggedIn = cookies["userid"] !== undefined;

  return (
    <div className="navbar sticky-top navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-dark" to="/">
          <img
            src="/images/Shop-Swift.jpg"
            style={{ width: "60px", height: "60px" }}
            className="me-2"
          />
          <span className="fw-bold fs-4">
            Shop-Swift
          </span>
        </Link>
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark text-danger-hover" to="/">
                Home
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark text-danger-hover"
                    to="/cart"
                  >
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark text-danger-hover"
                    to="/wishlist"
                  >
                    Wishlist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-danger text-danger-hover"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link text-danger text-danger-hover"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-danger text-danger-hover"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
