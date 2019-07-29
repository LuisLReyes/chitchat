import React, { Component, } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class ElementFour extends Component {
  constructor(props){
    super(props);
      this.state ={
        groupName:'',
        groupTopic:''
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
    axios.post('https://chit-chat-4331.herokuapp.com/chatroom/add',{
       room_name: this.state.groupName,
       room_type: this.state.groupTopic,
       owner: "Test Owner"
    })
    .then(res=> {
        console.log(res.data);
    })
  }

  render() {
      return (
          <div>
            <div>
              <label>
                Group Name
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
            <button className="btn btn-primary btn-block" onClick={this.createGroup} >Create New Group!</button>

          </div>
      )
  }
}
