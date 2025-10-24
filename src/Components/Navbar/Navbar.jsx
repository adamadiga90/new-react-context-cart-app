import { Menu, Search, ShoppingCart, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      let las;
      if (currentScroll < lastScroll) {
        setShowNavbar(true);
      }
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNavbar(false);
        setShowSideBar(false);
      }
      setLastScroll(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      return document.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[150] shadow-box ${
          showSideBar ? "pointer-events-auto" : "pointer-events-none"
          // showSideBar ? "block" : "hidden"
        }`}
      >
        {/* <div className={`fixed inset-0 z-50 ${showSideBar ? 'pointer-events-auto' : 'pointer-events-none'}`}> */}

        <div
          className={`absolute inset-0  bg-black transition-opacity duration-300 ease-in-out lg:hidden ${
            showSideBar ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setShowSideBar(false)}
        />
        <div
          className={`md:hidden absolute h-[100vh] w-[60%] z-[200] bg-gray-200 transition-transform ease-in-out duration-300 top-[0] ${
            showSideBar ? "translate-x-0" : "-translate-x-100"
          }`}
        >
          <div className="lg:hidden py-[24px] z-10 px-8 border-b-black border-b-2 flex items-center">
            <button onClick={() => setShowSideBar(false)}>
              <X />
            </button>
          </div>
          <div className="py-[24px] px-8 flex items-center relative after:content-[''] after:bg-black after:h-[2px] after:w-[95%] after:bottom-[0] after:left-[0] after:absolute">
            <Link className="group " to="/shop">
              <button className="">All</button>
            </Link>
          </div>
          <div className="py-[24px] px-8 flex items-center relative after:content-[''] after:bg-black after:h-[2px] after:w-[90%] after:bottom-[0] after:left-[0] after:absolute">
            <Link className="group " to="/shop">
              <button className=" ">Category</button>
            </Link>
          </div>
          <div className="py-[24px] px-8 flex items-center relative after:content-[''] after:bg-black after:h-[2px] after:w-[85%] after:bottom-[0] after:left-[0] after:absolute">
            <Link className="group " to="/shop">
              <button className=" ">Contact us</button>
            </Link>
          </div>
        </div>
      </div>
      <nav
        className={`w-full z-[100] fixed bg-white shadow transition-transform duration-300 ${
          showNavbar ? "translate-y-[0]" : "translate-y-[-100px]"
        }`}
      >
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
              <Link className="cursor-pointer" to="/">
                <h1 className="font-bold text-2xl ">ADIGA</h1>
              </Link>
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
              <div className="relative text-center">
                {cartItems.length > 0 ? (
                  <span className="absolute h-4 w-4 text-[10px] font-semibold bg-black text-white rounded-full top-[-4px] right-[-8px]">
                    {cartItems.length}
                  </span>
                ) : null}
                <Link to="/cart">
                  <ShoppingCart className="lg:w-[40px] lg:h-[40px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
