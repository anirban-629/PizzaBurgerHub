import React, { useState } from "react";
import { logo } from "../assets";
import PageLink from "./sub-components/PageLink";
import NavbarCart from "./sub-components/NavbarCart";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const cart_items = props.data;
  const [activePage, setActivePage] = useState("");
  const [activeCartItems, setActiveCartItems] = useState("");
  const [activeSearchBtn, setActiveSearchBtn] = useState("");
  const page_links = [
    {
      link: "",
      className: activePage === "" ? "active" : "",
      page: "Home",
    },
    {
      link: "about",
      className: activePage === "about" ? "active" : "",
      page: "About",
    },
    {
      link: "menu",
      className: activePage === "menu" ? "active" : "",
      page: "Menu",
    },
    {
      link: "products",
      className: activePage === "products" ? "active" : "",
      page: "Products",
    },
    {
      link: "review",
      className: activePage === "review" ? "active" : "",
      page: "Review",
    },
    {
      link: "contact",
      className: activePage === "contact" ? "active" : "",
      page: "Contact",
    },
    {
      link: "blog",
      className: activePage === "blog" ? "active" : "",
      page: "Blog",
    },
  ];

  const set_active_page = (page) => {
    setActivePage(String(page));
  };

  const iterate = {
    page_links: page_links.map((ele, index) => {
      return (
        <PageLink
          activePage={set_active_page}
          key={index}
          link={ele.link}
          className={ele.className}
          page={ele.page}
        />
      );
    }),
    cart_items: cart_items.map((ele, index) => {
      return <NavbarCart key={index} order_item={ele.img} />;
    }),
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="navbar">{iterate.page_links}</nav>
        <div className="buttons">
          <button id="search-btn">
            <i
              className="fas fa-search"
              onClick={() => {
                if (activeSearchBtn === "active") {
                  setActiveSearchBtn("");
                } else {
                  setActiveSearchBtn("active");
                }
              }}
            ></i>
          </button>
          <button id="cart-btn">
            <i
              className="fas fa-shopping-cart"
              onClick={() => {
                if (activeCartItems === "active") {
                  setActiveCartItems("");
                } else {
                  setActiveCartItems("active");
                }
              }}
            ></i>
          </button>
          <button id="menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className={`search-form ${activeSearchBtn}`}>
          <input
            type="text"
            className="search-input"
            id="search-box"
            placeholder="Search"
          />
          <i className="fas fa-search "></i>
        </div>

        <div className={`cart-items-container ${activeCartItems}`}>
          {iterate.cart_items}
          <Link to="/" className="btn">
            check out{" "}
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
