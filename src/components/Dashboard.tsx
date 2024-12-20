import React, { useContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import TaskList from "./TaskList.tsx";
import TaskForm from "./TaskForm.tsx";
import { TaskContext } from "../context/TaskContext.tsx";

const Dashboard: React.FC = () => {

  const { tasks, addTask, updateTask, deleteTask } = useContext(TaskContext);

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  if (!isAuthenticated){
    return <div>Not authenticated</div>
  }

  if (!user){
    return <div>No user</div>
  }

  getAccessTokenSilently().then(token => console.log('token', token))

  return (
    <div className="dashboard-container">
      <h1 className="text-center my-4 display-5 fw-bold text-success">Task Dashboard</h1>

      <div className="task-form-section text-center">
        <h2>Create New Task</h2>
        <TaskForm onSubmit={addTask} tasks={tasks} />
      </div>

      <div className="task-list-section mt-4 text-center">
        <h2>All Tasks</h2>
        <TaskList tasks={tasks} onEdit={updateTask} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default Dashboard;