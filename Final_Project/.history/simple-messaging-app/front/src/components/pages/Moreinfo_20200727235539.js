import React from "react";
import { Link } from "react-router-dom";

const Moreinfo = () => {
  return (
    <div className='md'>
      <h2>More Information</h2>
      <p>
        Read more at{" "}
        <Link to='/About' href='#About'>
          <a href='#About' />
          About
        </Link>
        <Link to='/Contacts' href='#Contacts'>
          <a href='#Contacts' />
          Contacts
        </Link>
      </p>
    </div>
  );
};

export default Moreinfo;
