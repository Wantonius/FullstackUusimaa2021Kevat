import React from 'react'
import {Form,Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {register,login} from '../actions/loginActions';
import HocLogger from '../hoclogger/HocLogger';

class LoginPage extends React.Component {
	
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
		if(this.state.username.length < 4 || this.state.password.length < 8) {
			alert("Username must be 4 characters and password 8 characters long");
			return;
		}
		let user = {
			username:this.state.username,
			password:this.state.password
		}
		if(event.target.name === "register") {
			this.props.dispatch(register(user));
			this.props.hoclog(this.props.loglevel.LOG_INFO,"LoginPage","register user:"+user.username);
		} else {
			this.props.dispatch(login(user));
			this.props.hoclog(this.props.loglevel.LOG_INFO,"LoginPage","login user:"+user.username)
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

export default HocLogger(connect()(LoginPage));