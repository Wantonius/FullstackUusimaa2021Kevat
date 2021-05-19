import React from 'react';

const Decorator = (Component) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				color:"red"
			}
		}	
		
		onChange = (event) => {
			this.setState({
				[event.target.name]:event.target.value
			}) 
		}
		render() {
			return (
				<div>
					<Component {...this.props} color={this.state.color}/>
					<br/>
					<input type="text"
							name="color"
							onChange={this.onChange}
							value={this.state.color}/>
				</div>
			
			)
		}
	}
}

export default Decorator;