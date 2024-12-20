import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext.tsx';
import { Task } from '../types.ts';
import { useAuth0 } from "@auth0/auth0-react";

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tasks, updateTask } = useContext(TaskContext);
  const { isAuthenticated } = useAuth0();

  const task = tasks.find((task) => task.id === Number(id));

  const [editedTask, setEditedTask] = useState<Task | null>(task || null);

  if (isAuthenticated && !task) {
      return (
        <div className="container mt-5">
          <div className="alert alert-danger">Task not found</div>
        </div>
      );
    }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editedTask) {
      setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    if (editedTask) {
      updateTask(editedTask);
      navigate('/dashboard');
    }
  };

  if (isAuthenticated) return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm bg-success text-center fw-bolder">
        <h2 className="mb-4 text-warning">Task Details</h2>
        <div className="form-group mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={editedTask?.title || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={editedTask?.description || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="dueDate" className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            name="dueDate"
            value={editedTask?.dueDate || ''}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
  else return (
    <div>Log in to view task details</div>
  )
};


export default TaskDetails;