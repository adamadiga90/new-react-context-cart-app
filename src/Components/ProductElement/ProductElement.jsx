import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../feature/cart/cartSlice";

const ProductElement = ({ productInfo }) => {
  const cartItems = useSelector((state) => state.cart.items);

  let productsTest = [
    { name: "Phon", id: 1 },
    { name: "MakeUp", id: 2 },
    { name: "Slave", id: 3 },
    { name: "Slave2", id: 4 },
    { name: "Slave3", id: 5 },
    { name: "Slave4", id: 6 },
  ];

  // let theProduct = { name: "Slave4", id: 6 };

  const stars = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  return (
    <div className="border-[3px] border-black  ">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="w-35 aspect-square bg-black ">
            {/* <img src={productInfo.images[0]} alt="" /> */}
          </div>
          <div className="py-2">
            <h1 className="font-semibold text-[17px]">
              {productInfo.title.split(" ").splice(0, 2).join(" ")}
            </h1>
            <p className="text-[15px] text-gray-600 mt-2">
              {productInfo.category}
            </p>
            <div className="flex mt-2">
              {stars.map((item) =>
                item <= Math.round(productInfo.rating) ? (
                  <Star key={item} size={15} fill="black" />
                ) : (
                  <Star key={item} size={15} />
                )
              )}
            </div>
            <h2 className="font-semibold text-[16px] mt-3">
              ${productInfo.price}
            </h2>
          </div>
        </div>
        <div className="px-2 flex items-center justify-center cursor-pointer">
          <button
            onClick={() => dispatch(addItem(productInfo))}
            className="bg-black text-white font-semibold px-2 py-2 transition-all duration-300 hover:bg-white hover:text-black border-3 hover:border-black hover:px-1 hover:py-1 "
          >
            Add to cart
            {cartItems.length > 0
              ? cartItems.map((item) =>
                  item.id === productInfo.id
                    ? "Remove form Cart"
                    : "Add to cart"
                )
              : null}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
