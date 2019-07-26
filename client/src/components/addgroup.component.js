import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ElementThree extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchElement:'',
			data:''
		}

		this.changeSearchElement = this.changeSearchElement.bind(this);
	}


	fetchGroups(){
		const chatRooms = axios.get('https://chit-chat-4331.herokuapp.com/chatroom')
			.then(res => {
				this.setState({
					data: res.data
				});
				console.log(this.state.data);
			})
	}

	changeSearchElement(event) {
		this.setState({
			searchElement: event.target.value

		});
	}

    render() {
			/*const chatRoomNames = this.state.data.map(val => {
				return(
						<h1>val.room_name<h1>
						<h2>val.room_type<h2>
				)
			}) */

        return (
            <div>
                <button type="button"className="btn btn-primary btn-block mb-4">
                	Create New Study Group
                </button>

                <input type="text" className="form-control" placeholder="Search Group" aria-label="Search" />
            </div>
        )
    }


}
