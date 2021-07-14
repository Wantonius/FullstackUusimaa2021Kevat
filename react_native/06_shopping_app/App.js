import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

const Stack = createStackNavigator();

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id:100,
			list:[]
		}
	}
	
	addToList = (item) => {
		item.id = this.state.id;
		this.setState((state) => {
			return {
				list:state.list.concat(item),
				id:state.id+1
			}
		})
	}
	
	removeFromList = (id) => {
		this.setState((state) => {
			let tempList = state.list.filter(item => item.id !== id)
			return {
				list:tempList
			}
		})
	}
	
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="ShoppingList">
					{props => <ShoppingList {...props} removeFromList={this.removeFromList} list={this.state.list}/>}
					</Stack.Screen>
					<Stack.Screen name="Add Item">
					{props => <ShoppingForm {...props} addToList={this.addToList}/>}
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>	

		);
	}
}


