import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Test from "./pages/Test.jsx";
import Cart from "./pages/Cart.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/product/:id",
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
