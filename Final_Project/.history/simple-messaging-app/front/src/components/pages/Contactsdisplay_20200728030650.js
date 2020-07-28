import React from "react";
import Contacts from "../contacts/Contacts";
import Edit from "../contacts/Add, Edit";

const Contactsdisplay = () => {
  return (
    <div className='md' id='Contacts'>
      <div>
        <h6>
          <Contacts />
        </h6>
        <h6>
          <Edit />
        </h6>
      </div>
    </div>
  );
};

export default Contactsdisplay;
