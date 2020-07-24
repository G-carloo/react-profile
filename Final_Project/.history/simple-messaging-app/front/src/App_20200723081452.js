import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import "./App.css";
import Camera from "./components/layouts/Camera";
import Calls from "./components/layouts/Calls";
import About from "./components/pages/About";
import Search from "./components/pages/More";
import Moreinfo from "./components/pages/More";
import Messages from "./components/layouts/Messages";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/about' component={Home} />
            <Camera />
            <Messages />
            <Calls />
            {/* <Search /> */}
            {/* <Moreinfo href='#modals' /> */}
            {/* <About /> */}
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
