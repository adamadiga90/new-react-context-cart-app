import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "./feature/product/productsSlice";
import Home from "./pages/Home";
import { Outlet, RouterProvider } from "react-router";
import { router } from "./router";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  const { items, isSearch, loading } = useSelector((state) => state.products);
  const [isFalse, setIsFalse] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
// const {
//   items: products,
//   loading,
//   error,
//   isSearch,
//   searchParam,
// } = useSelector((state) => state.products);
