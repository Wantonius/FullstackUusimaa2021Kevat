import React from 'react';

export default class About extends React.Component {
	
	render() {
		return(
		<div>
			<h3>This is the about page</h3>
			<button onClick={() => this.props.history.push("/secret")}>Go to secret page</button>
		</div>
		)
	}
}