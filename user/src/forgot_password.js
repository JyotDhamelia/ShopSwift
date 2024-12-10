export default function ForgotPassword() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-4">
                <div className="text-center mb-4">
                  <h2>Forgot Password?</h2>
                </div>
                <p>Enter your email to reset your password</p>
                <form className="">
                  <input
                    className="form-control my-3"
                    type="email"
                    id="email-reset"
                    placeholder="johndoe@example.com"
                    required
                  />

                  <button className="btn btn-accent" type="submit">
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
