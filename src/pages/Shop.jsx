import React from "react";
import { useSelector } from "react-redux";
import ProductElement from "../Components/ProductElement/ProductElement";
import { theData } from "../../theProducts";

const Shop = () => {
  const items = useSelector((state) => state.products.items);
  // console.log(Math.round(items[0].id));

  return (
    <div>
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl bg-black text-white px-10 py-32 md:py-48 rounded-lg">
          Hello from shop page
        </h1>
      </section>
      {/* {items && items.length && items.length > 0 ? ( */}
      {theData ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 gap-4">
          <ProductElement productInfo={theData.products[0]} />
          <ProductElement productInfo={theData.products[1]} />
          <ProductElement productInfo={theData.products[2]} />
          <ProductElement productInfo={theData.products[3]} />
        </div>
      ) : (
        <h1>Sorry, no products to show...</h1>
      )}
    </div>
  );
};

export default Shop;
