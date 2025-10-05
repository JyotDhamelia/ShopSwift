import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { FiHome, FiShoppingCart, FiHeart, FiLogOut, FiUserPlus, FiLogIn, FiPackage, FiShoppingBag } from "react-icons/fi";
import "../css/navbar.css";

export default function Menu() {
  const [cookies] = useCookies(["user"]);
  const isLoggedIn = cookies["userid"] !== undefined;

  return (
    <nav className="modern-navbar sticky-top">
      <div className="container">
        <div className="navbar-content">
          <Link className="brand-logo" to="/">
            <div className="logo-wrapper-modern">
              <FiShoppingBag className="logo-icon" />
            </div>
            <span className="brand-name">Shop-Swift</span>
          </Link>
          
          <button
            className="mobile-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggle-icon"></span>
            <span className="toggle-icon"></span>
            <span className="toggle-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link className="nav-menu-link" to="/">
                  <FiHome className="nav-icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link className="nav-menu-link" to="/products">
                  <FiPackage className="nav-icon" />
                  <span>Products</span>
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-menu-item">
                    <Link className="nav-menu-link" to="/cart">
                      <FiShoppingCart className="nav-icon" />
                      <span>Cart</span>
                    </Link>
                  </li>
                  <li className="nav-menu-item">
                    <Link className="nav-menu-link" to="/wishlist">
                      <FiHeart className="nav-icon" />
                      <span>Wishlist</span>
                    </Link>
                  </li>
                  <li className="nav-menu-item">
                    <Link className="nav-menu-link" to="/orders">
                      <FiPackage className="nav-icon" />
                      <span>Orders</span>
                    </Link>
                  </li>
                  <li className="nav-menu-item">
                    <Link className="nav-menu-link logout-link" to="/logout">
                      <FiLogOut className="nav-icon" />
                      <span>Logout</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-menu-item">
                    <Link className="nav-menu-link register-link" to="/register">
                      <FiUserPlus className="nav-icon" />
                      <span>Register</span>
                    </Link>
                  </li>
                  <li className="nav-menu-item">
                    <Link className="nav-menu-link login-link" to="/login">
                      <FiLogIn className="nav-icon" />
                      <span>Login</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
