import React from 'react';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[]
		}
	}
	
	componentDidMount() {
		this.getList();
	}
	
	//REST API
	
	getList = () => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/shopping",request).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						list:data
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
			headers:{"Content-type":"application/json"},
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
	
	render() {
	  return (
		<div className="App">
			<Navbar/>
			<hr/>
			<Switch>
				<Route exact path="/" render={() =>
					(<ShoppingList list={this.state.list}/>)
				}/>
				<Route path="/form" render={() =>
					(<ShoppingForm addToList={this.addToList}/>)
				}/>			
			</Switch>
		</div>
	  );
	}
}

export default App;
