import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends React.Component  {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			id:100
		}
	}
	
	addToList = (contact) => {
		this.setState((state) => {
			contact.id = state.id;
			return {
				list:state.list.concat(contact),
				id:state.id+1
			}
		})
	}
	
	removeFromList = (id) => {
		this.setState((state) => {
			let templist = state.list.filter(contact => contact.id !== id);
			return {
				list:templist
			}
		});
	}
	
	render() {
	  return (
		<div className="App">
			<ContactForm addToList={this.addToList}/>
			<hr/>
			<ContactList list={this.state.list} removeFromList={this.removeFromList}/>
		</div>
	  );
	}
}

export default App;
