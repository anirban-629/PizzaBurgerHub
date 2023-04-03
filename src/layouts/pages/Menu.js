import React from "react";
import { burger4, burger5, pizza3, pizza4 } from "../assets";
import MenuCard from "../components/sub-components/MenuCard";
import PageHeading from "../components/sub-components/PageHeading";

const Menu = () => {
  document.title = "NS | Menu";
  const order_items = [
    {
      order_img: pizza4,
      title: "Pizza",
      quantity: "6 Mini Pizzas",
      latest_price: "$104.99",
      price: "$119.99",
    },
    {
      order_img: burger4,
      title: "Burger",
      quantity: "5 Mini Burgers",
      latest_price: "$99.99",
      price: "$105.99",
    },
    {
      order_img: pizza3,
      title: "Pizza",
      quantity: "2 Mixed Pizzas",
      latest_price: "$49.99",
      price: "$59.99",
    },
    {
      order_img: burger5,
      title: "Burger",
      quantity: "3 Meatball Burgers",
      latest_price: "$79.99",
      price: "$99.99",
    },
  ];

  const iterate = {
    order_items: order_items.map((ele, index) => {
      const { order_img, title, quantity, latest_price, price } = ele;

      return (
        <MenuCard
          key={index}
          data={{ order_img, title, quantity, latest_price, price }}
        />
      );
    }),
  };

  return (
    <>
      <section className="menu" id="menu">
        <PageHeading first="our" last="menu" />
        <div className="box-container">{iterate.order_items}</div>
      </section>
    </>
  );
};

export default Menu;
