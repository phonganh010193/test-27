import React  from "react";

import "./CartItem.css";

const CartItem = (props) => {
  const {
    id,
    title,
    image,
    price,
    deleteCart
  } =props;
  
  return (
    <div className="CartItem_container">
      <div className="cart-item">
        <img src={image} alt="" />
        <div className="cart-product-item-infor">
          <h3>{title}</h3>
          <div>
            <span>Farm:</span>
            <p>Tharamis Farm</p>
          </div>
          <div>
            <span>Freshness:</span>
            <p>1 day old</p>
          </div>
        </div>
      </div>

      <div className="cart-item">
        <div className="cart-bonous-item">
          <div>
            <img src="/icons/wishlist.svg" alt="wishlist" />
            <span>Wishlist</span>
          </div>
          <div>
            <img src="/icons/compare.svg" alt="compare" />
            <span>Compare</span>
          </div>
          <div>
            <img src="/icons/remove.svg" alt="compare" />
            <span onClick={() => deleteCart(id)}>Remove</span>
          </div>
        </div>
        <div className="c-product-price-container">
          <img src="/icons/rate-review.svg" alt="rate-review" />
          <div className="cart-product-price">
            <div className="c-product-price">
              <h2>{price} USD</h2>
              <h3>48.56 USD</h3>
            </div>
            <div className="c-product-unit">
              <input type="text" placeholder="1pcs" />
              <div>
                Pcs{" "}
                <img src="/icons/down_green_arrow.svg" alt="down_green_arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
