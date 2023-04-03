import React from "react";
import Button from "./Button";

const MenuCard = (props) => {
  const { order_img, title, quantity, latest_price, price } = props.data;
  return (
    <div className="box">
      <div className="box-head">
        <img src={order_img} alt="" />
        <span className="menu-category">{title}</span>
        <h3>{quantity}</h3>
        <div className="price">
          {latest_price === "" ? price : latest_price}
          <span>{price === "" ? "" : latest_price === "" ? "" : price}</span>
        </div>
      </div>
      <div className="box-bottom">
        <Button data={{ link: "/", classname: "btn", text: "add to cart" }} />
      </div>
    </div>
  );
};

export default MenuCard;
