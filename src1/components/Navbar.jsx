import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeSearch, turnSearchDown } from "../features/cart/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.cart.search);
  const [name, setName] = useState("");
  const [showInput, setShowInput] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(changeSearch({ search: name }));
  }

  function handleLogoClick() {
    dispatch(turnSearchDown());
  }

  return (
    <div className="navbar" style={{}}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to={"/"} style={{}} className="router-link">
          <span onClick={handleLogoClick}>ADIGA</span>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "50%",
          justifyContent: "end",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            className={`${showInput ? "show-input" : "hidden-input"}`}
            type="text"
            placeholder="search products..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setShowInput((prevInput) => !prevInput)}
            src="https://img.icons8.com/?size=70&id=7695&format=png&color=000000"
            alt=""
          />
        </form>
        <Link to={`cart`}>
          <img
            style={{ height: "40px", cursor: "pointer" }}
            src={
              "https://img.icons8.com/?size=70&id=85080&format=png&color=000000"
            }
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
