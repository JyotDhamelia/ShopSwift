import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-white">
      <div className="container text-center">
        <div className="card shadow-lg border-0" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className="card-body">
            <h2 className="text-dark mb-4">404 - Page Not Found</h2>
            <p className="text-muted mb-4">
              Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-primary">
              <i className="fas fa-arrow-left me-2"></i> Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoPage;
