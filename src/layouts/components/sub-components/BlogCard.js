import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const BlogCard = (props) => {
  const { img, title, published_at, description } = props.data;

  return (
    <>
      <div className="box-full">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="content">
          <Link to="/" className="title">
            {title}
          </Link>
          <span>{published_at}</span>
          <p>{description}</p>
          <Button
            data={{
              link: "/",
              classname: "btn",
              text: "Read more...",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
