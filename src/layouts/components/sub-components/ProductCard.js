import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { title, heading, img, price, energy } = props.data;
  return (
    <div className="box">
      <div className="box-head">
        <span className="title">{title}</span>
        <Link to="/" className="name">
          {heading}
        </Link>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="box-bottom">
        <div className="info">
          <b className="price">{price}</b>
          <span className="amount">{energy}</span>
        </div>
        <div className="product-btn">
          <Link to="/">
            <i className="fas fa-plus"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
