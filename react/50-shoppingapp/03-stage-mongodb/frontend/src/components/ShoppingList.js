import React from 'react'
import {Table,Button} from 'semantic-ui-react';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';

export default class ShoppingList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			removeIndex:-1,
			editIndex:-1,
			search:""
		}
	}
	
	onChange = (event) => {
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	
	searchByType = () => {
		this.props.getList(this.state.search);
		this.setState({
			search:""
		})
	}
	
	changeToRemoveState = (id) => {
		for(let i=0;i<this.props.list.length;i++) {
			if(id === this.props.list[i]._id) {
				this.setState({
					removeIndex:i,
					editIndex:-1
				})
				return;
			}
		}
	}

	changeToEditState = (id) => {
		for(let i=0;i<this.props.list.length;i++) {
			if(id === this.props.list[i]._id) {
				this.setState({
					removeIndex:-1,
					editIndex:i
				})
				return;
			}
		}
	}
	
	cancel = () => {
		this.setState({
			removeIndex:-1,
			editIndex:-1
		})
	}
	
	removeFromList = (id) => {
		this.props.removeFromList(id);
		this.cancel();
	}
	
	editItem = (item) => {
		this.props.editItem(item);
		this.cancel();
	}
	
	render() {
		let items = this.props.list.map((item,index) => {
			if(this.state.removeIndex === index) {
				return	(
					<RemoveRow item={item} key={item._id}
					removeFromList={this.removeFromList}
					cancel={this.cancel}/>
					)
			}
			if(this.state.editIndex === index) {
				return (
					<EditRow key={item._id} item={item}
					editItem={this.editItem}
					cancel={this.cancel}/>
				)
			}
			return (
				<Row key={item._id} item={item} 
				changeToRemoveState={this.changeToRemoveState} changeToEditState={this.changeToEditState}/>
			)
		})
		return(
		<div>
			<label htmlFor="search">Search By Type:</label>
			<input type="text"
					name="search"
					onChange={this.onChange}
					value={this.state.search}/>
			<Button onClick={this.searchByType} style={{marginLeft:10}}>Search</Button>
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
		</div>
		)
	}
}