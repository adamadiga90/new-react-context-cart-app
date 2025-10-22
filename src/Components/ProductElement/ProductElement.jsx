import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../feature/cart/cartSlice";

const ProductElement = ({ productInfo }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    if (cartItems.length > 0) {
      if (cartItems.some((item) => item.id === productInfo.id)) {
        setInCart(true);
      } else {
        setInCart(false);
      }
    } else {
      setInCart(false);
    }
  }, [cartItems]);

  const stars = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  return (
    <div className="border-[3px] border-black  ">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="w-30 aspect-square bg-black ">
            <img src={productInfo.images[0]} alt="" />
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
          {!inCart ? (
            <button
              onClick={() => dispatch(addItem(productInfo))}
              className="bg-black text-white font-semibold px-2 py-2 transition-all duration-300 hover:bg-white hover:text-black border-3 hover:border-black hover:px-1 hover:py-1 "
            >
              Add to cart
            </button>
          ) : (
            <button
              onClick={() => dispatch(removeItem(productInfo))}
              className="bg-black text-white font-semibold px-2 py-2 transition-all duration-300 hover:bg-white hover:text-black border-3 hover:border-black hover:px-1 hover:py-1 "
            >
              Remove From Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
