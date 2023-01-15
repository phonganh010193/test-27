import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart, fetchSuccess } from "../../AppRedux/CommonSlice";
import httpClientCart from "../../utils/cartApi";
import CartItem from "../CartItem/CartItem";
import { fetchCartList } from "./cartSlice";
import "./ListItemCart.css";

const ListItemCart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(({Cart}) => Cart.cartlist)
  console.log('cart from cart list', cartList);

  useEffect(() => {
    dispatch(fetchCartList());
  }, [dispatch]);

  const deleteCart = async(id) => {
    console.log('id', id);
    try {
      await dispatch(fetchStart());
      await httpClientCart.delete('cart/' + id);
      await dispatch(fetchCartList());
      await dispatch(fetchSuccess());
    } catch (error) {
      await dispatch(fetchSuccess());
    }
  }
  
  const sumPrice = cartList.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.price),
    0
  );

  console.log('sumPrice', sumPrice);
  return (
    <div className="m-list-cart-container">
      <h1>Order Summary</h1>
      <p>
        Price can change depending on shipping method and taxes of your state.
      </p>

      <div className="cart-item-container">
        {cartList &&
          cartList.map((item, index) => {
            return (
              <div key={item.id}>
                <CartItem 
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.price}
                  deleteCart={() => deleteCart(item.id)}
                />
              </div>
              
            )
          })
        }
      </div>

      <div className="cart-billing-container">
        <div className="cart-subtal">
          <div>
            <p>Subtotal</p>
            <p>{sumPrice} USD</p>
          </div>
          <div>
            <p>Tax</p>
            <p>17% 16.53 USD</p>
          </div>

          <div>
            <p>Shipping</p>
            <p>0 USD</p>
          </div>
        </div>
        <div className="cart-apply-code">
          <input type="text" placeholder="Apply promo code" />
          <img src="/icons/Apply _now.svg" alt="Apply _now" />
        </div>

        <div className="cart-total-order">
          <div>
            <h3>Total Order</h3>
            <p>Guaranteed delivery day: June 12, 2020</p>
          </div>
          <h1>89.84 USD</h1>
        </div>
      </div>
    </div>
  );
};

export default ListItemCart;
