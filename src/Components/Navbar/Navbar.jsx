import { Menu, Search, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router";
const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  console.log(showSideBar);

  return (
    <nav className="w-[100vw] relative">
      <div className={`absolute ${showSideBar ? "block" : "hidden"}`}>
        <div className="top-[0] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.54)] "></div>
        <div className="h-[100vh] w-[60%] bg-white absolute top-[0]">
          <div className="py-[24px] px-8 border-b-black border-b-2 flex items-center">
            <button onClick={() => setShowSideBar(false)}>
              <X />
            </button>
          </div>
          <div className="py-[24px] px-8 flex items-center relative after:content-[''] after:bg-black after:h-[3px] after:w-[95%] after:bottom-[0] after:left-[0] after:absolute">
            <Link className="group " to="/shop">
              <button className="">All</button>
            </Link>
          </div>
          <div className="py-[24px] px-8 flex items-center relative after:content-[''] after:bg-black after:h-[3px] after:w-[95%] after:bottom-[0] after:left-[0] after:absolute">
            <Link className="group " to="/shop">
              <button className=" ">Category</button>
            </Link>
          </div>
          <div className="py-[24px] px-8 flex items-center relative after:content-[''] after:bg-black after:h-[3px] after:w-[95%] after:bottom-[0] after:left-[0] after:absolute">
            <Link className="group " to="/shop">
              <button className=" ">Contact us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className=" flex justify-between py-5 px-8">
          <div className="flex gap-4 items-center">
            <button
              className="block lg:hidden"
              onClick={() =>
                setShowSideBar((prevShowSideBar) => !prevShowSideBar)
              }
            >
              <Menu />
            </button>
            <h1 className="font-bold text-2xl">ADIGA</h1>
          </div>
          <div className="lg:flex gap-2 hidden ">
            <Link className="group " to="/shop">
              <button className="navbar-link w-[110px] ">All</button>
            </Link>
            <Link className="group" to="/shop">
              <button className="navbar-link w-[110px]">Category</button>
            </Link>
            <Link className="group" to="/shop">
              <button className="navbar-link w-[110px]">Contact us</button>
            </Link>
          </div>
          <div className="flex gap-4">
            <Search className="lg:w-[40px] lg:h-[40px]" />
            <ShoppingCart className="lg:w-[40px] lg:h-[40px]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
