import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Upload from "./components/layouts/Up";
import Calls from "./components/layouts/Calls";
import Moreinfo from "./components/pages/Moreinfo";
import Messages from "./components/layouts/Messages";
import About from "./components/pages/About";
import Contactsdisplay from "./components/pages/Contactsdisplay";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Switch>
                  <Route exact path='/upload' component={Upload} />
                  <Route exact path='/messages' component={Messages} />
                  <Route exact path='/calls' component={Calls} />
                  <Route exact path='/moreinfo' component={Moreinfo} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/contacts' component={Contactsdisplay} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
