import React from "react";
import classes from "Modal.module.css";

modalHandler = (e) => {
  e.preventDefault(); //i added this to prevent the default behavior
  this.setState({
    modalToggle: true,
  });
};

const modal = (props) => {
  return <div className={classes.Modal}>{props.children}</div>;
};

export default modal;
