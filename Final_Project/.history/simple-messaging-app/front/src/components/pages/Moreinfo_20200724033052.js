import React from "react";
import { Link } from "react-router-dom";

const Moreinfo = () => {
  return (
    <div className='md'>
      <h2>More Information</h2>
      <p>
        Read more at{" "}
        <Link to='/About' href='#About'>
          About
        </Link>
      </p>
    </div>
  );
};

export default Moreinfo;
