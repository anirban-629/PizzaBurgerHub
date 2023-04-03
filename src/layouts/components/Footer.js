import React from "react";
import PageLink from "./sub-components/PageLink";
import SocialLink from "./sub-components/SocialLink";

const Footer = (props) => {
  const page_links = [
    { link: "/", page: "home" },
    { link: "/", page: "about" },
    { link: "/", page: "menu" },
    { link: "/", page: "products" },
    { link: "/", page: "review" },
    { link: "/", page: "contact" },
    { link: "/", page: "blog" },
  ];

  const social_links = [
    { link: "/", icon_fa: "fab fa-facebook" },
    { link: "/", icon_fa: "fab fa-instagram" },
    { link: "/", icon_fa: "fab fa-linkedin" },
    { link: "/", icon_fa: "fab fa-pinterest" },
  ];

  const iterate = {
    social_links: social_links.map((ele) => {
      return (
        <SocialLink
          key={(Math.random() + 1).toString(36).substring(7)}
          link={ele.link}
          icon_fa={ele.icon_fa}
        />
      );
    }),
    page_links: page_links.map((ele) => {
      return (
        <PageLink
          key={(Math.random() + 1).toString(36).substring(7)}
          link={ele.link}
          page={ele.page}
        />
      );
    }),
  };

  return (
    <>
      <section className="footer">
        <div className="search">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="btn btn-primary">search</button>
        </div>

        <div className="share">{iterate.social_links}</div>
        <div className="links">{iterate.page_links}</div>

        <div className="credit">
          created by <span>Nizami Sevindi</span> | all rights reserved!
        </div>
      </section>
    </>
  );
};

export default Footer;
