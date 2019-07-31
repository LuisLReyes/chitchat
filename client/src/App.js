import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import elementRegister from "./components/register.component";
import elementHome from "./components/home.component";
import elementAddRoom from "./components/addroom.component";
import elementNewRoom from "./components/newroom.component";
import elementRoom from "./components/room.component";
import elementOne from "./components/element-one.component";


class App extends Component {

  constructor(props) {
		super(props);
		this.state = {
      user_name:'',
      first_name:'',
      last_name:'',
      password:'',
      email:'',
      name_element:'',
      temp_name:'Anonymous',
      registerForm:false,
      loginForm: false,
      loggedIn:false,
		}

    this.changeName = this.changeName.bind(this);
    this.setName = this.setName.bind(this);
  }


  changeName(event){
    this.setState({
      name_element: event.target.value
    });
  }

  setName(){
    this.setState({
      temp_name: this.state.name_element
    });
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
                <Link to="/" className="navbar-brand">Hello, {this.state.temp_name}</Link>
              </div>
              <div className="col-6 collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <div className="input-group">
                        <input type="text" className="form-control ml-5" value={this.state.name_element} onChange={this.changeName} placeholder="Enter Name" />
                        <div className="input-group-append"><button onClick={this.setName} disabled={!this.state.name_element} className="btn btn-dark btn-sm">Change Name</button></div>
                      </div>
                    </li>
                    <li className="navbar-item">
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
                  <Link to="/addroom" className="btn-primary btn-sm">
                    +
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-8">
              <Route path="/" exact component={elementHome} />
              <Route path="/register" component={elementRegister} />
              <Route path="/addroom" component={elementAddRoom} />
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
