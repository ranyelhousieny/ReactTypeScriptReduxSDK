import React from "react";
//import PropTypes from "prop-types";
import Classes from "./ingredients.css";

const Ingredients = props => {
  let ingredients = <div className={Classes.BreadBottom}></div>;
  switch (props.type) {
    case "bread-bottom":
      ingredients = <div className={Classes.BreadBottom}></div>;
      break;
    default:
      ingredients = <div className={Classes.BreadBottom}></div>;
  }
  return ingredients;
};

//Ingredients.propTypes = {};

export default Ingredients;
