import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentImg, setCurrentImg] = useState(0);
  const [imgLoading, setImgLoading] = useState(false);
  const dispatch = useDispatch();
  const cartMenu = useSelector((state) => state.cart.cartMenu);

  const isInCart = cartMenu.some((item) => item.id === product.id);

  const { id } = useParams();

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setProduct(data);

        setCurrentImg(0);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const hasImg = product.images && product.images.length > 0;
  const fallbackImage =
    "https://via.placeholder.com/300?text=No+Image+Available";

  function handleClick(index) {
    setCurrentImg(index);
  }

  function handleLeft() {
    setCurrentImg((prevCurrent) =>
      prevCurrent === 0 ? product.images.length - 1 : prevCurrent - 1
    );
  }

  function handleRight() {
    setCurrentImg((prevCurrent) =>
      prevCurrent === product.images.length - 1 ? 0 : prevCurrent + 1
    );
  }

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="product-page-container">
      <div className="images-container">
        <div onClick={handleLeft} className="arrow left-arrow">
          <img
            src="https://img.icons8.com/?size=100&id=yuV1lR4yTlZo&format=png&color=131a85cc"
            alt=""
          />
        </div>
        <div onClick={handleRight} className="arrow right-arrow">
          <img
            src="https://img.icons8.com/?size=100&id=yuV1lR4yTlZo&format=png&color=131a85cc"
            alt=""
          />
        </div>
        <img
          className="the-img"
          src={hasImg ? product.images[currentImg] : fallbackImage}
          alt=""
        />
        <div className="dots-container">
          {hasImg
            ? product.images.map((dot, index) => (
                <span
                  onClick={() => handleClick(index)}
                  className={`dot ${index === currentImg ? `active` : ``} `}
                  key={index}
                ></span>
              ))
            : null}
        </div>
      </div>
      <div className="info-container">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <div className="price-and-button">
          <p className="price">price: {product.price}$</p>
          <button
            onClick={() =>
              isInCart
                ? dispatch(removeFromCart({ id: product.id }))
                : dispatch(addToCart({ product: product, id: product.id }))
            }
            className="add-to-cart"
          >
            <span>{!isInCart ? `Add To Cart` : `Remove From Cart`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
