import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import LoginPage from './components/LoginPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			isLogged:false,
			token:""
		}
	}
	
	handleFetch = (request,url,action) => {
		let tempurl = "http://rn-kesa-shopping.herokuapp.com"+url;
		fetch(tempurl,request).then(response => {
			if(response.ok) {
				if(action === "register") {
					alert("Register success");
				}
				if(action === "login") {
					response.json().then((data) => {
						this.setState({
							token:data.token,
							isLogged:true
						},() => {
							this.getList();
						})
					}).catch((error) => {
						console.log(error)
					})
				}
				if(action === "logout") {
					this.setState({
						token:"",
						isLogged:false,
						list:[]
					})
				}
				if(action === "getlist") {
					response.json().then((data) => {
						this.setState({
							list:data
						})
					}).catch(error => {
						console.log(error)
					})
				}
				if(action === "addtolist") {
					this.getList();
				}
				if(action === "removefromlist") {
					this.getList();
				}
			} else {
				console.log("Server responded with a status:"+response.status);
			}
		}).catch((error) => {
			console.log(error);
		});
	}
	
	//Login API
	
	register = (user) => {
		let url = "/register";
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
		}
		this.handleFetch(request,url,"register");
	}

	login = (user) => {
		let url = "/login";
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
		}
		this.handleFetch(request,url,"login");
	}
	
	logout = () => {
		let url = "/logout";
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json",
						"token":this.state.token}
		}
		this.handleFetch(request,url,"logout");
	}
	
	//SHOPPING API
	
	getList = () => {
		let url = "/api/shopping";
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json",
					  "token":this.state.token}
		}
		this.handleFetch(request,url,"getlist");
	}
	
	addToList = (item) => {
		let url = "/api/shopping";
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json",
					  "token":this.state.token},
			body:JSON.stringify(item)
		}
		this.handleFetch(request,url,"addtolist");
	}
	
	removeFromList = (id) => {
		let url = "/api/shopping/"+id;
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json",
					  "token":this.state.token}
		}
		this.handleFetch(request,url,"removefromlist");
	}
	
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
				{this.state.isLogged ? (
					<>
						<Stack.Screen name="ShoppingList">
						{props => <ShoppingList {...props} removeFromList={this.removeFromList} list={this.state.list}/>}
						</Stack.Screen>
						<Stack.Screen name="Add Item">
						{props => <ShoppingForm {...props} addToList={this.addToList}/>}
						</Stack.Screen>
					</>
					):(
					<>
						<Stack.Screen name="Login">
						{props => <LoginPage {...props} login={this.login} register={this.register}/>}
						</Stack.Screen>
					</>
					)
				}
				</Stack.Navigator>
			</NavigationContainer>	

		);
	}
}


