import React from "react";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className='collection-item'>
      <div>
        <a href=''></a>
      </div>
    </li>
  );
};

LogItem.pres = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
