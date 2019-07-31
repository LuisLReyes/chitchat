import React, { Component, } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class ElementSix extends Component {
  //Contruct the element
  constructor(props){
    super(props);
      //set variables to be access in the state
      this.state ={
        groupId:'',
        groupName:'',
        groupTopic:'',
        groupChat:null,
        //Used to test tick
        seconds : 0
      }
  }
  //Tick function that goes off every X milliseconds that are specified in componentDidMount()
  tick() {
    //Simple timer for testing tick
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
    //Uncomment this line to repeatedly update the chat information every second
    //this.GetGroupFromUrl(this.state.groupId);
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
        })
  }
  //untested function to add chat messages
  addMessageHelper(passedMessage, passedId){
    axios.post('https://chit-chat-4331.herokuapp.com/chatroom/newmessage/' + passedId ,passedMessage)
    .then(res=> {
        console.log(res.data);
    });
}
      //render the page's HTML
      render(){
        return(
          <div>
            Seconds: {this.state.seconds}
          </div>
        )
      }
}
