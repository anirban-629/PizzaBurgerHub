import React from "react";

const PageHeading = (props) => {
  return (
    <h1 className="heading">
      {props.first} <span>{props.last}</span>{" "}
    </h1>
  );
};

export default PageHeading;
