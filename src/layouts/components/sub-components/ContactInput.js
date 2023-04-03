import React from "react";

const ContactInput = (props) => {
  const { icon_fa, type, placeholder } = props;
  return (
    <>
      <div className="inputBox">
        <i className={icon_fa}></i>
        <input type={type} placeholder={placeholder} />
      </div>
    </>
  );
};

export default ContactInput;
