import React from 'react';
import {FlatList,View,Button,Pressable,Text,StyleSheet} from 'react-native';
import StateManager from './context/StateManager';

class ShoppingList extends React.Component {

	removeFromList = (id) => {
		this.props.removeFromList(id);
	}

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.buttonBox}>
					<Button onPress={() => this.props.logout()} title="Logout"/>
					<Button onPress={()=>this.props.navigation.navigate("Add Item")} title="Add Item"/>
				</View>
				<View style={styles.listBox}>
					<FlatList data={this.props.list}
								renderItem={
									({item}) => {
										return (
											<View style={styles.row}>
												<Text style={styles.textStyle}>Count:{item.count}</Text>
												<Text style={styles.textStyle}>Type:{item.type}</Text>
												<Text style={styles.textStyle}>Price:{item.price}</Text>
												<Pressable style={styles.buttonStyle} 
												onPress={() => this.removeFromList(item.id)}>
													<Text style={styles.textStyle}>Remove</Text>
												</Pressable>
											</View>
										
										)
									}
								}
								keyExtractor={item => ""+item.id}/>
				</View>
			</View>
		)	
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	buttonBox:{
		flex:1,
		justifyContent:"center"
	},
	listBox:{
		flex:10,
		alignItems:"center",
		justifyContent:"center"
	},
	row:{
		flex:1,
		flexDirection:"row",
		justifyContent:"space-evenly",
		alignItems:"center"
	},
	textStyle:{
		fontFamily:"sans-serif",
		fontWeight:"bold",
		fontSize:13,
		padding:2
	},
	buttonStyle:{
		padding:3,
		width:70,
		height:50,
		backgroundColor:"red",
		alignItems:"flex-start",
		justifyContent:"center"
	}
})


export default StateManager(ShoppingList);