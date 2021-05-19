import React from 'react';
import ThemeContext from './ThemeContext';

export default class Paragraph extends React.Component {
	
	render() {
		return(
			<ThemeContext.Consumer>
			{
				theme => <p style={
					{color:theme.textcolor, 
					backgroundColor:theme.background}
					}>{this.props.children}</p>
			}	
			</ThemeContext.Consumer>
		)
	}
}