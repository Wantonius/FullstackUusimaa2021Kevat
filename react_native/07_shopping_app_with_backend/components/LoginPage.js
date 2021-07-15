import React from 'react';
import {View,Pressable,Text,TextInput,StyleSheet} from 'react-native';

export default class LoginPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			username:"",
			password:""
		}
	}
	
	register = () => {
		let user =  {
			username:this.state.username,
			password:this.state.password
		}
		this.props.register(user);
	}
	
	login = () => {
		let user = {
			username:this.state.username,
			password:this.state.password
		}
		this.props.login(user);
	}
	
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={[styles.text,styles.label]}>Username:</Text>
					<TextInput style={styles.text}
						onChangeText={(text) => this.setState({
							username:text
						})} value={this.state.username}
						placeholder="Username"/>
				</View>
				<View style={styles.row}>
					<Text style={[styles.text,styles.label]}>Password:</Text>
					<TextInput style={styles.text}
						onChangeText={(text) => this.setState({
							password:text
						})} value={this.state.password}
						placeholder="Password"
						secureTextEntry={true}/>
				</View>
				<View style={styles.buttonRow}>
					<Pressable style={styles.registerButton}
						onPress={() => this.register()}>
						<Text style={styles.text}>Register</Text>
					</Pressable>
					<Pressable style={[styles.registerButton,styles.loginButton]}
						onPress={() => this.login()}>
						<Text style={styles.text}>Login</Text>
					</Pressable>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	},
	row:{
		flex:1,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"center"
	},
	buttonRow:{
		flex:1,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-evenly"
	},
	registerButton:{
		height:80,
		width:110,
		backgroundColor:"blue",
		alignItems:"center",
		justifyContent:"center"
	},
	loginButton:{
		backgroundColor:"red"
	},
	text:{
		fontFamily:"sans-serif",
		fontSize:18,
	},
	label:{
		fontWeight:"bold"
	}
})