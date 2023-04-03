import React from "react";
import { burger1, burger2, burger3 } from "../assets";
import BlogCard from "../components/sub-components/BlogCard";
import PageHeading from "../components/sub-components/PageHeading";

const Blog = () => {
  document.title = "NS | Blog";
  const blog_items = [
    {
      publish_at: "by admin / 10st may, 2020",
      title: "how to make burgers",
      img: burger1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.",
    },
    {
      publish_at: "by admin / 10st may, 2020",
      title: " how to make burgers",
      img: burger2,
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedit",
    },
    {
      publish_at: "by admin / 10st may, 2020",
      title: " how to make burgers",
      img: burger3,
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedit",
    },
  ];

  const iterate = {
    blog_items: blog_items.map((ele, index) => {
      const { publish_at, title, img, description } = ele;
      return (
        <BlogCard key={index} data={{ publish_at, title, img, description }} />
      );
    }),
  };

  return (
    <>
      <section className="blog" id="blog">
        <PageHeading first="our" last="blog" />
        <div className="box-container">{iterate.blog_items}</div>
      </section>
    </>
  );
};

export default Blog;
