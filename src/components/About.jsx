import React from "react";
// import "./About.scss";
const AboutMe = ({ hero }) => {
  return (
    <div className="">
    <h3>Intereses</h3>
      {" "}
      {hero.map((item) => {
        return (
          <div className="about" key={JSON.stringify(item)}>
            {" "}
            <p> {item.info}</p>{" "}
          </div>
        );
      })}{" "}
    </div>
  );
};
export default AboutMe;