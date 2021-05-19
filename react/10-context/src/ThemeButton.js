import React from 'react';
import ThemeContext from './ThemeContext';

export default class ThemeButton extends React.Component {
	
	render() {
		return(
			<ThemeContext.Consumer>
			{
				theme => <button style={
					{color:theme.textcolor, 
					backgroundColor:theme.background}
					} onClick={this.props.toggleTheme}>Toggle Theme</button>
			}	
			</ThemeContext.Consumer>
		)
	}
}