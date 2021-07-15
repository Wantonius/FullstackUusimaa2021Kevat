import React from 'react';
import StateContext from './StateContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StateProvider extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			isLogged:false,
			token:"",
			loading:false,
			error:""
		}
	}
	
	//HELPER FUNCTIONS
	
	loadStorage = async () => {
		try {
			let value = await AsyncStorage.getItem('@state');
			if(value !== null) {
				let state = JSON.parse(value);
				this.setState(state);
			}
		} catch(e) {
			console.log("Failed to load storage");
		}
	}
	
	saveStorage = async () => {
		try {
			await AsyncStorage.setItem('@state',JSON.stringify(this.state));
		} catch (e) {
			console.log("Failed to save storage");
		}
	}
	
	componentDidMount() {
		this.loadStorage();
		if(this.state.isLogged) {
			this.getList();
		}
	}
	
	setLoading = (loading) => {
		this.setState({
			loading:loading,
			error:""
		})
	}
	
	setError = (error) => {
		this.setState({
			loading:false,
			error:error
		})
	}
	
	handleFetch = (request,url,action) => {
		let tempurl = "http://rn-kesa-shopping.herokuapp.com"+url;
		this.setLoading(true);
		fetch(tempurl,request).then(response => {
			this.setLoading(false);
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
							this.saveStorage();
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
					}, () => {
						this.saveStorage();
					})
				}
				if(action === "getlist") {
					response.json().then((data) => {
						this.setState({
							list:data
						},() => {
							this.saveStorage();
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
				if(action === "register") {
					let error = "Failed to register. Is username already in use?";
					this.setError(error);
				}
				if(action === "login") {
					let error = "Failed to login. Server responded with a status:"+response.status;
					this.setError(error);
				}
				if(action === "logout") {
					this.setState({
						list:[],
						isLogged:false,
						token:"",
						loading:false,						
						error:"Server responded with a conflict. Logging you out!"
					})
				}
			}
		}).catch((error) => {
			this.setLoading(false);
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
}