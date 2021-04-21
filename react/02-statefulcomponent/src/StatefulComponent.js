import React from 'react';

export default class StatefulComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			seconds:0,
			timerId:0
		}

	}
	
	componentDidMount() {
		console.log("StatefulComponent - Component did mount");
		let tempId = setInterval(this.startTimer,1000);
		this.setState({
			timerId:tempId
		});
	}
	
	componentWillUnmount() {
		clearInterval(this.state.timerId);
	}
	
	startTimer = () => {
		this.setState((state) => {
			return {
				seconds:state.seconds+1
			}
		})
	}

	render() {
		return (
			<h3>Seconds since page loaded:{this.state.seconds}</h3>
		)
	}
}