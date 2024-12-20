import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const Login: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
      authorizationParams: {
        prompt: "login",
      },
      });
  };
  
  if (!isAuthenticated) return (
  <div className="bg-dark text-warning d-flex justify-content-center align-items-center">
    <div className="container text-center">
      <h2 className="text-center my-4 display-5 fw-bold text-warning">
        Login
      </h2>
      <Button
        className="btn btn-success"
        onClick={handleLogin}
      >
        Log In with Auth0
      </Button>
    </div>
  </div>
  );

  else return (
    <div>You're already logged in!</div>
  );
};

export default Login;
