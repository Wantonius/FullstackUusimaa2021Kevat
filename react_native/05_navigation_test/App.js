import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GreetingForm from './GreetingForm';
import GreetingPage from './GreetingPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			firstname:"",
			lastname:"",
			textcolor:"red",
			backgroundcolor:"blue"
		}
	}
	
	setGreeting = (data) => {
		this.setState({
			firstname:data.firstname,
			lastname:data.lastname,
			textcolor:data.textcolor,
			backgroundcolor:data.backgroundcolor
		})
	}
	
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="GreetingForm">
					{props => <GreetingForm {...props} setGreeting={this.setGreeting}/>}
					</Stack.Screen>
					<Stack.Screen name="GreetingPage">
					{props => <GreetingPage {...props} {...this.state}/>}
					</Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}


