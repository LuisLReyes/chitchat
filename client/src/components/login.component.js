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
        passwordsMatch:false,
        registerForm: false,
        error: false,
        error_message:''
      }
      this.changeUsername = this.changeUsername.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.changeFirstName = this.changeFirstName.bind(this);
      this.changeLastName = this.changeLastName.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleRegister = this.handleRegister.bind(this);
      this.changeForm = this.changeForm.bind(this);
      this.verifyPassword = this.verifyPassword.bind(this);
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

    verifyPassword(event){
      if( this.state.password != '' && this.state.password != null && event.target.value != null && event.target.value != '' && event.target.value != this.state.password ){
        this.setState({
          passwordsMatch: true,
          error: true,
          error_message: 'Passwords must match'
        })
      }
      else{
        this.setState({
          passwordsMatch: true,
          error: false
        })
      }

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
        .catch(error =>{
          this.setState({
            error: true,
            error_message:'Invalid username or password'
          })
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
        registerForm: !this.state.registerForm,
        error: false
      })
    }





    render() {
        return (
            <div>
            <p>Welcome to Chit-Chat.</p>
            <p>Log in to have access to enhanced features</p>
            <p>All required fields are denoted by an asterisk (*)</p>

                <div className="row justify-content-center">
                  <div className="col-8">
                  {
                    this.state.error &&
                      <div className="alert alert-danger">{this.state.error_message}</div>
                  }
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      Username (*)
                    </span>

                      <input
                        className="form-control"
                        type="text" value={this.state.username}
                        onChange={this.changeUsername}
                        placeholder="Username"
                      />
                      </div>

                    {
                      this.state.registerForm &&
                      (

                      <div className="input-group">
                        <span className="input-group-text"id="basic-addon1">
                          Email (*)
                        </span>
                          <input
                            className="form-control"
                            type="text" value={this.state.email}
                            onChange={this.changeEmail}
                            placeholder="Email"
                          />

                          </div>
                      )}

                    {
                      this.state.registerForm &&
                      (
                        <div className="input-group">
                          <span className="input-group-text"id="basic-addon1">
                            First Name (*)
                          </span>
                          <input
                            className="form-control"
                            type="text" value={this.state.first_name}
                            onChange={this.changeFirstName}
                            placeholder="First Name"
                          />
                          </div>
                      )
                    }

                    {
                      this.state.registerForm &&
                      (
                        <div className="input-group">
                          <span className="input-group-text"id="basic-addon1">
                            Last Name
                          </span>
                          <input
                            className="form-control"
                            type="text" value={this.state.last_name}
                            onChange={this.changeLastName}
                            placeholder="Last Name"
                          />
                          </div>
                      )
                    }


                    <div className="input-group">
                      <span className="input-group-text"id="basic-addon1">
                        Password (*)
                      </span>
                       <input
                        className="form-control"
                        type="password" value={this.state.password}
                        onChange={this.changePassword}
                        placeholder="Password"
                      />
                    </div>


                    {
                      this.state.registerForm &&
                      (
                        <div className="input-group">
                          <span className="input-group-text"id="basic-addon1">
                            Verify Password (*)
                          </span>
                          <input
                            className="form-control"
                            type="password"
                            onChange={this.verifyPassword}
                            placeholder="Verify Password"
                          />
                          </div>
                      )
                    }
              </div>
          </div>
          <br/>
                <div className="row justify-content-center">
                  <div>
                    {
                      this.state.registerForm ?
                        (  <button className="btn btn-info btn-block" disabled={!this.state.username || !this.state.first_name || !this.state.email || !this.state.passwordsMatch} onClick={this.handleRegister} >Register</button>)
                        :
                        (<button className="btn btn-primary btn-block" disabled={!this.state.username || !this.state.password} onClick={this.handleLogin} >Login</button>)
                    }


                    {
                      this.state.registerForm ?
                        (  <button onClick={this.changeForm} className="btn  btn-outline-secondary">Have an account already? Log In!</button> )
                        :
                        ( <button onClick={this.changeForm} className="btn  btn-outline-secondary">Don't Have an account? Register here!</button> )
                    }


                    <br/>
                </div>
                </div>


            </div>
        )
    }
}
