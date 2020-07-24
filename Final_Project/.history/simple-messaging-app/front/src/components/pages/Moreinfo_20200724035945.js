import React from "react";

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
    </div>
  );
};

export default Moreinfo;
