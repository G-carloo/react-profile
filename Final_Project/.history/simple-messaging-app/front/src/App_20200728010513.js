import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Upload from "./components/layouts/Up";
import Calls from "./components/layouts/Calls";
import Moreinfo from "./components/pages/Moreinfo";
import Messages from "./components/layouts/Messages";
import About from "./components/pages/About";
import Contactsdisplay from "./components/pages/Contacts";

import ContactState from "./context/contact/ContactState";
import "./App.css";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/Upload' component={Upload} />
              <Route exact path='/Messages' component={Messages} />
              <Route exact path='/Calls' component={Calls} />
              <Route exact path='/Moreinfo' component={Moreinfo} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Contacts' component={Contacts} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
