import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";

const Moreinfo = () => {
  return (
    <div className='md'>
      <h2>More Information</h2>
      <p>
        Read more at{" "}
        <Link to='/About' href='#About'>
          <About href='#About' />
        </Link>
      </p>
      <Route exact path='/About' component={About} />
    </div>
  );
};

export default Moreinfo;
