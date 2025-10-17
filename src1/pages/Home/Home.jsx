import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/cart/productSlice";
import ProductItem from "../../components/ProductItem";
import "./home.css";
const Home = () => {
  const search = useSelector((state) => state.cart.search);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);
  const [smallLoading, setSmallLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  let previousSkip = skip;
  // const scrollRef = useRef(null);
  // console.log();

  function handleScroll() {
    if (
      window.scrollY ===
        document.documentElement.scrollHeight - window.innerHeight &&
      !smallLoading
    ) {
      if (!smallLoading && !search.isSearch) {
        setLimit((prevLimit) => prevLimit + 12);
      }
    }
  }
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    dispatch(fetchProducts({ limit: limit, skip: skip, search: false }));
    console.log(products);
  }, [dispatch, , limit]);

  useEffect(() => {
    console.log("Products updated:", products);
  }, [products, limit]);
  return (
    <div style={{ padding: "0 10px" }}>
      <section>
        <div className="home-first-section"></div>
      </section>
    </div>
  );
};

export default Home;
