import React, { createContext, useState, useContext, useEffect } from "react";
import { Task, TaskContextProps } from "../types.ts";

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const LOCAL_STORAGE_KEY = "tasks";

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [nextTaskId, setNextTaskId] = useState(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks) as Task[];
      return parsedTasks.length > 0
        ? Math.max(...parsedTasks.map((task) => task.id)) + 1
        : 1; 
    }
    return 1;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    const newTask = { ...task, id: nextTaskId };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNextTaskId((id) => id + 1);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};