# Advanced React E-commerce Web Application

## Project Overview
 This project is a task management tool using TypeScript, React, Bootstrap styling, and authentication through Auth0.

## Key Features
- **Task CRUD**: Create, read, update, and delete tasks.
- **Login & Logout**: Login, logout, register, and update your password using auth0.

## Project Structure
- **/src**
  - **/components**: Contains `Auth0Provider`, `AuthenticationGuard`, `Callback`, `Dashboard` & `Gateway`, `Login`, `Logout`, `Register`, `ResetPassword`, `TaskCard`, & `TaskDetails`, `TaskForm` & `TaskList` TSX components
  - **/context**: Contains `TaskContext` JSX file which stores the tasks of the logged in user
  - **App**: TSX file pulling everything together and keeping it current
  - **index**: TSX file containing the root & Auth0 wrapping
  - **types**: Central hub of the application's object types

## Technologies Used
- **React**: For building the user interface.
- **Typescript**: For writing JSX with more clarity.
- **Auth0**: For safe authorization and athentication.
- **Session Storage**: For persisting data.

## Files
- **Auth0Provider**: Provides the Auth0 context for managing authentication and redirects. Wraps the app to ensure secure access.
- **AuthenticationGuard**: Protects specific routes, redirecting unauthorized users to the login page.
- **Callback**: Handles the Auth0 callback after login, ensuring users are routed back to the appropriate page.
- **Dashboard**: Main page displaying the task list, task creation form
- **Gateway**: Page displaying the Login & Register components
- **Login**: Component enabling users to log in to their account securely via Auth0. 
- **Logout**: Component allowing users to log out of their account and clear session data.
- **Register**: Component for user registration, enabling new account creation through Auth0.
- **ResetPassword**: Component guiding users to reset their password via Auth0's secure workflow.
- **TaskCard**: Displays individual task information in a styled card format, including options to edit or delete.
- **TaskDetails**: Shows detailed information about a specific task, including full description and related data.
- **TaskForm**: Form for creating or updating tasks, with validation and integration into the task management system
- **TaskList**: Displays a list of all tasks for the logged-in user, with options to interact with each task.

## Conclusion
 This project showcases a task management tool using TypeScript, React, Bootstrap styling, and authentication through Auth0.