import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
const Home = () => {
  const items = useSelector((state) => state.products.items);

  return (
    <div>
      <section className="max-w-7xl mx-auto py-24 px-4 lg:px-8">
        <div className="">
          <div className="bg-black rounded-lg text-white px-10 py-32 md:py-48">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              ADIGA eSHOP
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              High-performance apparel for the modern lifestyle. Shop our latest
              collection.
            </p>
            <Link to="/shop">
              <button className="rounded-[20px] font-bold bg-white text-black px-7 py-3 hover:bg-gray-300 duration-300 transition-colors cursor-pointer ">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-24 px-4 lg:px-8">
        <div className="mb-9">
          <h1 className="text-2xl font-bold">Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {items && items.length && items.length > 0
            ? items.map((item, i) => {
                if (i < 6) {
                  return (
                    <div className="bg-gray-100 hover:bg-gray-200 px-5 py-5 rounded-lg">
                      <Link to={`product/${item.id}`}>
                        <div className="aspect-square bg-black rounded-lg mb-3">
                          <img src={item.images[0]} alt="" />
                        </div>
                        <div>
                          <h1 className="truncate text-ellipsis w-[180px] font-semibold">
                            {item.title}
                          </h1>
                          <p className="text-gray-600 text-[15px] mb-1">
                            {item.category}
                          </p>
                          <p className="font-semibold">${item.price}</p>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })
            : null}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden">
            <div className="bg-black text-white py-24 px-8 rounded-lg ">
              <h1 className="font-bold text-3xl mb-3">Makeup</h1>
              <p className="text-gray-300 mb-6">Flawless Beauty Revolution</p>
              <p className="underline">Shop Makeups.</p>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="bg-black text-white py-24 px-8 rounded-lg  ">
              <h1 className="font-bold text-3xl mb-3">Perfume</h1>
              <p className="text-gray-300 mb-6">
                Unforgettable Scent Experience{" "}
              </p>
              <p className="underline">Shop Perfumes.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className=" border-t-gray-300 border-t mt-20">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center">
            <div className="grid gap-5 md:gap-20 md:grid-cols-4 ">
              <div>
                <h1 className="font-semibold mb-3">ADIGA</h1>
                <p className="text-gray-500 text-[15px]">
                  A simple app for your needs
                </p>
              </div>
              <div>
                <h1 className="font-semibold mb-3">Shop</h1>
                <ul className="grid gap-2">
                  <li className="text-gray-500 text-[15px]">All Products</li>
                  <li className="text-gray-500 text-[15px]">Apparel</li>
                  <li className="text-gray-500 text-[15px]">Accessories</li>
                </ul>
              </div>
              <div>
                <h1 className="font-semibold mb-3">Company</h1>
                <ul className="grid gap-2">
                  <li className="text-gray-500 text-[15px]">About</li>
                  <li className="text-gray-500 text-[15px]">Contact</li>
                  <li className="text-gray-500 text-[15px]">Careers</li>
                </ul>
              </div>
              <div>
                <h1 className="font-semibold mb-3">Legal</h1>
                <ul className="grid gap-2">
                  <li className="text-gray-500 text-[15px]">Privacy</li>
                  <li className="text-gray-500 text-[15px]">Terms</li>
                  <li className="text-gray-500 text-[15px]">Returns</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-7xl border-t-gray-300 border-t mt-10 px-4 pt-10 flex justify-center items-center">
            <p className="text-gray-500 text-[15px]">
              @ 2025 ADIGA, inc. No rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
