import React from 'react';
import {View,Pressable,Text,TextInput,StyleSheet} from 'react-native';
import StateManager from './context/StateManager';

class ShoppingForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type:"",
			price:0,
			count:0
		}
	}
	
	addToList = () => {
		let item = {
			id:0,
			type:this.state.type,
			price:this.state.price,
			count:this.state.count
		}
		this.props.addToList(item);
		this.setState({
			type:"",
			count:0,
			price:0
		})
		this.props.navigation.navigate("ShoppingList");
	}
	
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={[styles.text,styles.label]}>Type:</Text>
					<TextInput style={styles.text}
								onChangeText={(text) => this.setState({
									type:text
								})} value={this.state.type}/>
				</View>
				<View style={styles.row}>
					<Text style={[styles.text,styles.label]}>Count:</Text>
					<TextInput style={styles.text}
								onChangeText={(text) => this.setState({
									count:text
								})} value={this.state.count}
								keyboardType="numeric"/>
				</View>
				<View style={styles.row}>
					<Text style={[styles.text,styles.label]}>Price:</Text>
					<TextInput style={styles.text}
								onChangeText={(text) => this.setState({
									price:text
								})} value={this.state.price}
								keyboardType="numeric"/>
				</View>
				<View style={styles.row}>
					<Pressable style={styles.addButton} 
							onPress={() => this.addToList()}>
							<Text style={styles.text}>Add</Text>
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
	addButton:{
		height:80,
		width:110,
		backgroundColor:"blue",
		alignItems:"center",
		justifyContent:"center"
	},
	text:{
		fontFamily:"sans-serif",
		fontSize:18,
	},
	label:{
		fontWeight:"bold"
	}
})

export default StateManager(ShoppingForm);