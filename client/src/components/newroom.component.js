import React, { Component, } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class ElementFour extends Component {
  constructor(props){
    super(props);
      this.state ={
        groupName:'',
        groupTopic:'',
        error: false,
        errorMessage: '',
      }

      this.changeGroupName = this.changeGroupName.bind(this);
      this.changeGroupTopic = this.changeGroupTopic.bind(this);
      this.createGroup = this.createGroup.bind(this);
  }

  changeGroupName(event){
    this.setState({
      groupName: event.target.value
    });
  }

  changeGroupTopic(event){
    this.setState({
      groupTopic: event.target.value
    });
  }

  createGroup(){
    if(this.state.groupName == null || this.state.groupName == '' || this.state.groupTopic == null || this.state.groupTopic == ''){
      this.setState({
        error: true,
        errorMessage: 'You Must Include Both a name and a topic for your new study group'
      });
        console.log(":(");
    }
    else{

        this.error = false;
        axios.post('https://chit-chat-4331.herokuapp.com/chatroom/add',{
         room_name: this.state.groupName,
         room_type: this.state.groupTopic,
         owner: JSON.parse(localStorage.getItem('user'))._id
      })
      .then(res=> {
        this.props.history.push("/room/"+ res.data);
      })
    }
  }

  render() {
      return (
          <div className="row">
            <div>
              <label>
                Room Name
                <input
                  className="form-control"
                  type="text" value={this.state.groupName}
                  id= {'setGroupName'}
                  onChange={this.changeGroupName}
                />
              </label>
            </div>
            <div>
              <label>
                Topic
                <input
                  className="form-control"
                  type="text" value={this.state.groupTopic}
                  id= {'setGroupTopic'}
                  onChange={this.changeGroupTopic}
                />
              </label>
            </div>
            <button className="btn btn-primary btn-block" onClick={this.createGroup} >Create New Room!</button>

            <br/>
            {
              this.state.error &&
                <div className="alert alert-danger">{this.state.errorMessage}</div>

              }

          </div>
      )
  }
}
