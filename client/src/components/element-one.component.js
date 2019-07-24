import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const PORT = process.env.PORT || 4000;

export default class ElementOne extends Component {

    apiTester(){
        axios.get('http://localhost:'+PORT+'/user/5d23a48fc543581b901b4bb5')
            .then(res => {
                console.log(res.data);
            })
    }
    loginTester(){
        axios.post('http://localhost:'+PORT+'/user/login',{
            user_name: 'llreyes',
            password: 'asdf'
        })
        .then(res=> {
            console.log(res.data);
        });
        console.log("Session Info: " + session.userId);
    }

    render() {
        return (
            <div>
                <div>
                    <p>Welcome to Chit-Chat.</p>
                    <p>Log in to have access for enhanced features</p>
                </div>
                <div>
                    <button type="submit" id="loginBtn" className="btn btn-lg btn-primary btn-block" value="Submit">Login</button>
                    <button type="submit" id="loginBtn" className="btn btn-lg btn-primary btn-block" value="Continue Anonymously">Login</button>
                    <button id="apiTester" onClick={this.apiTester}>Send an API call</button>
                </div>
            </div>
        )
    }
}
