import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import elementLogin from "./components/login.component";
import elementHome from "./components/home.component";
import elementRooms from "./components/addroom.component";
import elementNewRoom from "./components/newroom.component";
import elementRoom from "./components/room.component";
import elementOne from "./components/element-one.component";


class App extends Component {

  constructor(props) {
		super(props);
    
    var temp;
      if(localStorage.getItem('user')){
        temp = JSON.parse(localStorage.getItem('user')).first_name;
      }
      else{
        temp = 'Anonymous';
      }
    
    
    this.state = {
      user:'',
      name_element:'',
      name:temp,
      loggedIn:false,
		}

    

    console.log("Checking for logged in user in App.js...");
    console.log(JSON.parse(localStorage.getItem('user')));
    //this.state.name= JSON.parse(localStorage.getItem('user')).first_name ;
  }


  

  

  render() {
    return (
      <Router>

        <div className="container justify-content-between">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://google.com" target="_blank">
              {/*<img src={} width="30" height="30" alt="google.com" />*/}
            </a>
              <div className="col-7">
                <h1><Link to="/rooms" >Chit-Chat</Link></h1>
              </div>
              <div className="col-6 collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    
                    <li className="navbar-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
              </div>
          </nav>
          <br/>
          <div className="row">
            <div className="col-3">
              <div className="alert alert-secondary">
              <div className="row">
                <div className="col">
                  <p className="mr-1">Your Rooms</p>
                </div>
                <div className="col">
                  <Link to="/addroom" className="btn-primary btn-sm ml-5">
                    +
                  </Link>
                </div>
              </div>
            </div>
            </div>
            <div className="col-8">
              <Route path="/" exact component={elementHome} />
              <Route path="/login" component={elementLogin} />
              <Route path="/rooms" component={elementRooms} />
              <Route path="/testing" component={elementOne} />
              <Route path="/newroom" component={elementNewRoom} />
              <Route path="/room/:id" component={elementRoom} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
