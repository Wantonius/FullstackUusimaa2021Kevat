import React from 'react';
import {Form,Button} from 'semantic-ui-react';

export default class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			firstname:"",
			lastname:"",
			email:"",
			phone:""
		}
	}
	
	onChange = (event) => {
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		let contact = {
			...this.state
		}
		this.props.addToList(contact);
		this.setState({
			firstname:"",
			lastname:"",
			email:"",
			phone:""
		})
	}
	
	render() {
		return(
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label htmlFor="firstname">First name:</label>
					<input type="text"
							name="firstname"
							onChange={this.onChange}
							value={this.state.firstname}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="lastname">Last name:</label>
					<input type="text"
							name="lastname"
							onChange={this.onChange}
							value={this.state.lastname}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="email">Email:</label>
					<input type="email"
							name="email"
							onChange={this.onChange}
							value={this.state.email}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="phone">Phone:</label>
					<input type="text"
							name="phone"
							onChange={this.onChange}
							value={this.state.phone}/>
				</Form.Field>
				<Button type="submit">Add</Button>
			</Form>
		)
	}
}