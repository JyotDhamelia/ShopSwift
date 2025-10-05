import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiAlertCircle } from "react-icons/fi";

function NoPage() {
  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100" 
             style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div className="container text-center">
        <div className="error-page-card">
          <div className="error-icon-wrapper">
            <FiAlertCircle size={100} color="#dc3545" />
          </div>
          <h1 className="error-title">404</h1>
          <h2 className="error-subtitle">Page Not Found</h2>
          <p className="error-message">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn-modern btn-modern-primary">
            <FiHome className="me-2" />
            Go Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NoPage;
