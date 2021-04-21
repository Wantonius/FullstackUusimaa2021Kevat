import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './HelloWorld';

class App extends React.Component {
	render() {
	  return (
		<div className="App">
			<h2>Hello World</h2>
			<HelloWorld />
			<HelloWorld name="Erno"/>
		</div>
	  );
	}
}

export default App;
