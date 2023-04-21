import React from "react";
import { burger4, burger5, burger6, pizza3 } from "./assets";
import { Footer, Navbar } from "./components";
import { Home, About, Contact, Blog, Menu, Product, Review } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Page = () => {
  const order_imgs = [
    { img: pizza3 },
    { img: burger4 },
    { img: burger5 },
    { img: burger6 },
  ];

  return (
    <BrowserRouter>
      <Navbar data={order_imgs} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact title="NS | Contact" />} />
        <Route path="/about" element={<About title="NS | About" />} />
        <Route path="/menu" element={<Menu title="NS | Menu" />} />
        <Route path="/blog" element={<Blog title="NS | Blog" />} />
        <Route path="/review" element={<Review title="NS | Review" />} />
        <Route path="/products" element={<Product title="NS | Product" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Page;
