import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ElementThree extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchElement:''
		}

		this.changeSearchElement = this.changeSearchElement.bind(this);
	}

	changeSearchElement(event) {
		this.setState({
			searchElement: event.target.value
			
		});
	}

    render() {
        return (
            <div>
                <button type="button"class="btn btn-primary btn-block mb-4" > 
                	Create New Study Group
                </button>

                <input type="text" class="form-control" placeholder="Search Group" aria-label="Search" />
            </div>
        )
    }
}