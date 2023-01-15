import React from "react";
import { useDispatch } from "react-redux";
import { fetchError, fetchStart, fetchSuccess } from "../../AppRedux/CommonSlice";
import httpClientCart from "../../utils/cartApi";
import { fetchCartList } from "../ListItemCart/cartSlice";
import "./ProductItem.css";

const ProductItem = (props) => {
  const {
    title,
    image,
    description,
    price
  } = props;
  const value = {
    title:title,
    image:image,
    price:price
  }
  const dispatch = useDispatch();
  const updateCart = async (value) => {
    console.log('value', value)
    try {
      await dispatch(fetchStart());
      await httpClientCart.post('cart', value);
      await dispatch(fetchCartList());
      await dispatch(fetchSuccess());
    } catch (error) {
      await dispatch(fetchError(error))
    }
  }
  return (
    <div className="product-item">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="p__infor">
        <h2>{price} USD</h2>
        <button onClick={() => updateCart(value)}>Buy now</button>
      </div>
    </div>
  );
};

export default ProductItem;
