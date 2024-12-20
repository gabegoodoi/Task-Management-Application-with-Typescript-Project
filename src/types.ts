export interface Task {
    id: number; 
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
  }
  
export interface TaskFormProps {
    onSubmit: (task: Task) => void;
    tasks: Task[];
  }
  
export interface LoginProps {
    onLogin: (user: { email: string; password: string }) => void;
  }

export interface Auth0User {
    name: string;
    email: string;
  }

export  interface RegisterProps {
    onRegister: (user: { email: string; password: string }) => void;
  }

export interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}


export interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

export interface AuthContextType {
  user: { email: string } | null;
  login: (user: { email: string; password: string }) => void;
  logout: () => void;
  register: (user: { email: string; password: string }) => void;
  resetPassword: (email: string) => void;
}