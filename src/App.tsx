import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import TaskDetails from "./components/TaskDetails.tsx";
import { TaskProvider } from "./context/TaskContext.tsx";
import Gateway from "./components/Gateway.tsx";
import ResetPassword from "./components/ResetPassword.tsx";
import Logout from "./components/Logout.tsx";
import Callback from "./components/Callback.tsx";
import AuthenticationGuard from "./components/AuthenticationGuard.tsx";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  const handleResetPasswordClick = () => {
    navigate("/reset-password");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TaskProvider>
      <div>
        {isAuthenticated && (
          <div className="d-flex justify-content-end m-3 gap-3">
            <button
              onClick={handleResetPasswordClick}
              className="btn btn-warning fw-bold"
            >
              Reset Password
            </button>
            <Logout />
          </div>
        )}

        <Routes>
          <Route 
            path="/callback" 
            element={<Callback />} />
          <Route 
            path="/" 
            element={<Gateway />} />
          <Route 
            path="/login" 
            element={<Gateway />} />
          <Route 
            path="/dashboard" 
            element={<AuthenticationGuard component={Dashboard} />}
          />
          <Route 
            path="/task/:id" 
            element={<AuthenticationGuard component={TaskDetails} />}
          />
          <Route
            path="/reset-password"
            element={<AuthenticationGuard component={ResetPassword} />}
          />
          {/* Catch-All Redirects */}
          <Route
            path="*"
            element={ isAuthenticated ? (
              <AuthenticationGuard component={Dashboard} />
            ) : (
              <Navigate to="/" />
            )
          }
          />
        </Routes>
      </div>
    </TaskProvider>
  );
};

export default App;