import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const quertClient = new QueryClient();

root.render(
  <QueryClientProvider client={quertClient}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  </QueryClientProvider>
);
