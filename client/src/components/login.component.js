import React, { Component, } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class ElementOne extends Component {

  constructor(props){
      super(props);
      this.state ={
        username:'',
        password:'',
        email:'',
        first_name:'',
        last_name:'',
        registerForm: false
      }
      this.changeUsername = this.changeUsername.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.changeFirstName = this.changeFirstName.bind(this);
      this.changeLastName = this.changeLastName.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleRegister = this.handleRegister.bind(this);
      this.changeForm = this.changeForm.bind(this);
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

    changeEmail(event){
      this.setState({
        email: event.target.value
      });
    }

    changeFirstName(event){
      this.setState({
        first_name: event.target.value
      });
    }

    changeLastName(event){
      this.setState({
        last_name: event.target.value
      });
    }

    handleLogin(){
      console.log("api test username: " + this.state.username + " password: " + this.state.password);
      axios.post('https://chit-chat-4331.herokuapp.com/user/login',{
            user_name: this.state.username,
            password: this.state.password
        })
        .then(res=> {
            console.log(res.data);
        })
    }

    handleRegister(){
      axios.post('https://chit-chat-4331.herokuapp.com/user/add',{
            user_name: this.state.username,
            password: this.state.password,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        })
        .then(res=> {
            console.log(res.data);
        })
    }

    changeForm(){
      this.setState({
        registerForm: !this.state.registerForm
      })
    }




    render() {
        return (
            <div>
            <p>Welcome to Chit-Chat.</p>
            <p>Log in to have access to enhanced features</p>
              <br/>
                <div className="row justify-content-center">
                  <div>

                    <label>
                      Username
                      <input
                        className="form-control"
                        type="text" value={this.state.username}
                        onChange={this.changeUsername}
                      />
                    </label>
                    <div>
                    {
                      this.state.registerForm &&
                      (
                        <label>
                          Email
                          <input
                            className="form-control"
                            type="text" value={this.state.email}
                            onChange={this.changeEmail}
                          />
                        </label>
                      )
                    }
                    </div>

                    <div>
                    {
                      this.state.registerForm &&
                      (
                        <label>
                          First Name
                          <input
                            className="form-control"
                            type="text" value={this.state.first_name}
                            onChange={this.changeFirstName}
                          />
                        </label>
                      )
                    }
                    </div>

                    <div>
                    {
                      this.state.registerForm &&
                      (
                        <label>
                          Last Name
                          <input
                            className="form-control"
                            type="text" value={this.state.last_name}
                            onChange={this.changeLastName}
                          />
                        </label>
                      )
                    }
                    </div>

                    <div>
                    <label>
                      Password
                       <input
                        className="form-control"
                        type="password" value={this.state.password}
                        onChange={this.changePassword}
                      />
                    </label>
                    </div>
              </div>
          </div>

                <div className="row justify-content-center">
                  <div className="col-4">
                    {
                      this.state.registerForm ?
                        (  <button className="btn btn-info btn-block" onClick={this.handleRegister} >Register</button>)
                        :
                        (<button className="btn btn-primary btn-block" onClick={this.handleLogin} >Login</button>)
                    }

                    <br/>

                    <button onClick={this.changeForm} className="btn btn-small btn-outline-secondary">
                    {
                      this.state.registerForm ?
                        (  <p>Have an account already? Log In!</p>)
                        :
                        (<p>Don't Have an account? Register here!</p>)
                    }
                    </button>

                    <br/>
                </div>
                </div>


            </div>
        )
    }
}
