import React from 'react';
import LoggerContext from './context/LoggerContext';

const HocLogger = (Component) => {
	return class extends React.Component {
		render() {
			return (
				<LoggerContext.Consumer>
				{state => <Component {...this.props} {...state}/>}
				</LoggerContext.Consumer>
			)
		}
	}
}

export default HocLogger;