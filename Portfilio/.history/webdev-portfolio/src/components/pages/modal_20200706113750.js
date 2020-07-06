import React from "react";
import classes from "App.css";

const modalHandler = (e) => {
  e.preventDefault(); //i added this to prevent the default behavior
  this.setState({
    modalToggle: true,
  });
};

const modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? 1 : 0,
      }}
    >
      {props.children}
    </div>
  );
};

export default modal;
