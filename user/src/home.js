export default function HomeNft() {
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="signin-modal"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-secondary">
                <ul className="nav nav-tabs card-header-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link fw-medium active"
                      href="#signin-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-selected="true"
                    >
                      <i className="ci-unlocked me-2 mt-n1" />
                      Sign in
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-medium"
                      href="#signup-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-selected="false"
                    >
                      <i className="ci-user me-2 mt-n1" />
                      Sign up
                    </a>
                  </li>
                </ul>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body tab-content py-4">
                <form
                  className="needs-validation tab-pane fade show active"
                  autoComplete="off"
                  noValidate
                  id="signin-tab"
                >
                  <div className="mb-3">
                    <label className="form-label" htmlFor="si-email">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="si-email"
                      placeholder="johndoe@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="si-password">
                      Password
                    </label>
                    <div className="password-toggle">
                      <input
                        className="form-control"
                        type="password"
                        id="si-password"
                        required
                      />
                      <label
                        className="password-toggle-btn"
                        aria-label="Show/hide password"
                      >
                        <input
                          className="password-toggle-check"
                          type="checkbox"
                        />
                        <span className="password-toggle-indicator" />
                      </label>
                    </div>
                  </div>
                  <div className="mb-3 d-flex flex-wrap justify-content-between">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="si-remember"
                      />
                      <label className="form-check-label" htmlFor="si-remember">
                        Remember me
                      </label>
                    </div>
                    <a className="fs-sm" href="#">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    className="btn btn-primary btn-shadow d-block w-100"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
                <form
                  className="needs-validation tab-pane fade"
                  autoComplete="off"
                  noValidate
                  id="signup-tab"
                >
                  <div className="mb-3">
                    <label className="form-label" htmlFor="su-name">
                      Full name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="su-name"
                      placeholder="John Doe"
                      required
                    />
                    <div className="invalid-feedback">
                      Please fill in your name.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="su-email">Email address</label>
                    <input
                      className="form-control"
                      type="email"
                      id="su-email"
                      placeholder="johndoe@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="su-password">
                      Password
                    </label>
                    <div className="password-toggle">
                      <input
                        className="form-control"
                        type="password"
                        id="su-password"
                        required
                      />
                      <label
                        className="password-toggle-btn"
                        aria-label="Show/hide password"
                      >
                        <input
                          className="password-toggle-check"
                          type="checkbox"
                        />
                        <span className="password-toggle-indicator" />
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="su-password-confirm">
                      Confirm password
                    </label>
                    <div className="password-toggle">
                      <input
                        className="form-control"
                        type="password"
                        id="su-password-confirm"
                        required
                      />
                      <label
                        className="password-toggle-btn"
                        aria-label="Show/hide password"
                      >
                        <input
                          className="password-toggle-check"
                          type="checkbox"
                        />
                        <span className="password-toggle-indicator" />
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-shadow d-block w-100"
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <main className="page-wrapper">
          {/* Navbar for NFT Marketplace demo*/}
          {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
          <header className="navbar d-block navbar-sticky navbar-expand-lg navbar-light position-absolute w-100">
            <div className="container">
              <a
                className="navbar-brand d-none d-sm-block me-4 order-lg-1"
                href="index.html"
              >
                <img src="img/logo-dark.png" width={142} alt="Cartzilla" />
              </a>
              <a
                className="navbar-brand d-sm-none me-2 order-lg-1"
                href="index.html"
              >
                <img src="img/logo-icon.png" width={74} alt="Cartzilla" />
              </a>
              <div className="navbar-toolbar d-flex align-items-center order-lg-3">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <a
                  className="navbar-tool d-none d-lg-flex"
                  href="javascript:void(0)"
                  data-bs-toggle="collapse"
                  data-bs-target="#searchBox"
                  role="button"
                  aria-expanded="false"
                  aria-controls="searchBox"
                >
                  <span className="navbar-tool-tooltip">Search</span>
                  <div className="navbar-tool-icon-box">
                    <i className="navbar-tool-icon ci-search" />
                  </div>
                </a>
                <a
                  className="navbar-tool ms-lg-2"
                  href="#signin-modal"
                  data-bs-toggle="modal"
                >
                  <span className="navbar-tool-tooltip">Account</span>
                  <div className="navbar-tool-icon-box">
                    <i className="navbar-tool-icon ci-user" />
                  </div>
                </a>
                <a
                  className="btn btn-sm btn-accent rounded-1 ms-lg-4 ms-2"
                  href="nft-connect-wallet.html"
                >
                  Connect Wallet
                </a>
              </div>
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
                  <li className="nav-item active">
                    <a className="nav-link" href="home-nft.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Catalog
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="nft-catalog-v1.html">
                          Catalog v.1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="nft-catalog-v2.html">
                          Catalog v.2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-single-auction-live.html"
                        >
                          Single Item - Auction Live
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-single-auction-ended.html"
                        >
                          Single Item - Auction Ended
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="nft-single-buy.html">
                          Single Item - Buy Now
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="nft-vendor.html">
                          Vendor Page
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-connect-wallet.html"
                        >
                          Connect Wallet
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-create-item.html"
                        >
                          Create New Item
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Account
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-account-settings.html"
                        >
                          Profile Settings
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-account-my-items.html"
                        >
                          My Items
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-account-my-collections.html"
                        >
                          My Collections
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-account-favorites.html"
                        >
                          Favorites
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="nft-account-notifications.html"
                        >
                          Notifications
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Back to main demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Search collapse*/}
            <div className="search-box collapse" id="searchBox">
              <div className="container py-2">
                <div className="input-group">
                  <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3" />
                  <input
                    className="form-control rounded-start"
                    type="text"
                    placeholder="What do you need?"
                  />
                </div>
              </div>
            </div>
          </header>
          {/* Hero*/}
          <section
            className="mb-lg-2 bg-faded-accent bg-size-cover"
            style={{
              "padding-top": "80px",
              "background-image": "url(img/nft/home/hero-bg.png)",
            }}
          >
            <div className="container py-4">
              <div className="row align-items-center justify-content-center gy-3 py-3 text-lg-start text-center">
                <div className="col-lg-5 col-md-8 col-sm-10">
                  <h1 className="mb-4 pb-lg-2">
                    Discover rare digital art and collect NFTs
                  </h1>
                  <p className="mb-lg-5 mb-4 fs-lg">
                    The world's first and largest digital marketplace for crypto
                    collectibles and non-fungible tokens (NFTs).
                  </p>
                  <div className="d-lg-flex d-none flex-sm-row flex-column justify-content-lg-start justify-content-center">
                    <a
                      className="btn btn-lg btn-accent me-sm-3 mb-sm-3 mb-2"
                      href="nft-catalog-v1.html"
                    >
                      Explore marketplace
                    </a>
                    <a
                      className="btn btn-lg btn-outline-dark mb-sm-3 mb-2"
                      href="nft-create-item.html"
                    >
                      Create your NFT
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 offset-lg-1 col-sm-10">
                  {/* Top auctions carousel*/}
                  <div className="tns-carousel tns-nav-enabled mb-4 mx-n2">
                    <div
                      className="tns-carousel-inner"
                      data-carousel-options='{"controls": false}'
                    >
                      {/* Carousel item*/}
                      <div className="px-2">
                        <img
                          className="rounded-3"
                          src="img/nft/home/01.jpg"
                          alt=""
                        />
                        <div className="position-relative">
                          <div className="position-absolute start-0 bottom-0 w-100 p-md-5 p-sm-4 p-3">
                            <div className="pt-sm-0 pt-2 px-sm-4 px-2 bg-white rounded shadow">
                              <div className="row gx-5">
                                <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                  <h6 className="mb-1 fs-sm fw-normal text-muted">
                                    Current bid:
                                  </h6>
                                  <span className="h6 mb-0">0.5 ETH</span>
                                </div>
                                <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                  <hr className="hr-vertical position-absolute start-0 top-0 ml-n4" />
                                  <h6 className="mb-1 fs-sm fw-normal text-muted">
                                    Ends in:
                                  </h6>
                                  <span className="h6 mb-0">18 hours</span>
                                </div>
                                <div className="col-sm-4 position-relative py-sm-3 py-2">
                                  <hr className="hr-vertical position-absolute start-0 top-0 ml-n4 d-sm-block d-none" />
                                  <div className="d-flex align-items-center h-100">
                                    <a
                                      className="btn btn-sm btn-dark w-100"
                                      href="nft-single-auction-live.html"
                                    >
                                      Start bid
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Carousel item*/}
                      <div className="px-2">
                        <img
                          className="rounded-3"
                          src="img/nft/home/02.jpg"
                          alt="Product"
                        />
                        <div className="position-relative">
                          <div className="position-absolute start-0 bottom-0 w-100 p-md-5 p-sm-4 p-3">
                            <div className="pt-sm-0 pt-2 px-sm-4 px-2 bg-white rounded shadow">
                              <div className="row gx-5">
                                <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                  <h6 className="mb-1 fs-sm fw-normal text-muted">
                                    Current bid:
                                  </h6>
                                  <span className="h6 mb-0">0.8 ETH</span>
                                </div>
                                <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                  <hr className="hr-vertical position-absolute start-0 top-0 ml-n4" />
                                  <h6 className="mb-1 fs-sm fw-normal text-muted">
                                    Ends in:
                                  </h6>
                                  <span className="h6 mb-0">4 hours</span>
                                </div>
                                <div className="col-sm-4 position-relative py-sm-3 py-2">
                                  <hr className="hr-vertical position-absolute start-0 top-0 ml-n4 d-sm-block d-none" />
                                  <div className="d-flex align-items-center h-100">
                                    <a
                                      className="btn btn-sm btn-dark w-100"
                                      href="nft-single-auction-live.html"
                                    >
                                      Start bid
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Carousel item*/}
                      <div className="px-2">
                        <img
                          className="rounded-3"
                          src="img/nft/home/03.jpg"
                          alt="Product"
                        />
                        <div className="position-relative">
                          <div className="position-absolute start-0 bottom-0 w-100 p-md-5 p-sm-4 p-3">
                            <div className="pt-sm-0 pt-2 px-sm-4 px-2 bg-white rounded shadow">
                              <div className="row gx-5">
                                <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                  <h6 className="mb-1 fs-sm fw-normal text-muted">
                                    Current bid:
                                  </h6>
                                  <span className="h6 mb-0">1.2 ETH</span>
                                </div>
                                <div className="col-sm-4 col-6 position-relative py-sm-3 py-2">
                                  <hr className="hr-vertical position-absolute start-0 top-0 ml-n4" />
                                  <h6 className="mb-1 fs-sm fw-normal text-muted">
                                    Ends in:
                                  </h6>
                                  <span className="h6 mb-0">10 hours</span>
                                </div>
                                <div className="col-sm-4 position-relative py-sm-3 py-2">
                                  <hr className="hr-vertical position-absolute start-0 top-0 ml-n4 d-sm-block d-none" />
                                  <div className="d-flex align-items-center h-100">
                                    <a
                                      className="btn btn-sm btn-dark w-100"
                                      href="nft-single-auction-live.html"
                                    >
                                      Start bid
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-lg-none d-flex flex-sm-row flex-column justify-content-lg-start justify-content-center">
                    <a
                      className="btn btn-lg btn-accent me-sm-3 mb-2"
                      href="nft-catalog-v1.html"
                    >
                      Explore marketplace
                    </a>
                    <a
                      className="btn btn-lg btn-outline-dark mb-2"
                      href="nft-create-item.html"
                    >
                      Create your NFT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Product carousel (Recent Drops)*/}
          <section className="container mb-2 py-lg-5 py-4">
            <div className="d-flex align-items-center justify-content-between mb-sm-3 mb-2">
              <h2 className="h3 mb-0">Recent Drops</h2>
              <a
                className="btn btn-outline-accent ms-3"
                href="nft-catalog-v1.html"
              >
                Explore more
                <i className="ci-arrow-right ms-2" />
              </a>
            </div>
            {/* Product carousel*/}
            <div className="tns-carousel tns-controls-static tns-controls-outside mx-xl-n4 mx-n2 px-xl-4 px-0">
              <div
                className="tns-carousel-inner row gx-xl-0 gx-3 mx-0"
                data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "nav": false, "gutter": 30}}}'
              >
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/nft/catalog/01.jpg" alt="Product image" />
                      </a>
                      {/* Countdown timer*/}
                      <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                        <i className="ci-time me-1" />
                        <div
                          className="countdown d-inline"
                          data-countdown="12/31/2022 12:00:00 PM"
                        >
                          <span className="countdown-hours mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-minutes mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-seconds mb-0 me-0">
                            <span className="countdown-value">0</span>
                          </span>
                        </div>
                      </div>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          3d aesthetics with shapes
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Current bid:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.156 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 595.76)
                        </span>
                      </div>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                        <img
                          className="me-2 rounded-circle"
                          src="img/nft/catalog/avatars/01.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @foxnet_creator
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/nft/catalog/02.jpg" alt="Product image" />
                      </a>
                      {/* Countdown timer*/}
                      <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                        <i className="ci-time me-1" />
                        <div
                          className="countdown d-inline"
                          data-countdown="12/31/2022 09:00:00 PM"
                        >
                          <span className="countdown-hours mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-minutes mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-seconds mb-0 me-0">
                            <span className="countdown-value">0</span>
                          </span>
                        </div>
                      </div>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          Ocean and sky
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Current bid:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.5 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 2,000.55)
                        </span>
                      </div>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                        <img
                          className="me-2 rounded-circle"
                          src="img/nft/catalog/avatars/02.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @YunusKullebi
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a className="d-block" href="nft-single-buy.html">
                        <img src="img/nft/catalog/03.jpg" alt="Product image" />
                      </a>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-buy.html"
                        >
                          Aesthetic art collage
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Reserve price:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.6 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 2,400.65)
                        </span>
                      </div>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                        <img
                          className="me-2 rounded-circle"
                          src="img/nft/catalog/avatars/03.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @lulucollages
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a className="d-block" href="nft-single-buy.html">
                        <img src="img/nft/catalog/04.jpg" alt="Product image" />
                      </a>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-buy.html"
                        >
                          Astronaut surrounded by lights
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Reserve price:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.1 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 400.19)
                        </span>
                      </div>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                        <img
                          className="me-2 rounded-circle"
                          src="img/nft/catalog/avatars/04.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @DistroKid
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/nft/catalog/09.jpg" alt="Product image" />
                      </a>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          3d aesthetics with shapes
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Current bid:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.156 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 595.76)
                        </span>
                      </div>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                        <img
                          className="me-2 rounded-circle"
                          src="img/nft/catalog/avatars/09.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @shubham_dhage
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/nft/catalog/10.jpg" alt="Product image" />
                      </a>
                      {/* Countdown timer*/}
                      <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                        <i className="ci-time me-1" />
                        <div
                          className="countdown d-inline"
                          data-countdown="12/31/2022 12:00:00 PM"
                        >
                          <span className="countdown-hours mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-minutes mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-seconds mb-0 me-0">
                            <span className="countdown-value">0</span>
                          </span>
                        </div>
                      </div>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          Ocean and sky
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Current bid:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.5 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 2,000.55)
                        </span>
                      </div>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                        <img
                          className="me-2 rounded-circle"
                          src="img/nft/catalog/avatars/10.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @MihailGreen
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a className="d-block" href="nft-single-buy.html">
                        <img src="img/nft/catalog/11.jpg" alt="Product image" />
                      </a>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-buy.html"
                        >
                          Aesthetic art collage
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Reserve price:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.6 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 2,400.65)
                        </span>
                      </div>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                        <img
                          className="me-2 rounded-circle"
                          src="img/nft/catalog/avatars/11.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @lulucollages
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Product item*/}
                <div className="col py-3">
                  <article className="card h-100 border-0 shadow">
                    <div className="card-img-top position-relative overflow-hidden">
                      <a
                        className="d-block"
                        href="nft-single-auction-live.html"
                      >
                        <img src="img/nft/catalog/12.jpg" alt="Product image" />
                      </a>
                      {/* Countdown timer*/}
                      <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                        <i className="ci-time me-1" />
                        <div
                          className="countdown d-inline"
                          data-countdown="12/31/2022 09:00:00 PM"
                        >
                          <span className="countdown-hours mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-minutes mb-0 me-0">
                            <span className="countdown-value">0</span>
                            <span className="countdown-label fs-lg">:</span>
                          </span>
                          <span className="countdown-seconds mb-0 me-0">
                            <span className="countdown-value">0</span>
                          </span>
                        </div>
                      </div>
                      {/* Wishlist button*/}
                      <button
                        className="btn-wishlist btn-sm position-absolute top-0 end-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to Favorites"
                        style={{ margin: "12px" }}
                      >
                        <i className="ci-heart" />
                      </button>
                    </div>
                    <div className="card-body">
                      <h3 className="product-title mb-2 fs-base">
                        <a
                          className="d-block text-truncate"
                          href="nft-single-auction-live.html"
                        >
                          Astronaut surrounded by lights
                        </a>
                      </h3>
                      <span className="fs-sm text-muted">Reserve price:</span>
                      <div className="d-flex align-items-center flex-wrap">
                        <h4 className="mt-1 mb-0 fs-base text-darker">
                          0.1 ETH
                        </h4>
                        <span className="mt-1 ms-1 fs-xs text-muted">
                          (≈ $ 400.19)
                        </span>
                      </div>
                    </div>
                    <div className="card-footer mt-n1 py-0 border-0">
                      <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                        <img
                          className="me-2 rounded-circle"
                          src="img/nft/catalog/avatars/12.png"
                          width={32}
                          alt="Avatar"
                        />
                        <a
                          className="nav-link-style fs-sm stretched-link"
                          href="nft-vendor.html"
                        >
                          @Sharan_Pagadala
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* Product carousel (Trending in)*/}
          <section className="mb-4 py-5 bg-secondary">
            <div className="container py-lg-4">
              <div className="d-flex flex-wrap mb-3">
                <h2 className="h3 mb-0">Trending in&nbsp;</h2>
                <div
                  className="dropdown d-inline-block"
                  data-bs-toggle="select"
                >
                  <a
                    className="dropdown-toggle h3 text-primary"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="dropdown-toggle-label">
                      All categories
                    </span>
                  </a>
                  <input type="hidden" name="trending-category" />
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">
                          All categories
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Premium</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Art</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Photography</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Music</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Gaming</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Sports</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Collections</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">Utility</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Product carousel*/}
              <div className="tns-carousel tns-controls-static tns-controls-outside mx-xl-n4 mx-n2 px-xl-4 px-0">
                <div
                  className="tns-carousel-inner row gx-xl-0 gx-3 mx-0"
                  data-carousel-options='{"items": 2, "nav": true, "responsive": {"0":{"items":1,"controls": false, "gutter": 0},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true, "gutter": 30}}}'
                >
                  {/* Product item*/}
                  <div className="col py-3">
                    <article className="card h-100 border-0">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a className="d-block" href="nft-single-buy.html">
                          <img
                            src="img/nft/catalog/05.jpg"
                            alt="Product image"
                          />
                        </a>
                        {/* Wishlist button*/}
                        <button
                          className="btn-wishlist btn-sm position-absolute top-0 end-0"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Add to Favorites"
                          style={{ margin: "12px" }}
                        >
                          <i className="ci-heart" />
                        </button>
                      </div>
                      <div className="card-body">
                        <h3 className="product-title mb-2 fs-base">
                          <a
                            className="d-block text-truncate"
                            href="nft-single-buy.html"
                          >
                            Aesthetic art collage
                          </a>
                        </h3>
                        <span className="fs-sm text-muted">Reserve price:</span>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.6 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 2,400.65)
                          </span>
                        </div>
                      </div>
                      <div className="card-footer mt-n1 py-0 border-0">
                        <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                          <img
                            className="me-2 rounded-circle"
                            src="img/nft/catalog/avatars/05.png"
                            width={32}
                            alt="Avatar"
                          />
                          <a
                            className="nav-link-style fs-sm stretched-link"
                            href="nft-vendor.html"
                          >
                            @Sharan_Pagadala
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* Product item*/}
                  <div className="col py-3">
                    <article className="card h-100 border-0">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a
                          className="d-block"
                          href="nft-single-auction-live.html"
                        >
                          <img
                            src="img/nft/catalog/06.jpg"
                            alt="Product image"
                          />
                        </a>
                        {/* Countdown timer*/}
                        <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                          <i className="ci-time me-1" />
                          <div
                            className="countdown d-inline"
                            data-countdown="12/31/2022 12:00:00 PM"
                          >
                            <span className="countdown-hours mb-0 me-0">
                              <span className="countdown-value">0</span>
                              <span className="countdown-label fs-lg">:</span>
                            </span>
                            <span className="countdown-minutes mb-0 me-0">
                              <span className="countdown-value">0</span>
                              <span className="countdown-label fs-lg">:</span>
                            </span>
                            <span className="countdown-seconds mb-0 me-0">
                              <span className="countdown-value">0</span>
                            </span>
                          </div>
                        </div>
                        {/* Wishlist button*/}
                        <button
                          className="btn-wishlist btn-sm position-absolute top-0 end-0"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Add to Favorites"
                          style={{ margin: "12px" }}
                        >
                          <i className="ci-heart" />
                        </button>
                      </div>
                      <div className="card-body">
                        <h3 className="product-title mb-2 fs-base">
                          <a
                            className="d-block text-truncate"
                            href="nft-single-auction-live.html"
                          >
                            Ocean and sky
                          </a>
                        </h3>
                        <span className="fs-sm text-muted">Current bid:</span>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.5 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 2,000.55)
                          </span>
                        </div>
                      </div>
                      <div className="card-footer mt-n1 py-0 border-0">
                        <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                          <img
                            className="me-2 rounded-circle"
                            src="img/nft/catalog/avatars/06.png"
                            width={32}
                            alt="Avatar"
                          />
                          <a
                            className="nav-link-style fs-sm stretched-link"
                            href="nft-vendor.html"
                          >
                            @Simonlee
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* Product item*/}
                  <div className="col py-3">
                    <article className="card h-100 border-0">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a
                          className="d-block"
                          href="nft-single-auction-live.html"
                        >
                          <img
                            src="img/nft/catalog/07.jpg"
                            alt="Product image"
                          />
                        </a>
                        {/* Countdown timer*/}
                        <div className="badge bg-dark m-3 fs-sm position-absolute top-0 start-0 zindex-5">
                          <i className="ci-time me-1" />
                          <div
                            className="countdown d-inline"
                            data-countdown="12/31/2022 12:00:00 PM"
                          >
                            <span className="countdown-hours mb-0 me-0">
                              <span className="countdown-value">0</span>
                              <span className="countdown-label fs-lg">:</span>
                            </span>
                            <span className="countdown-minutes mb-0 me-0">
                              <span className="countdown-value">0</span>
                              <span className="countdown-label fs-lg">:</span>
                            </span>
                            <span className="countdown-seconds mb-0 me-0">
                              <span className="countdown-value">0</span>
                            </span>
                          </div>
                        </div>
                        {/* Wishlist button*/}
                        <button
                          className="btn-wishlist btn-sm position-absolute top-0 end-0"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Add to Favorites"
                          style={{ margin: "12px" }}
                        >
                          <i className="ci-heart" />
                        </button>
                      </div>
                      <div className="card-body">
                        <h3 className="product-title mb-2 fs-base">
                          <a
                            className="d-block text-truncate"
                            href="nft-single-auction-live.html"
                          >
                            3d aesthetics with shapes
                          </a>
                        </h3>
                        <span className="fs-sm text-muted">Current bid:</span>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.156 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 595.76)
                          </span>
                        </div>
                      </div>
                      <div className="card-footer mt-n1 py-0 border-0">
                        <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                          <img
                            className="me-2 rounded-circle"
                            src="img/nft/catalog/avatars/07.png"
                            width={32}
                            alt="Avatar"
                          />
                          <a
                            className="nav-link-style fs-sm stretched-link"
                            href="nft-vendor.html"
                          >
                            @Shubham_Dhage
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* Product item*/}
                  <div className="col py-3">
                    <article className="card h-100 border-0">
                      <div className="card-img-top position-relative overflow-hidden">
                        <a
                          className="d-block"
                          href="nft-single-auction-live.html"
                        >
                          <img
                            src="img/nft/catalog/08.jpg"
                            alt="Product image"
                          />
                        </a>
                        {/* Wishlist button*/}
                        <button
                          className="btn-wishlist btn-sm position-absolute top-0 end-0"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Add to Favorites"
                          style={{ margin: "12px" }}
                        >
                          <i className="ci-heart" />
                        </button>
                      </div>
                      <div className="card-body">
                        <h3 className="product-title mb-2 fs-base">
                          <a
                            className="d-block text-truncate"
                            href="nft-single-auction-live.html"
                          >
                            Astronaut surrounded by lights
                          </a>
                        </h3>
                        <span className="fs-sm text-muted">Reserve price:</span>
                        <div className="d-flex align-items-center flex-wrap">
                          <h4 className="mt-1 mb-0 fs-base text-darker">
                            0.1 ETH
                          </h4>
                          <span className="mt-1 ms-1 fs-xs text-muted">
                            (≈ $ 400.19)
                          </span>
                        </div>
                      </div>
                      <div className="card-footer mt-n1 py-0 border-0">
                        <div className="d-flex align-items-center position-relative mb-1 py-3 border-top">
                          <img
                            className="me-2 rounded-circle"
                            src="img/nft/catalog/avatars/08.png"
                            width={32}
                            alt="Avatar"
                          />
                          <a
                            className="nav-link-style fs-sm stretched-link"
                            href="nft-vendor.html"
                          >
                            @DistroKid
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-sm-row flex-column justify-content-center pt-4">
                <a
                  className="btn btn-outline-accent"
                  href="nft-catalog-v2.html"
                >
                  Browse marketplace
                </a>
              </div>
            </div>
          </section>
          {/* Top Creators*/}
          <section className="container py-lg-5 py-4">
            <h2 className="h3 mb-4 pb-2">Top Creators</h2>
            {/* Creators (carousel)*/}
            <div className="tns-carousel">
              <div
                className="tns-carousel-inner"
                data-carousel-options='{"items": 2, "controls": false, "nav": true, "gutter": 30, "responsive": {"0":{"items":1},"576":{"items":2},"992":{"items":3}}}'
              >
                {/* Carousel item*/}
                <div>
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>1.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/01.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @freeross
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">569 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                  <hr className="my-4" />
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>2.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/02.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @Sharan_Pagadala
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">84 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                  <hr className="my-4" />
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>3.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/03.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @Simonlee
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">136 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                </div>
                {/* Carousel item*/}
                <div>
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>4.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/04.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @annet_creator
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">83 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                  <hr className="my-4" />
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>5.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/05.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @shubham_dhage
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">105 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                  <hr className="my-4" />
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>6.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/06.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @distrokid
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">902 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                </div>
                {/* Carousel item*/}
                <div>
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>7.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/07.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @42Labs
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">730 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                  <hr className="my-4" />
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>8.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/08.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @ZeniconStudio
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">299 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                  <hr className="my-4" />
                  {/* Creator*/}
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center position-relative">
                      <span>9.</span>
                      <img
                        className="rounded-circle ms-2"
                        src="img/nft/home/creators/09.png"
                        width={48}
                        alt="Avatar"
                      />
                      <div className="ms-2">
                        <h4 className="mb-1 fs-base text-body">
                          <a
                            className="nav-link-style stretched-link"
                            href="nft-vendor.html"
                          >
                            @MihailGreen
                          </a>
                        </h4>
                        <span className="fs-xs text-muted">100 followers</span>
                      </div>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary ms-2">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Recommended collections*/}
          <section className="container py-lg-5 py-4">
            <div className="d-flex align-items-center justify-content-between mb-sm-4 mb-2 pb-2">
              <h2 className="h3 mb-0">Recommended Collections</h2>
              <a
                className="btn btn-outline-accent ms-3"
                href="nft-catalog-v2.html"
              >
                View all
                <i className="ci-arrow-right ms-2" />
              </a>
            </div>
            {/* Collections (carousel)*/}
            <div className="tns-carousel">
              <div
                className="tns-carousel-inner"
                data-carousel-options='{"items": 2, "controls": false, "nav": true, "gutter": 30, "responsive": {"0":{"items":1},"576":{"items":2},"992":{"items":3}}}'
              >
                {/* Carousel item (collection)*/}
                <article>
                  <div className="card mb-3">
                    <div className="card-body p-3">
                      {/* Author*/}
                      <div className="d-flex align-items-center position-relative mb-3">
                        <img
                          className="rounded-circle me-2"
                          src="img/nft/thumbnails/01.png"
                          width={32}
                          alt="Avatar"
                        />
                        <div className="fs-sm">
                          by
                          <a
                            className="ms-1 fw-medium text-accent stretched-link"
                            href="nft-vendor.html"
                          >
                            @Sharan_Pagadala
                          </a>
                        </div>
                      </div>
                      {/* Collage*/}
                      <a className="d-block" href="nft-catalog-v2.html">
                        <div className="row row-cols-2 g-2">
                          <div className="col">
                            <img
                              className="rounded-1"
                              src="img/nft/collections/1-1.jpg"
                              alt="Collection item"
                            />
                          </div>
                          <div className="col">
                            <div className="mt-n2">
                              <img
                                className="rounded-1 mt-2"
                                src="img/nft/collections/1-2.jpg"
                                alt="Collection item"
                              />
                              <img
                                className="rounded-1 mt-2"
                                src="img/nft/collections/1-3.jpg"
                                alt="Collection item"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Collection title*/}
                  <h3 className="h5 mb-1">
                    <a className="nav-link-style" href="nft-catalog-v2.html">
                      Contemporary art collage
                    </a>
                  </h3>
                  <span className="fs-sm text-muted">$ 12180.95</span>
                </article>
                {/* Carousel item (collection)*/}
                <article>
                  <div className="card mb-3">
                    <div className="card-body p-3">
                      {/* Author*/}
                      <div className="d-flex align-items-center position-relative mb-3">
                        <img
                          className="rounded-circle me-2"
                          src="img/nft/thumbnails/02.png"
                          width={32}
                          alt="Avatar"
                        />
                        <div className="fs-sm">
                          by
                          <a
                            className="ms-1 fw-medium text-accent stretched-link"
                            href="nft-vendor.html"
                          >
                            @Simonlee
                          </a>
                        </div>
                      </div>
                      {/* Collage*/}
                      <a className="d-block" href="nft-catalog-v2.html">
                        <div className="row row-cols-2 g-2">
                          <div className="col">
                            <img
                              className="rounded-1"
                              src="img/nft/collections/2-1.jpg"
                              alt="Collection item"
                            />
                          </div>
                          <div className="col">
                            <div className="mt-n2">
                              <img
                                className="rounded-1 mt-2"
                                src="img/nft/collections/2-2.jpg"
                                alt="Collection item"
                              />
                              <img
                                className="rounded-1 mt-2"
                                src="img/nft/collections/2-3.jpg"
                                alt="Collection item"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Collection title*/}
                  <h3 className="h5 mb-1">
                    <a className="nav-link-style" href="nft-catalog-v2.html">
                      3D digital abstract art
                    </a>
                  </h3>
                  <span className="fs-sm text-muted">$ 9020.34</span>
                </article>
                {/* Carousel item (collection)*/}
                <article>
                  <div className="card mb-3">
                    <div className="card-body p-3">
                      {/* Author*/}
                      <div className="d-flex align-items-center position-relative mb-3">
                        <img
                          className="rounded-circle me-2"
                          src="img/nft/thumbnails/03.png"
                          width={32}
                          alt="Avatar"
                        />
                        <div className="fs-sm">
                          by
                          <a
                            className="ms-1 fw-medium text-accent stretched-link"
                            href="nft-vendor.html"
                          >
                            @Annet_creator
                          </a>
                        </div>
                      </div>
                      {/* Collage*/}
                      <a className="d-block" href="nft-catalog-v2.html">
                        <div className="row row-cols-2 g-2">
                          <div className="col">
                            <img
                              className="rounded-1"
                              src="img/nft/collections/3-1.jpg"
                              alt="Collection item"
                            />
                          </div>
                          <div className="col">
                            <div className="mt-n2">
                              <img
                                className="rounded-1 mt-2"
                                src="img/nft/collections/3-2.jpg"
                                alt="Collection item"
                              />
                              <img
                                className="rounded-1 mt-2"
                                src="img/nft/collections/3-3.jpg"
                                alt="Collection item"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Collection title*/}
                  <h3 className="h5 mb-1">
                    <a className="nav-link-style" href="nft-catalog-v2.html">
                      Clone X Mini Monsters
                    </a>
                  </h3>
                  <span className="fs-sm text-muted">$ 1520.18</span>
                </article>
              </div>
            </div>
          </section>
          {/* Mobile app*/}
          <section className="container py-lg-5 py-4">
            {/* Banner*/}
            <div className="card border-0 position-relative overflow-hidden">
              {/* Overlay bg*/}
              <span
                className="d-block w-100 h-100 position-absolute top-0 start-0 zindex-1 bg-accent opacity-15"
                style={{
                  "background-image":
                    "conic-gradient(from 207.95deg at 50% 50%, #885CFF -57.31deg, #FF6B9B 44.14deg, #DC86FF 78.21deg, #885CFF 123.94deg, #DC86FF 186.36deg, #FF6B9B 249.2deg, #885CFF 302.69deg, #FF6B9B 404.14deg)",
                }}
              />
              {/* Overlay content*/}
              <div className="card-body row py-0 px-sm-0 position-relative zindex-5">
                <div className="col-lg-9 col-sm-10 offset-sm-1 d-flex flex-md-row flex-column align-items-md-end text-md-start text-center">
                  <div
                    className="my-5 me-md-5 me-auto ms-md-0 ms-auto py-md-4"
                    style={{ "max-width": "495px" }}
                  >
                    <h3 className="h2 mb-3">
                      <span className="text-accent">Best App</span> for NFT
                      Enthusiasts
                    </h3>
                    <p className="mb-sm-4 mb-3">
                      If you're an NFT enthusiast, or are looking to get more
                      familiar with NFTs, consider downloading our NFT App!
                    </p>
                    <div className="mx-n1">
                      <a className="btn-market btn-apple mt-3 mx-1" href="#">
                        <span className="btn-market-subtitle">
                          Download on the
                        </span>
                        <span className="btn-market-title">App Store</span>
                      </a>
                      <a className="btn-market btn-google mt-3 mx-1" href="#">
                        <span className="btn-market-subtitle">
                          Download on the
                        </span>
                        <span className="btn-market-title">Google Play</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ms-md-auto">
                    <img
                      src="img/nft/mobile-app.svg"
                      alt="Illustration"
                      style={{
                        "border-top-left-radius": "28px",
                        "border-top-right-radius": "28px",
                        "box-shadow": "16px 16px 24px -7px rgba(0, 0, 0, .3)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Features*/}
          <section className="container py-lg-5 py-4">
            <h2 className="mb-4 pb-md-3 pb-2">
              Begin your NFT journey with us!
            </h2>
            {/* Features carousel*/}
            <div className="tns-carousel mb-4">
              <div
                className="tns-carousel-inner"
                data-carousel-options='{"items": 2, "nav": true, "gutter": 30, "responsive": {"0":{"items":1,"controls": false},"500":{"items":2},"768":{"items":3}, "1100":{"items":4}, "1278":{"controls": true}}}'
              >
                {/* Carousel item*/}
                <div>
                  <img
                    className="mb-4"
                    src="img/nft/features/wallet.svg"
                    width={60}
                    alt="Icon"
                  />
                  <h4 className="mb-2 fs-lg text-body">Set up your wallet</h4>
                  <p className="mb-0 fs-sm text-muted">
                    Quam nulla in id nibh. Morbi eget elit eget dui est pretium,
                    blandit penatibus blandit. Amet mattis blandit urna
                    volutpat.
                  </p>
                </div>
                {/* Carousel item*/}
                <div>
                  <img
                    className="mb-4"
                    src="img/nft/features/add.svg"
                    width={60}
                    alt="Icon"
                  />
                  <h4 className="mb-2 fs-lg text-body">
                    Create your collection
                  </h4>
                  <p className="mb-0 fs-sm text-muted">
                    Fringilla ullamcorper aenean tellus ullamcorper neque,
                    malesuada. Aliquam consequat nunc.
                  </p>
                </div>
                {/* Carousel item*/}
                <div>
                  <img
                    className="mb-4"
                    src="img/nft/features/image.svg"
                    width={60}
                    alt="Icon"
                  />
                  <h4 className="mb-2 fs-lg text-body">Add your NFTs</h4>
                  <p className="mb-0 fs-sm text-muted">
                    Platea eu aliquam pellentesque parturient. Volutpat,
                    fermentum suspendisse at nisi cras mattis augue.
                  </p>
                </div>
                {/* Carousel item*/}
                <div>
                  <img
                    className="mb-4"
                    src="img/nft/features/shopping-cart.svg"
                    width={60}
                    alt="Icon"
                  />
                  <h4 className="mb-2 fs-lg text-body">List them for sale</h4>
                  <p className="mb-0 fs-sm text-muted">
                    In eget nulla id feugiat ut placerat sapien malesuada. Sed
                    id risus non accumsan eu amet ut pellentesque.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Bg shape*/}
        <div className="pt-4 bg-secondary">
          {/* Blog recent posts*/}
          <section className="container py-lg-5 py-4">
            <div className="d-flex align-items-center justify-content-between mb-sm-4 mb-2 pb-2">
              <h2 className="h3 mb-0">Resources for getting started</h2>
              <a className="btn btn-outline-accent ms-3" href="blog-grid.html">
                All articles
                <i className="ci-arrow-right ms-2" />
              </a>
            </div>
            {/* Blog (carousel)*/}
            <div className="tns-carousel pb-lg-5 pb-4">
              <div
                className="tns-carousel-inner"
                data-carousel-options='{"items": 2, "controls": false, "nav": true, "gutter": 30, "responsive": {"0":{"items":1},"576":{"items":2},"992":{"items":3}}}'
              >
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/01.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Wade Warren
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Aug 15
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      The complete guide to NFTs art for creators and investors
                    </a>
                  </h2>
                </article>
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/02.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Kathryn Murphy
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Sep 18
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      A chance to win a variety of common, rare and unique NFTs
                    </a>
                  </h2>
                </article>
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/03.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Devon Lane
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Nov 26
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      Exclusive premium events, from exhibitions to unique
                      collectibles
                    </a>
                  </h2>
                </article>
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/01.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Wade Warren
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Aug 15
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      The complete guide to NFTs art for creators and investors
                    </a>
                  </h2>
                </article>
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/02.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Kathryn Murphy
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Sep 18
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      A chance to win a variety of common, rare and unique NFTs
                    </a>
                  </h2>
                </article>
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/03.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Devon Lane
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Nov 26
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      Exclusive premium events, from exhibitions to unique
                      collectibles
                    </a>
                  </h2>
                </article>
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/01.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Wade Warren
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Aug 15
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      The complete guide to NFTs art for creators and investors
                    </a>
                  </h2>
                </article>
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/02.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Kathryn Murphy
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Sep 18
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      A chance to win a variety of common, rare and unique NFTs
                    </a>
                  </h2>
                </article>
                {/* Carousel item*/}
                <article>
                  <a className="d-block mb-3" href="blog-single.html">
                    <img
                      className="rounded-3"
                      src="img/nft/blog/03.jpg"
                      alt="Blog image"
                    />
                  </a>
                  <div className="d-flex align-items-center fs-sm pb-2">
                    <a className="blog-entry-meta-link" href="#">
                      by Devon Lane
                    </a>
                    <span className="blog-entry-meta-divider" />
                    <a className="blog-entry-meta-link" href="#">
                      Nov 26
                    </a>
                  </div>
                  <h2 className="h6 blog-entry-title mb-0">
                    <a href="blog-single.html">
                      Exclusive premium events, from exhibitions to unique
                      collectibles
                    </a>
                  </h2>
                </article>
              </div>
            </div>
          </section>
          {/* Mail subscription*/}
          <section className="container">
            <div className="card py-5 border-0 shadow">
              <div className="card-body py-md-4 py-3 px-4 text-center">
                <h3 className="mb-3">Never miss a drop!</h3>
                <p className="mb-4 pb-2">
                  Subscribe to our ultra-exclusive drop list and be the first to
                  know about upcoming drops.
                </p>
                <div
                  className="widget mx-auto"
                  style={{ "max-width": "500px" }}
                >
                  <form
                    className="subscription-form validate"
                    action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126"
                    method="post"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    noValidate
                  >
                    <div className="input-group flex-nowrap">
                      <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                      <input
                        className="form-control rounded-start"
                        type="email"
                        name="EMAIL"
                        placeholder="Your email"
                        required
                      />
                      <button
                        className="btn btn-accent"
                        type="submit"
                        name="subscribe"
                      >
                        Subscribe*
                      </button>
                    </div>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        className="subscription-form-antispam"
                        type="text"
                        name="b_c7103e2c981361a6639545bd5_29ca296126"
                        tabIndex={-1}
                      />
                    </div>
                    <div className="form-text mt-3">
                      *Receive early discount offers, updates and new products
                      info.
                    </div>
                    <div className="subscription-status" />
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Footer*/}
        <footer className="footer bg-darker">
          <div className="mt-n10 pt-10 bg-dark">
            <div className="container py-5">
              <div className="row py-lg-4">
                <div className="col-lg-4 mb-lg-0 mb-4">
                  <div className="widget pb-3 mb-lg-4">
                    <h3 className="widget-title text-light pb-1">
                      Stay informed
                    </h3>
                    <form
                      className="subscription-form validate"
                      action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126"
                      method="post"
                      name="mc-embedded-subscribe-form"
                      target="_blank"
                      noValidate
                    >
                      <div className="input-group flex-nowrap">
                        <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3" />
                        <input
                          className="form-control rounded-start"
                          type="email"
                          name="EMAIL"
                          placeholder="Your email"
                          required
                        />
                        <button
                          className="btn btn-accent"
                          type="submit"
                          name="subscribe"
                        >
                          Subscribe*
                        </button>
                      </div>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          className="subscription-form-antispam"
                          type="text"
                          name="b_c7103e2c981361a6639545bd5_29ca296126"
                          tabIndex={-1}
                        />
                      </div>
                      <div className="form-text text-light opacity-50">
                        *Subscribe to our newsletter to receive early discount
                        offers, updates and new products info.
                      </div>
                      <div className="subscription-status" />
                    </form>
                  </div>
                  <div>
                    <a
                      className="btn-social bs-light bs-twitter me-2 mb-2"
                      href="#"
                    >
                      <i className="ci-twitter" />
                    </a>
                    <a
                      className="btn-social bs-light bs-facebook me-2 mb-2"
                      href="#"
                    >
                      <i className="ci-facebook" />
                    </a>
                    <a
                      className="btn-social bs-light bs-instagram me-2 mb-2"
                      href="#"
                    >
                      <i className="ci-instagram" />
                    </a>
                    <a
                      className="btn-social bs-light bs-pinterest me-2 mb-2"
                      href="#"
                    >
                      <i className="ci-pinterest" />
                    </a>
                    <a
                      className="btn-social bs-light bs-youtube me-2 mb-2"
                      href="#"
                    >
                      <i className="ci-youtube" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className="d-flex flex-sm-row flex-column justify-content-sm-between mt-n4 mx-lg-n3">
                    <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                      <h3 className="widget-title text-light">Company</h3>
                      <ul className="widget-list">
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            About Us
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            How It Works
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Create an NFT With Us
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Support
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Blog
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            My Account
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                      <h3 className="widget-title text-light">Marketplace</h3>
                      <ul className="widget-list">
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            All NFTs
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            New
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Art
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Music
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Photography
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Utility
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="widget widget-links widget-light mt-4 px-lg-3 px-sm-n2">
                      <h3 className="widget-title text-light">Help</h3>
                      <ul className="widget-list">
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Terms and Conditions
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="widget-list-item">
                          <a className="widget-list-link" href="#">
                            FAQ
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-lg-4 my-3 py-2">
            <div className="d-flex flex-md-row flex-column-reverse align-items-center justify-content-md-between">
              <div className="fs-xs text-light opacity-50">
                © All rights reserved. Made by{" "}
                <a
                  className="text-light"
                  href="https://createx.studio/"
                  target="_blank"
                  rel="noopener"
                >
                  Createx Studio
                </a>
              </div>
              <div className="d-flex align-items-start mb-md-0 mb-3 mx-n1">
                <div className="px-1">
                  <a className="btn-market btn-apple bg-dark" href="#">
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">App Store</span>
                  </a>
                </div>
                <div className="px-1">
                  <a className="btn-market btn-google bg-dark" href="#">
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Toolbar for handheld devices (NFT Marketplace)*/}
        <div className="handheld-toolbar">
          <div className="d-table table-layout-fixed w-100">
            <a
              className="d-none handheld-toolbar-item"
              href="#vendor-sidebar"
              data-bs-toggle="offcanvas"
            >
              <span className="handheld-toolbar-icon">
                <i className="ci-sign-in" />
              </span>
              <span className="handheld-toolbar-label">Sidebar</span>
            </a>
            <a
              className="d-table-cell handheld-toolbar-item"
              href="#signin-modal"
              data-bs-toggle="modal"
            >
              <span className="handheld-toolbar-icon">
                <i className="ci-user" />
              </span>
              <span className="handheld-toolbar-label">Account</span>
            </a>
            <a
              className="d-table-cell handheld-toolbar-item"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              onclick="window.scrollTo(0, 0)"
            >
              <span className="handheld-toolbar-icon">
                <i className="ci-menu" />
              </span>
              <span className="handheld-toolbar-label">Menu</span>
            </a>
            <a
              className="d-table-cell handheld-toolbar-item"
              href="nft-connect-wallet.html"
            >
              <span className="handheld-toolbar-icon">
                <i className="ci-wallet" />
              </span>
              <span className="handheld-toolbar-label text-nowrap">
                Connect wallet
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
