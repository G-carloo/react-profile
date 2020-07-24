import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import "./App.css";
import Camera from "./components/layouts/Up";
import Calls from "./components/layouts/Calls";
import Moreinfo from "./components/pages/Moreinfo";
import Messages from "./components/layouts/Messages";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/Up' component={Up} />
            <Route exact path='/Messages' component={Messages} />
            <Route exact path='/Calls' component={Calls} />
            <Route exact path='/Moreinfo' component={Moreinfo} />
            {/* <Camera />
            <Messages />
            <Calls />
            <Moreinfo href='#Modal' /> */}
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
