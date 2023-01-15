import React, { useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import NavLeftContent from "../NavLeftContent/NavLeftContent";
import ProductItem from "../ProductItem/ProductItem";
import "./HomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../ProductItem/ProductSlice";
import { fetchBlogList } from "../ListItemCart/cartSlice";

const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <img src="/icons/slick_prev_arrow.svg" alt="slick_prev_arrow" />,
    nextArrow: <img src="/icons/slick_next_arrow.svg" alt="slick_next_arrow" />,
  };
  const dispatch = useDispatch();
  const productList = useSelector(({Product}) => Product.productlist)
  const blogList = useSelector(({Cart}) => Cart.blog)
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchBlogList());
  }, [dispatch]);
  return (
    <>
      <>
        <div className="m-banner">
          <NavLeftContent />
          <div className="list-banner">
            <img src="/images/Banner.png" alt="banner" />
            <img src="/images/Banner.png" alt="banner" />
            {/* <img src="/images/Banner.png" alt="banner" /> */}
          </div>
        </div>
        <div className="m-list-product">
          <div className="wrap__list-nav-content">
            <NavLeftContent />
            <NavLeftContent />
          </div>
          <div className="list-product">
            {productList && 
              productList.map((item, index) => {
                return (
                  <div key={item.id}>
                    <ProductItem
                      title={item.title}
                      image={item.image}
                      description={item.description}
                      price={item.price}
                    />
                  </div>
                )
              })
            }
            
          </div>
        </div>
        <div>
          <div className="m-list-blog">
            <h1>Our customers says</h1>
            <button>
              Button{" "}
              <img src="/icons/black_right_arrow.svg" alt="black_right_arrow" />
            </button>
          </div>
          <div className="slick-list-blog">
            <Slider {...settings} className="slick_carousel">
              {blogList && blogList.map((item, index) => {
                return (
                  <div key={item.id}>
                    <BlogItem 
                      name={item.name}
                      title={item.title}
                    />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
        <div>
          <div className="m-list-blog">
            <h1>Section Headline</h1>
            <button>
              Button{" "}
              <img src="/icons/black_right_arrow.svg" alt="black_right_arrow" />
            </button>
          </div>
          <div className="m-section-headline">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </>
    </>
  );
};

export default HomePage;
