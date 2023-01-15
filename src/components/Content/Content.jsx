import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { fetchCatagories } from "./caragorySlice";
import "./Content.css";

const Content = ({ children }) => {
  const dispatch = useDispatch();
  const catagories = useSelector(({Catagories}) => Catagories.catagories);
  console.log('catagories', catagories);
  useEffect(() => {
    dispatch(fetchCatagories());
  }, [dispatch]);
  return (
    <>
      <Header catagories={catagories} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Content;
