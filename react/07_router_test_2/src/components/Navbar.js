import React from 'react';
import {Link} from 'react-router-dom';
import {List,Header} from 'semantic-ui-react'

export default class Navbar extends React.Component {
	
	render() {
		let navStyle={backgroundColor:"lightgreen",
						height:120}
		return(
			<div style={navStyle}>
				<Header>Contact app</Header>
				<List>
					<List.Item><Link to="/">Contact List</Link></List.Item>
					<List.Item><Link to="/form">Add to contacts</Link></List.Item>
				</List>
			</div>
		)
	}
}