import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const Logout: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin
      },
    });
  }

  if (isAuthenticated) return (
    <Button 
      onClick={handleLogout} 
      className="btn btn-danger">
      Logout
    </Button>
  );
};

export default Logout;