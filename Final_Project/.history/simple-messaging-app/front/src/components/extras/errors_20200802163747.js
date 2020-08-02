import React, { useContext } from "react";
import EaContext from "../../context/erroralert/eaContext";

const Errors = () => {
  const alertcontext = useContext(EaContext);

  return alertcontext.alert.map((alert) => (
    // <div key={alert.id}>{alert.msg}</div>
  ));
};

export default Errors;
