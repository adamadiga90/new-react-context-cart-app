import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";
import { router } from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
