import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo-light.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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

    this.logOut = this.logOut.bind(this);

    console.log("Checking for logged in user in App.js...");
    console.log(JSON.parse(localStorage.getItem('user')));
    //this.state.name= JSON.parse(localStorage.getItem('user')).first_name ;
  }


  logOut(){
    localStorage.setItem('user', null);
    localStorage.clear();
    window.location.reload();
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
                <Link to="/rooms" ><img className="img-responsive" src={require("./logo-light.png")} alt="logo"/></Link>
              </div>
              <div className="col-6 collapse navbar-collapse">
                                  {
                (!localStorage.getItem('user')) &&
                  (<ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/login" className="btn btn-outline-dark ml-5">Login</Link>
                    </li>
                </ul>)
              }
              {
                (localStorage.getItem('user')) &&
                (<ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                   <button className="btn btn-outline-dark ml-5" onClick={this.logOut}>Logout</button>
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
