import React, { useState } from "react";
import { Task, TaskFormProps } from '../types.ts'; // Import types
import { useAuth0 } from "@auth0/auth0-react";

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
    const { isAuthenticated } = useAuth0();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: 0,
      title,
      description,
      dueDate: "",
      completed: false,
    };

    onSubmit(newTask);
    setTitle("");
    setDescription("");
  };

  if (isAuthenticated) return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">Create Task</button>
    </form>
  );
  else return (
    <div>Log in to create new tasks</div>
  )
};

export default TaskForm;