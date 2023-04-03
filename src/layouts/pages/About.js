import React from "react";
import { burger9 } from "../assets";
import AboutText from "../components/sub-components/AboutText";
import Button from "../components/sub-components/Button";
import PageHeading from "../components/sub-components/PageHeading";

const About = () => {
  document.title = "NS | About";
  const texts = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.",
  ];

  const iterate = {
    texts: texts.map((ele, index) => {
      return <AboutText key={index} text={ele} />;
    }),
  };

  return (
    <>
      <section className="about" id="about">
        <PageHeading first="about" last="us" />

        <div className="row">
          <div className="image">
            <img src={burger9} alt="" />
          </div>
          <div className="content">
            <h3>What is the secret receipe of our burgers</h3>
            <div className="paragraph">{iterate.texts}</div>
            <Button
              data={{ link: "/", classname: "btn", text: "Learn More" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
