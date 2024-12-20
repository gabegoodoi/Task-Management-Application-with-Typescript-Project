import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Task, TaskCardProps } from '../types.ts';
import { useAuth0 } from "@auth0/auth0-react";

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  const handleEdit = () => {
    navigate(`/task/${task.id}`);
  };

  const handleDelete = () => onDelete(task.id);

  if (isAuthenticated) return (
    <div className="card my-2 bg-secondary">
      <div className="card-body">
        <h5 className="card-title fs-2">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary me-2" onClick={handleEdit}>
            View / Edit
          </button>
          <button className="btn btn-danger me-2" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  else return (
    <div>Must be logged in to view task cards</div>
  )
};

export default TaskCard;