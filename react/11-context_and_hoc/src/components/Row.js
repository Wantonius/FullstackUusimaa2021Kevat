import React from 'react';
import {Table,Button} from 'semantic-ui-react';

export default class Row extends React.Component {
	
	render() {
		return (
			<Table.Row>
				<Table.Cell>{this.props.item.type}</Table.Cell>
				<Table.Cell>{this.props.item.count}</Table.Cell>
				<Table.Cell>{this.props.item.price}</Table.Cell>
				<Table.Cell><Button color="red" 
				onClick={() => this.props.changeToRemoveState(this.props.item._id)}>Remove</Button></Table.Cell>
				<Table.Cell><Button color="green" 
				onClick={() => this.props.changeToEditState(this.props.item._id)}>Edit</Button></Table.Cell>
			</Table.Row>
		)
	}
}