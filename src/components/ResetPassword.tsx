import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ResetPassword: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    loginWithRedirect({
      screen_hint: "reset_password",
      login_hint: email,             
    });

    setMessage("If that email is registered, you will receive a password reset link.");
    setEmail("");
  };

  if (isAuthenticated) return (
    <div className="bg-dark text-warning d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <h2 className="my-4 display-5 fw-bold text-success">Reset Password</h2>
        <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
          <div className="w-50">
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">Send Reset Link</button>
        </form>
        {message && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );

  else return (
    <div>must be authenticated to reset password</div>
  )
};

export default ResetPassword;
