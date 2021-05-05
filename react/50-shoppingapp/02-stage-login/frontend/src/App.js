import React from 'react';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import {Switch,Route,Redirect} from 'react-router-dom';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			isLogged:false,
			token:""
		}
	}
	
	componentDidMount() {
		if(sessionStorage.getItem("state")) {
			let state = JSON.parse(sessionStorage.getItem("state"));
			this.setState(state, () => {
				if(this.state.isLogged) {
					this.getList();
				}
			})
		}	
	}
	
	saveToStorage = () => {
		sessionStorage.setItem("state",JSON.stringify(this.state));
	}
	
	clearState = () => {
		this.setState({
			list:[],
			isLogged:false,
			token:""
		}, () => {
			this.saveToStorage();
		})
	}
	
	//LOGIN API
	
	register = (user) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
		}
		fetch("/register",request).then(response => {
			if(response.ok) {
				alert("Register Success!");
			} else {
				console.log("Server responded with a status:",response.status)
			}
		}).catch(error => {
			console.log("There was an error. Error:",error);
		});
	}
	
	login = (user) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
		}
		fetch("/login",request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						isLogged:true,
						token:data.token
					}, () => {
						this.saveToStorage();
						this.getList();
					})
				}).catch(error => {
					console.log("Failed to parse JSON, Reason:",error);
				});
			} else {
				console.log("Server responded with a status:",response.status)
			}
		}).catch(error => {
			console.log("There was an error. Error:",error);
		});		
	}

	logout = () => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json",
						"token":this.state.token}
		}
		fetch("/logout",request).then(response => {
			if(response.ok) {
				this.clearState();
			} else {
				this.clearState();
				console.log("Server responded with a status:",response.status);
			}
		}).catch(error => {
			console.log("There was an error:",error);
			this.clearState();
		})
	}

	//REST API
	
	getList = () => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":this.state.token}
		}
		fetch("/api/shopping",request).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						list:data
					}, () => {
						this.saveToStorage();
					})
				}).catch((error) => {
					console.log("Parsing of JSON failed. Reason:",error)
				})
			} else {
				console.log("Server responded with a status:",response.status)
			}
		}).catch((error) => {
			console.log("Connection rejected. Reason:",error);
		});
	}
	
	addToList = (item) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json",
						"token":this.state.token},
			body:JSON.stringify(item)
		}
		fetch("/api/shopping",request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				console.log("Server responded with a status:",response.status);
			}
		}).catch((error) => {
			console.log("Connection refused. Reason:",error);
		});
	}

	removeFromList = (id) => {
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":this.state.token}
		}
		fetch("/api/shopping/"+id,request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				console.log("Server responded with a status:",response.status);
			}
		}).catch((error) => {
			console.log("Connection refused. Reason:",error);
		});
	}

	editItem = (item) => {
		let request = {
			method:"PUT",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":this.state.token},
			body:JSON.stringify(item)
		}
		fetch("/api/shopping/"+item.id,request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				console.log("Server responded with a status:",response.status);
			}
		}).catch((error) => {
			console.log("Connection refused. Reason:",error);
		});
	}
	
	render() {
	  return (
		<div className="App">
			<Navbar isLogged={this.state.isLogged} logout={this.logout}/>
			<hr/>
			<Switch>
				<Route exact path="/" render={() => this.state.isLogged ?
					(<Redirect to="/list"/>) :
					(<LoginPage register={this.register} login={this.login}/>)
				}/>
				<Route path="/list" render={() => this.state.isLogged ?
					(<ShoppingList list={this.state.list}
						removeFromList={this.removeFromList}
						editItem={this.editItem}/>) :
					(<Redirect to="/"/>)
				}/>
				<Route path="/form" render={() => this.state.isLogged ?
					(<ShoppingForm addToList={this.addToList}/>) :
					(<Redirect to="/"/>)
				}/>			
			</Switch>
		</div>
	  );
	}
}

export default App;
