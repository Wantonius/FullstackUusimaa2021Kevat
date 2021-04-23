import React from 'react';
import './App.css';
import ShoppingForm from './components/ShoppingForm';

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
			<ShoppingForm addToList={this.addToList}/>
		</div>
	  );
	}
}

export default App;
