import React from 'react';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[]
		}
	}
	
	componentDidMount() {
		if(sessionStorage.getItem("state")) {
			let state = JSON.parse(sessionStorage.getItem("state"));
			this.setState(state, () => {
				if(this.props.isLogged) {
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
			list:[]
		}, () => {
			this.saveToStorage();
		})
	}
	
	//LOGIN API
	




	//REST API
	
	getList = (search) => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":this.props.token}
		}
		let url = "/api/shopping"
		if(search) {
			url = url +"?type="+search
		}
		fetch(url,request).then((response) => {
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
				if(response.status === 403) {
					console.log("Session expired! Logging out!");
					this.clearState();
				}
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
						"token":this.props.token},
			body:JSON.stringify(item)
		}
		fetch("/api/shopping",request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				if(response.status === 403) {
					console.log("Session expired! Logging out!");
					this.clearState();
				}
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
					"token":this.props.token}
		}
		fetch("/api/shopping/"+id,request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				if(response.status === 403) {
					console.log("Session expired! Logging out!");
					this.clearState();
				}
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
					"token":this.props.token},
			body:JSON.stringify(item)
		}
		fetch("/api/shopping/"+item._id,request).then((response) => {
			if(response.ok) {
				this.getList();
			} else {
				if(response.status === 403) {
					console.log("Session expired! Logging out!");
					this.clearState();
				}
				console.log("Server responded with a status:",response.status);
			}
		}).catch((error) => {
			console.log("Connection refused. Reason:",error);
		});
	}
	
	render() {
	  return (
		<div className="App">
			<Navbar />
			<hr/>
			<Switch>
				<Route exact path="/" render={() => this.props.isLogged ?
					(<Redirect to="/list"/>) :
					(<LoginPage/>)
				}/>
				<Route path="/list" render={() => this.props.isLogged ?
					(<ShoppingList list={this.state.list}
						removeFromList={this.removeFromList}
						editItem={this.editItem}
						getList={this.getList}/>) :
					(<Redirect to="/"/>)
				}/>
				<Route path="/form" render={() => this.props.isLogged ?
					(<ShoppingForm addToList={this.addToList}/>) :
					(<Redirect to="/"/>)
				}/>			
			</Switch>
		</div>
	  );
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged:state.isLogged,
		token:state.token
	}
}

export default connect(mapStateToProps)(App);
