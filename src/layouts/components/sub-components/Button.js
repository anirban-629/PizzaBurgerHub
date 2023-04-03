import React from "react";

const Button = (props) => {
  const { link, classname, text, type } = props.data;

  const renderButton = () => {
    if (type === "submit") {
      return <input type={type} className={`${classname}`} value={text} />;
    }
    return (
      <a href={link} className={`${classname}`}>
        {text}
      </a>
    );
  };

  return renderButton();
};

Button.defaultProps = {
  link: "/",
  type: "",
  classname: "btn",
  text: "___",
};

export default Button;
