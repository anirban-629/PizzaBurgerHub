import React from "react";
import { Link } from "react-router-dom";

const PageLink = (props) => {
  const { activePage, link, className, page } = props;
  return (
    <Link
      to={link}
      onClick={() => {
        activePage(link);
      }}
      className={className ? className : ""}
    >
      {page}
    </Link>
  );
};

export default PageLink;
