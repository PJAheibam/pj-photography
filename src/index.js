import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css";
import "swiper/css/navigation";
import "react-photo-view/dist/react-photo-view.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
