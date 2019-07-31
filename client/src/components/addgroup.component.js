
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ElementThree extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchElement:'',
			data:[]
		}

		this.changeSearchElement = this.changeSearchElement.bind(this);
		this.joinRoom = this.joinRoom.bind(this);
	}



	changeSearchElement(event) {
		this.setState({
			searchElement: event.target.value

		});
	}

	joinRoom(data){
		console.log("You have joined Room:" + data.room_name)
}



 	componentDidMount(){
		axios.get('https://chit-chat-4331.herokuapp.com/chatroom')
			.then(res => {
				this.setState({
					data: res.data
				});
				console.log(this.state.data);
			})
 	}



    render() {


        return (
            <div>
                <Link to="/newgroup" className="btn btn-primary btn-block mb-4">
                	Create New Study Group
                </Link>

                <input type="text" className="form-control" onChange={this.changeSearchElement} placeholder="Search Group" aria-label="Search" />

		<br/>

			{
			 this.state.data.map((data) =>{
			 const regEx = new RegExp(this.state.searchElement, 'g');
			 let roomLink = "/group/" + data._id;
			 return (regEx.test(data.room_name) || regEx.test(data.room_type)) &&
			 	( <div>
					<Link to={roomLink} onClick={() => this.joinRoom(data)} className="btn btn-light btn-block">
					 <h4>{data.room_name}</h4>
					 <h6>Current Topic: {data.room_type}</h6>
					</Link>
					 <br/>
					</div>
				)
				}
			 )
			}
            </div>
        )
    }


}
