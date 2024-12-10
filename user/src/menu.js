import { useCookies } from "react-cookie";

export default function Menu() {
  let [cookies, setCookie] = useCookies(["user"]);
  let output = null;
  const isLoggedIn = cookies['userid'] !== undefined;
  return (
    <header className="navbar d-block navbar-sticky navbar-expand-lg navbar-light bg-light">
      <div className="container pb-4">
        <a
          className="navbar-brand d-none d-sm-block me-4 order-lg-1"
          href="index.html"
        >
          <h1>Online Shop</h1>
        </a>
        <a
          className="navbar-brand d-sm-none me-2 order-lg-1"
          href="index.html"
        >
          <h1>Online Shop</h1>
        </a>

        <div
          className="collapse navbar-collapse me-auto order-lg-2"
          id="navbarCollapse"
        >
          {/* Search (mobile)*/}
          <div className="d-lg-none py-3">
            <div className="input-group">
              <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
              <input
                className="form-control rounded-start"
                type="text"
                placeholder="What do you need?"
              />
            </div>
          </div>
          {/* Primary menu*/}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            { isLoggedIn === true ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/cart">
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/wishlist">
                    Wishlist
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/checkout">
                    Checkout
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>

    </header>
  )
}