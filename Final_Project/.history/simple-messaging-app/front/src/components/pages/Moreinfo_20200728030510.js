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
      </p>
      <p>
        View{" "}
        <Link to='/Contacts' href='#Contacts'>
          <a href='#Contacts' />
          Contacts
        </Link>
      </p>
      <p>
        {" "}
        <Link to='/Add, Edit' href='#Addoredit'>
          <a href='#Addoredit' />
          Add or edit
        </Link>
      </p>
    </div>
  );
};

export default Moreinfo;
