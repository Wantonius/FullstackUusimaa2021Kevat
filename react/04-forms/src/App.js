import React from 'react';
import './App.css';
import NameForm from './NameForm';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			message:""
		}
	}
	
	setMessage = (name) => {
		this.setState({
			message:"Hello,"+name
		})
	}
	
	render() {
	  return (
		<div className="App">
			<NameForm setMessage={this.setMessage}/>
			<h3>{this.state.message}</h3>
		</div>
	  );
	}
}

export default App;
