import React from "react";
import Button from "../components/sub-components/Button";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Menu from "./Menu";
import Product from "./Product";
import Review from "./Review";

const Home = () => {
  document.title = "NS";
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>Fast Food Delivery</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            perferendis obcaecati iste voluptatum, quaerat nihil magnam numquam
            sint?{" "}
          </p>
          <Button data={{ link: "/", classname: "btn", text: "order now" }} />
        </div>
      </section>
      <Menu />
      <Product />
      <About />
      <Review />
      <Contact />
      <Blog />
    </>
  );
};

export default Home;
