import React from "react";

export default function ForgotPassword() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Forgot Password?</h2>
          <p className="text-center text-muted mb-4">
            Enter your email to reset your password
          </p>
          <form>
            <div className="mb-3">
              <label className="form-label">
                New Password
              </label>
              <input
                type="password"
                id="password-reset"
                className="form-control"
                placeholder="********"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
               Confirm Password
              </label>
              <input
                type="password"
                id="password-reset"
                className="form-control"
                placeholder="********"
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
              <a href="/login" className="text-decoration-none">
                Login Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
