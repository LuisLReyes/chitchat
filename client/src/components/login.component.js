import React, { Component, } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ElementOne extends Component {

  constructor(props){
      super(props);
      this.state ={
        username:'',
        password:''
      }
      this.changeUsername = this.changeUsername.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }

    changeUsername(event){
      this.setState({
        username: event.target.value
      });
    }

    changePassword(event){
      this.setState({
        password: event.target.value
      });
    }

    handleLogin(event){
      console.log('Username ' + this.state.username + ' with the password ' + this.state.value + ' has logged in');
    }



    render() {
        return (
            <div>
            <p>Welcome to Chit-Chat.</p>
            <p>Log in to have access for enhanced features</p>
                <div className="row justify-content-center">
                  <div>
                    <label>
                      Username
                      <input
                        className="form-control"
                        type="text" value={this.state.username}
                        id= {'setUsername'}
                        onChange={this.changeUsername}
                      />
                    </label>
                  <br/>

                    <label>
                      Password
                       <input
                        className="form-control"
                        type="text" value={this.state.password}
                        id= {'setPassword'}
                        onChange={this.changePassword}
                      />
                    </label>
                  <br/>
              </div>
          </div>

                <div className="row justify-content-center">
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.handleLogin} >Login</button>
                  <br/>
                </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-4"><button type="submit" className="btn btn-primary btn-block" value="Submit" >Sign Up</button></div>
                  <div className="col-4"><button type="submit" className ="btn btn-secondary btn-block" value="Submit" >Continue Anoymously</button></div>
                </div>
            </div>
        )
    }
}
