import React from "react";
import "./css/header.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
