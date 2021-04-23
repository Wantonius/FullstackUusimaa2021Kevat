import React from 'react'
import {Table} from 'semantic-ui-react';
import Row from './Row';

export default class ShoppingList extends React.Component {
	
	render() {
		let items = this.props.list.map((item,index) => {
			return (<Row key={item.id} item={item}/>)
		})
		return(
			<Table striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Type</Table.HeaderCell>
						<Table.HeaderCell>Count</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Remove</Table.HeaderCell>
						<Table.HeaderCell>Edit</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
				{items}
				</Table.Body>
			</Table>
		)
	}
}