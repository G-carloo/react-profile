import React from "react";
import Contacts from "../contacts/Contacts";
import Edit from "../contacts/Edit";
import Filter from "../contacts/Filter";

const Contactsdisplay = () => {
  return (
    <div className='md' id='Contacts'>
      <div>
        <h6>
          <Edit />
        </h6>
        <h6>
          <Filter />
          <Contacts />
        </h6>
      </div>
    </div>
  );
};

export default Contactsdisplay;
