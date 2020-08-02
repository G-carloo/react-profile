import React, { useContext } from "react";
import EaContext from "../../context/erroralert/eaContext";

const Errors = () => {
  const alertcontext = useContext(AlertContext);

  return alertcontext.alerts.map((alert) => (
    <div key={alert.id}>{alert.msg}</div>
  ));
};

export default Errors;
