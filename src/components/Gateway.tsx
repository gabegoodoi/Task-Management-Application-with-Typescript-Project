import React from "react";
import { useTask } from "../context/TaskContext.tsx";
import Login from "./Login.tsx"; 
import Register from "./Register.tsx";
import { useAuth0 } from '@auth0/auth0-react';


const Gateway: React.FC = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTask();
  const { isAuthenticated } = useAuth0();

if (!isAuthenticated) return (
    <div className="dashboard-container">
      <h1 className="text-center my-4 display-5 fw-bold text-success">Welcome to Task Manager</h1>
      <Login />
      <Register />
    </div>
  );

else return (
  <div>You're already logged in</div>
)

};


export default Gateway;
