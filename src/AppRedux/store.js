import { configureStore } from '@reduxjs/toolkit'
import common from "../AppRedux/CommonSlice";
import Catagories from "../components/Content/caragorySlice";
import Product from "../components/ProductItem/ProductSlice";
import Cart from "../components/ListItemCart/cartSlice";

export const store = configureStore({
  reducer: {
    common,
    Catagories,
    Product,
    Cart
  },
})