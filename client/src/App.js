import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import elementLogin from "./components/login.component";
import elementHome from "./components/home.component";
import elementAddGroup from "./components/addgroup.component";
import elementOne from "./components/element-one.component";


class App extends Component {




  render() {
    return (
      <Router>

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://google.com" target="_blank">
              {/*<img src={} width="30" height="30" alt="google.com" />*/}
            </a>
            <Link to="/" className="navbar-brand">Skeleton for Group 15</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Elements</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <div className="row">
            <div className="col-3">
              <div className="row">
                <div className="col">
                  <p>Your Groups   </p>
                </div>
                <div className="col">
                  <button className="btn-primary btn-sm">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="col-8">
              <Route path="/" exact component={elementHome} />
              <Route path="/login" component={elementLogin} />
              <Route path="/addgroup" component={elementAddGroup} />
              <Route path="/testing" component={elementOne} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
