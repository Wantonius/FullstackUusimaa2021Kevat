import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import StateManager from './statemanager/StateManager';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Navbar/>
				<hr/>
				<Switch>
					<Route exact path="/" render={() => this.props.isLogged ? 
					(<Redirect to="/list"/>):
					(<LoginPage/>)
					}/>
					<Route path="/list" render={() => this.props.isLogged ?
					(<ShoppingList/>):
					(<Redirect to="/"/>)
					}/>
					<Route path="/form" render={() => this.props.isLogged ?
					(<ShoppingForm/>):
					(<Redirect to="/"/>)
					}/>
				</Switch>
			</div>
		);
	}
}

export default StateManager(App);
