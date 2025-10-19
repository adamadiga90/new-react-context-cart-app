import React from "react";
import { Link } from "react-router";
const Home = () => {
  return (
    <div>
      <header className="bg-amber-300 text-blue-800 text-2xl">
        <h1>Hello this is home</h1>
      </header>
      <Link to="/shop">
        <button className="bg-red-500 text-blue-800 text-xl">Shop</button>
      </Link>
    </div>
  );
};

export default Home;
