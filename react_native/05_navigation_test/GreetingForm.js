import React from 'react';
import {View,TouchableHighlight,Text,TextInput,StyleSheet} from 'react-native';

export default class GreetingForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname:"",
			lastname:"",
			textcolor:"",
			backgroundcolor:""
		}
	}
	
	setGreeting = () => {
		let data = {
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			textcolor:this.state.textcolor,
			backgroundcolor:this.state.backgroundcolor
		}
		this.props.setGreeting(data);
		this.setState({
			firstname:"",
			lastname:"",
			textcolor:"",
			backgroundcolor:""
		})
		this.props.navigation.navigate("GreetingPage");
	}
	
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.row}>
					<Text>First Name:</Text>
					<TextInput onChangeText={(text) => this.setState({
						firstname:text
					})} value={this.state.firstname}/>
				</View>
				<View style={styles.row}>
					<Text>Last Name:</Text>
					<TextInput onChangeText={(text) => this.setState({
						lastname:text
					})} value={this.state.lastname}/>
				</View>
				<View style={styles.row}>
					<Text>Text Color:</Text>
					<TextInput onChangeText={(text) => this.setState({
						textcolor:text
					})} value={this.state.textcolor}/>
				</View>
				<View style={styles.row}>
					<Text>Background Color:</Text>
					<TextInput onChangeText={(text) => this.setState({
						backgroundcolor:text
					})} value={this.state.backgroundcolor}/>
				</View>
				<View style={styles.row}>
					<TouchableHighlight style={styles.button}
						onPress={() => this.setGreeting()}>
						<Text>Set Greeting</Text>
					</TouchableHighlight>
				</View>
			</View>
		
		)
	}
}

const styles = StyleSheet.create({
	container: {
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
	button:{
		height:80,
		width:110,
		backgroundColor:"green",
		alignItems:"center",
		justifyContent:"center"
	}
})