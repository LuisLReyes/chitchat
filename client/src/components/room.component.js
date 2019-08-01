import React, { Component, } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./room.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ElementSix extends Component {
  //Contruct the element
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      //set variables to be access in the state
      var temp;
      if(localStorage.getItem('user')){
        temp = JSON.parse(localStorage.getItem('user')).first_name;
      }
      else{
        temp = 'Anonymous';
      }
      console.log("temp:" + temp);
      this.state ={
        groupId:'',
        groupName:'',
        groupTopic:'',
        groupChat:null,
        message:'',
        user: temp,
        //Used to test tick
        seconds : 0,
        name_element:''
      }

      this.changeName = this.changeName.bind(this);
      this.setName = this.setName.bind(this);
    
  }
  //Tick function that goes off every X milliseconds that are specified in componentDidMount()
  tick() {
    //Simple timer for testing tick
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
    //Uncomment this line to repeatedly update the chat information every second
    this.GetGroupFromUrl(this.state.groupId);
  }

  //On successful "mount" (load), complete the following
  componentDidMount () {
    //Log the mount
    console.log("Room Compnent Mounted!");
    //Set the interval for tick to be 1000 milliseconds between ticks
    this.interval = setInterval(() => this.tick(), 1000);
    //Get the parameters from the URL
    const { match: {params}} = this.props;
    console.log(`Room ID in URL: ${params.id}`);
    //Call function using ID in URL
    this.GetGroupFromUrl(params.id);

    
  }

  componentWillUnmount() {
    //Clear interval to prevent memory leak
    clearInterval(this.interval);
  }

  handleChange(e){
      this.setState({message: e.target.value})
  }

  handleSubmit(){
      this.addMessageHelper({'user':this.state.user, 'message':this.state.message}, this.state.groupId)
      console.log(this.state.message);
      this.setState({message: ''})
  }

  changeName(event){
    this.setState({
      name_element: event.target.value
    });
  }

  setName(){
    this.setState({
      user: this.state.name_element
    });
  }

  //Helper function to get group information
  GetGroupFromUrl(passedId){
    axios.get('https://chit-chat-4331.herokuapp.com/chatroom/'+passedId )
        .then(res => {
            //log the data
            console.log(res.data);
            //put all of the data into the state for ease of access
            this.state.groupId = res.data._id;
            this.state.groupName = res.data.room_name;
            this.state.groupTopic = res.data.room_type;
            this.state.groupChat = res.data.chat_log;
            //log the state to ensure everything is working as intended
            console.log(this.state);
            this.chat = this.state.groupChat.map((item,key) =>
                <div class="message">
                    <p key ={item.id}>{item.user}: {item.message}</p>
                </div>
            );
        })
  }
  //untested function to add chat messages
  addMessageHelper(passedMessage, passedId){
    axios.post('https://chit-chat-4331.herokuapp.com/chatroom/newmessage/' + passedId , passedMessage )
    .then(res=> {
        console.log(res.data);
    });
}
      //render the page's HTML
      render(){
        return(
        <div className="row">
          
          <div className="col-9">
            <div>
            {
                (!localStorage.getItem('user')) &&
                  (<div className="input-group">
                  <input type="text" className="form-control ml-5" value={this.state.name_element} onChange={this.changeName} placeholder="Enter Name" />
                  <div className="input-group-append"><button onClick={this.setName} disabled={!this.state.name_element} className="btn btn-dark btn-sm">Change Name</button></div>
                  </div>)
            }
              </div>
              <div className="chatBox">
                {this.chat}
              </div>
              <input className="form-control" type="text" ref={this.textInput} value={this.state.message} onChange={this.handleChange}/>
              <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Send</button>
              </div>
            </div>
          </div>
        )
      }
}
