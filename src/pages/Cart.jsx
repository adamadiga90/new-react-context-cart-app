import React from "react";
import { useSelector } from "react-redux";
import ProductElement from "../Components/ProductElement/ProductElement";
import { Link } from "react-router";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <section className="pb-14 pt-25 px-4 max-w-7xl mx-auto">
        <div className="py-32 md:py-48 px-10 bg-black text-white rounded-2xl">
          <h1 className="text-3xl font-bold">See your carts products</h1>
          <p className="text-xl text-gray-300 mt-[30px]">
            check you cart's products, you can remove and add new products...
          </p>
        </div>
      </section>
      <section>
        {cartItems && cartItems.length && cartItems.length > 0 ? (
          <div className="py-24 px-4 lg:px-8 max-w-7xl mx-auto  rounded-lg">
            <div className="grid grid-cols-1 px-4 gap-4">
              {cartItems.map((item) => (
                <ProductElement productInfo={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="py-15 px-4 max-w-7xl mx-auto ">
            <div className=" px-10 py-10 bg-black rounded-2xl text-white flex justify-center gap-2 items-center flex-col md:flex-row">
              <div className="text-center">
                <h1 className="text-2xl font-semibold ">
                  Sorry, no products to show...
                </h1>
              </div>
              <p className="text-xl">Go to the shop page</p>
              <Link to="/shop">
                <span className="text-xl underline font-semibold">Here</span>
              </Link>
              <p className="text-xl">and add products to buy.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
