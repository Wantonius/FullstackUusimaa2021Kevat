import React from 'react';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {


	

	
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
					(<ShoppingList removeFromList={this.removeFromList}
						editItem={this.editItem}
						/>) :
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
		isLogged:state.login.isLogged,
		token:state.login.token
	}
}

export default connect(mapStateToProps)(App);
