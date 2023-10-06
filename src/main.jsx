import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PicProvider from "./components/Context/ContextPhotos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PicProvider>
        <App />
      </PicProvider>
    </BrowserRouter>
  </React.StrictMode>
);
