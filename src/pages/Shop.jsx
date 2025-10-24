import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductElement from "../Components/ProductElement/ProductElement";

const Shop = () => {
  const items = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);

  // console.log(Math.round(items[0].id));
  const theHeight = window.innerHeight;
  const theHeight2 = document.documentElement.scrollHeight;
  // console.log(theHeight);
  // console.log(theHeight2 - theHeight);
  // console.log(3810);

  useEffect(() => {
    function handleScroll() {
      let theEndScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY - 100 === theEndScroll) {
        console.log(`window.scroll = ${window.scrollY}`);
        console.log(`theEndScroll = ${theEndScroll}`);

        console.log("HELLO");
      }
    }

    document.addEventListener("scroll", handleScroll);
    return () => {
      return document.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <div>
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-black rounded-xl py-32 px-10">
          <h1 className="text-4xl text-white font-bold mb-2">Our Products</h1>
          <p className="text-gray-300">
            Discover amazing deals on quality products
          </p>
        </div>
      </section>
      {/* {items && items.length && items.length > 0 ? ( */}
      {items && items.length && items.length > 0 ? (
        <div className="py-24 px-4 lg:px-8 max-w-7xl mx-auto  rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 gap-4">
            {items && items.length && items.length > 0 ? (
              items.map((item) => <ProductElement productInfo={item} />)
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
      ) : (
        <h1>Sorry, no products to show...</h1>
      )}
    </div>
  );
};

export default Shop;
