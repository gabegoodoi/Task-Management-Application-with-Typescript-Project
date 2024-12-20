import React from "react";
import TaskCard from "./TaskCard.tsx";
import { Task, TaskListProps } from '../types.ts';
import { useAuth0 } from "@auth0/auth0-react";


const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {

  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No tasks available. Create one!</p>
      )}
    </div>
  );
};

export default TaskList;
