import React from "react";
import { Link } from "react-router-dom";

const SocialLink = (props) => {
  return (
    <Link
      to={props.link}
      className={props.icon_fa ? props.icon_fa : "fa-solid fa-pinterest"}
    >
      {" "}
    </Link>
  );
};

export default SocialLink;
