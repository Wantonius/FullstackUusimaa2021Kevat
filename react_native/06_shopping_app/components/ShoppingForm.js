import React from 'react';
import {View,Pressable,Text,TextInput,StyleSheet} from 'react-native';

export default class ShoppingForm extends React.Component {

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