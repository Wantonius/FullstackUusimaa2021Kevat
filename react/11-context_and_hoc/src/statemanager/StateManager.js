import React from 'react';
import StateContext from './context/StateContext';

const StateManager = (Component) => {
	return class extends React.Component {
		render() {
			return(
				<StateContext.Consumer>
				{state => <Component {...this.props} {...state}/>}
				</StateContext.Consumer>
			)
		}
	}
}

export default StateManager;