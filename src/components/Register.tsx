import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Register: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return (
    <div className="text-center">
      <h2 className="text-center my-4 display-5 fw-bold text-warning">Register</h2>
      <button
        className="btn btn-success"
        onClick={() => loginWithRedirect({ screen_hint: "signup" })}
      >
        Sign Up with Auth0
      </button>
    </div>
  );
  else return (
    <div>You've already registered</div>
  )
};

export default Register;