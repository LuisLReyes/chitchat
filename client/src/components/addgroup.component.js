import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ElementThree extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchElement:''
		}

		this.changeSearchElement = this.changeSearchElement.bind(this);
	}

	fetchGroups(){
		axios.get('https://chit-chat-4331.herokuapp.com/chatroom')
			.then(res => {
				console.log(res.data);
			})
	}

	changeSearchElement(event) {
		this.setState({
			searchElement: event.target.value

		});
	}

    render() {
        return (
            <div>
                <button type="button"className="btn btn-primary btn-block mb-4" onClick={this.fetchGroups} > 
                	Create New Study Group (Test)
                </button>

                <input type="text" className="form-control" placeholder="Search Group" aria-label="Search" />
            </div>
        )
    }
}
