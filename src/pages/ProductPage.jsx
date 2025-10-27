import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//  var twoSum = function (nums, target) {
//     let firstSol = nums.map((item, index) => {
//       if (item - target <= 0) {
//         if (nums.findIndex((num) => num + item === target) !== -1) {
//           return [index, nums.findIndex((num) => num + item === target)];
//         }
//       }
//     });
//     return firstSol[0];
//   };
//   console.log(twoSum([0, 7, 11, 0], 0));

const ProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [imageIndex, setImageIndex] = useState(0);
  async function fetchProductInfo() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const fetchData = await response.json();

      if (fetchData) {
        setLoading(false);
        setData(fetchData);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductInfo();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <section className="py-20 px-10 ">
            <div className="flex justify-center mx-auto h-[80vh] aspect-square px-10 py-10 rounded-2xl">
              <div className="w-[50vw] ">
                <img
                  className="h-full aspect-square  bg-black px-10"
                  src={data.images[imageIndex]}
                  alt=""
                />
              </div>
              <div className="h-full  flex flex-col gap-5  ">
                {data.images.length > 1
                  ? data.images.map((item) => (
                      <img
                        className={`h-[33%] px-5 bg-gray-200 rounded-xl `}
                        src={item}
                      />
                    ))
                  : null}
              </div>
            </div>
          </section>
          <section className="py-20 px-20">
            <h1>{data.title}</h1>
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default ProductPage;
