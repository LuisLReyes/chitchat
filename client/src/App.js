import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import elementLogin from "./components/login.component";
import elementHome from "./components/home.component";
import elementRooms from "./components/addroom.component";
import elementNewRoom from "./components/newroom.component";
import elementRoom from "./components/room.component";


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
                                  {
                (!localStorage.getItem('user')) &&
                  (<ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>)
              }
              {
                (localStorage.getItem('user')) &&
                (<ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                   <button className="btn btn-outline-dark" onClick={this.logOut}>Logout</button>
                   </li>
                </ul>
                )
              }

              </div>
          </nav>
          <br/>
            
              <Route path="/" exact component={elementRooms} />
              <Route path="/login" component={elementLogin} />
              <Route path="/rooms" component={elementRooms} />
              <Route path="/newroom" component={elementNewRoom} />
              <Route path="/room/:id" component={elementRoom} />
            
        </div>
      </Router>
    );
  }
}

export default App;
