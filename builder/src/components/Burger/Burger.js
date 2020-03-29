import React from "react";
import Ingredients from "./Ingredients";
import classes from "./burger.css";

const Burger = props => {
  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      <Ingredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
