import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import LoginPage from './components/LoginPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
	

	
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
				{this.state.isLogged ? (
					<>
						<Stack.Screen name="ShoppingList">
						{props => <ShoppingList {...props} removeFromList={this.removeFromList} list={this.state.list}/>}
						</Stack.Screen>
						<Stack.Screen name="Add Item">
						{props => <ShoppingForm {...props} addToList={this.addToList}/>}
						</Stack.Screen>
					</>
					):(
					<>
						<Stack.Screen name="Login">
						{props => <LoginPage {...props} login={this.login} register={this.register}/>}
						</Stack.Screen>
					</>
					)
				}
				</Stack.Navigator>
			</NavigationContainer>	

		);
	}
}


