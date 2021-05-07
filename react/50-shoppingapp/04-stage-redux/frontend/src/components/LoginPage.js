import React from 'react'
import {Form,Button} from 'semantic-ui-react';

export default class LoginPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			username:"",
			password:""
		}
	}
	
	onChange = (event) => {
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		let user = {
			username:this.state.username,
			password:this.state.password
		}
		if(event.target.name === "register") {
			this.props.register(user);
		} else {
			this.props.login(user);
		}
	}
	render() {
		return (
			<div style={{width:500,margin:"auto"}}>
				<Form>
					<Form.Field>
						<label htmlFor="username">Username</label>
						<input type="text"
								name="username"
								onChange={this.onChange}
								value={this.state.username}/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="password">Password</label>
						<input type="password"
								name="password"
								onChange={this.onChange}
								value={this.state.password}/>
					</Form.Field>
					<Button onClick={this.onSubmit} name="register">Register</Button>
					<Button onClick={this.onSubmit} name="login">Login</Button>
				</Form>
			</div>
		)
	}
	
}