import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "../helpers/toastHelper";

export default function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) {
      toast.error("please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("password must be at least 6 characters");
      return;
    }

    // Simulate password reset
    toast.success("password reset successful! please login.");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ padding: '0 20px' }}>
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Forgot Password?</h2>
          <p className="text-center text-muted mb-4">
            Enter your email to reset your password
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
               Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Reset Password
            </button>
          </form>
          <div className="text-center mt-3">
            <p>
              Remembered your password?{" "}
              <Link to="/login" className="text-decoration-none">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
