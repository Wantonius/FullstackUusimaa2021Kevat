import React from 'react';
import StateProvider from './components/context/StateProvider'
import Container from './components/Container';

export default class App extends React.Component {

	render() {
		return (
			<StateProvider>
				<Container/>
			</StateProvider>

		);
	}
}


