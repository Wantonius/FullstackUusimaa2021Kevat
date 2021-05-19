import React from 'react';
import ThemeContext from './ThemeContext';

export default class Headline extends React.Component {
	
	render() {
		return(
			<ThemeContext.Consumer>
			{
				theme => <h1 style={
					{color:theme.textcolor, 
					backgroundColor:theme.background}
					}>{this.props.children}</h1>
			}	
			</ThemeContext.Consumer>
		)
	}
}