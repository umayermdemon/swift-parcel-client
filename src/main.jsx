import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./Provider/AuthProvider";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="font-inter">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
