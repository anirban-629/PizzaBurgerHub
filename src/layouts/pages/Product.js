import React from "react";
import { burger6, burger7, burger8 } from "../assets";
import { ProductCard } from "../components";
import PageHeading from "../components/sub-components/PageHeading";

const Product = () => {
  document.title = "NS | Product";
  const product_items = [
    {
      title: "mini burger",
      heading: "Bacon Burger",
      img: burger8,
      price: "$6.00",
      energy: "110gr / 300 Cal",
    },
    {
      title: "cheese burger",
      heading: "cheese Burger",
      img: burger6,
      price: "$12.00",
      energy: "140gr / 2500 Cal",
    },
    {
      title: "Double burger",
      heading: "Double burger",
      img: burger7,
      price: "$24.00",
      energy: "440gr / 600 Cal",
    },
  ];
  const iterate = {
    product_items: product_items.map((ele, index) => {
      const { title, heading, img, price, energy } = ele;
      return (
        <ProductCard
          key={index}
          data={{ title, heading, img, price, energy }}
        />
      );
    }),
  };
  return (
    <>
      <section className="products" id="products">
        <PageHeading first="our" last="products" />
        <div className="box-container">{iterate.product_items}</div>
      </section>
    </>
  );
};

export default Product;
