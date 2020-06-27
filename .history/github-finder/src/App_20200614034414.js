import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import Users from "./components/users/Users";
// import Home from "./components/pages/Home";
// import NotFound from "./components/pages/NotFound";
import React, { useState } from "react";

import GithubState from "./context/github/GithubState";
// import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);
  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      {/* <AlertState> */}
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert />
            <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
      {/* </AlertState> */}
    </GithubState>
  );
};

export default App;
