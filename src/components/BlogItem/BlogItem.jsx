import React from "react";
import "./BlogItem.css";

const BlogItem = (props) => {
  const {name, title} = props;
  return (
    <div className="m_slick-blog">
      <p>
        {name}
      </p>
      <span>{title}</span>
      <img src="/icons/blog_icon_user.svg" alt="blog_icon_user" />
    </div>
  );
};

export default BlogItem;
