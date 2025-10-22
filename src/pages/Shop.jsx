import React from "react";
import { useSelector } from "react-redux";
import ProductElement from "../Components/ProductElement/ProductElement";
import { theData } from "../../theProducts";

const Shop = () => {
  const items = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);

  // console.log(Math.round(items[0].id));
  console.log(cartItems);

  let productsTest = [
    { name: "Phon", id: 1 },
    { name: "MakeUp", id: 2 },
    { name: "Slave", id: 3 },
    { name: "Slave2", id: 4 },
    { name: "Slave3", id: 5 },
    { name: "Slave4", id: 6 },
  ];

  let theProduct = { name: "Slave4", id: 22 };

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
          {items && items.length && items.length > 0 ? (
            items.map((item) => <ProductElement productInfo={item} />)
          ) : (
            <span>Loading...</span>
          )}
        </div>
      ) : (
        <h1>Sorry, no products to show...</h1>
      )}
    </div>
  );
};

export default Shop;
