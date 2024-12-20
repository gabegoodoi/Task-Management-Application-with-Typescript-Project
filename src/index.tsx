import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Auth0ProviderWithNavigate from "./components/Auth0Provider.tsx";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className="bg-dark vh-100 text-warning p-5">
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </div>
);
