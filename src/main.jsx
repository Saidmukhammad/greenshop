import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
