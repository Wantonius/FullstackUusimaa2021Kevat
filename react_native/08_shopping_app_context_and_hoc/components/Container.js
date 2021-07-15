import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';
import LoginPage from './LoginPage';
import StateManager from './context/StateManager';

const Stack = createStackNavigator();

class Container extends React.Component {


	render() {
		let title = "Shopping App";
		if(this.props.loading) {
			title = "Loading ..."
		}
		if(this.props.error) {
			title = this.props.error;
		}
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
					title:title,
					headerStyle:{
						backgroundColor:"#00CCCC"
					}
				}}>
				{this.props.isLogged ? (
					<>
						<Stack.Screen name="ShoppingList" component={ShoppingList}/>
						<Stack.Screen name="Add Item" component={ShoppingForm}/>
					</>
					):(
					<>
						<Stack.Screen name="Login" component={LoginPage}/>					
					</>
					)
				}
				</Stack.Navigator>
			</NavigationContainer>			
		)
	}
}

export default StateManager(Container);