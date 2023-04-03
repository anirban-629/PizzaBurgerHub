import React from "react";

const NavbarCart = (props) => {
  return (
    <div className="cart-item">
      <i className="fas fa-times"></i>
      <img src={props.order_item} alt="menu" />
      <div className="content">
        <h3>cart item 04</h3>
        <div className="price">$12.99</div>
      </div>
    </div>
  );
};
export default NavbarCart;
