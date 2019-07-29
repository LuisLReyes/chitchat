import React, { Component } from 'react';
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
				for(let i = 0; i < this.state.data.length; i++){
					console.log(this.state.data[i].room_name + " " + this.state.data[i].room_type);
				}
			})
 	}



    render() {


        return (
            <div>
                <button type="button"className="btn btn-primary btn-block mb-4">
                	Create New Study Group
                </button>

                <input type="text" className="form-control" placeholder="Search Group" aria-label="Search" />

		<br/>

			{
			 this.state.data.map((data) =>
				 <div>
					<button type="button" onClick={() => this.joinRoom(data)} className="btn btn-light btn-block">
					 <h4>{data.room_name}</h4>
					 <h6>Current Topic: {data.room_type}</h6>
					</button>
					 <br/>
					</div>
			 		)
			 }
            </div>
        )
    }


}
