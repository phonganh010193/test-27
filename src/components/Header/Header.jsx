import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCartList } from "../ListItemCart/cartSlice";
import "./Header.css";

const Header = (props) => {
  const dispatch = useDispatch();
  const {catagories} = props;
  const listCategory = catagories;
  const cartList = useSelector(({Cart}) => Cart.cartlist)
  console.log('cartlisr from header', cartList);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCartList());
  }, [dispatch])

  const getInfoSearch = () => {
    console.log('search', search);
  }
  const numberCart = cartList.length;
  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="l-nabar-header">
          <p>Chat with us</p>
          <p>+420 336 775 664</p>
          <p>info@freshnesecom.com</p>
        </div>
        <div className="r-navbar-header">
          <p>Blog</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>
      </header>

      <div className="nav-head-content">
        <Link to="/">
          <img src="/icons/Freshnesecom.svg" alt="Freshnesecom" />
        </Link>

        <div className="nav-h-search">
          <div className="n-wrap__logo">
            <div className="nav-h-logo">
              <img src="/icons/all_categories.svg" alt="all_categories" />
              <img src="/icons/down_green_arrow.svg" alt="down_green_arrow" />
            </div>
          </div>
          <input 
            type="text" 
            placeholder="Search Products, categories ..." 
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            onKeyDown={(event) => {
              if(event.key === "Enter") {
                getInfoSearch()
              }
            }}
          />
          <img src="/icons/Layer.svg" alt="Layer" className="nav_search_icon" />
        </div>

        <div className="nav-head-user">
          <img src="/icons/ic-actions-user.svg" alt="ic-actions-user" />
          <Link to="/cart">
            <img
              src="/icons/ic-ecommerce-basket.svg"
              alt="ic-ecommerce-basket"
            />
            <span style={{color: "red", fontWeight: "bold"}}>{numberCart}</span>
          </Link>
        </div>
      </div>

      <div className="nav-head-category">
        <ul className="nav__list-category">
          {listCategory.map((item) => (
            <li>
              {item.catagoriesName}
              <img
                src="/icons/down_green_arrow.svg"
                alt="down_green_arrow"
              />{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
