import React from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Modal} from 'react-native'

export default class ModalView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			visible:false
		}
	}
	
	setVisibility = (visibility) => {
		this.setState({
			visible:visibility
		})
	}
	
	render() {
		return(
			<View style={styles.container}>
				<Modal
					animationType="fade"
					transparent={false}
					visible={this.state.visible}
					onRequestClose={() => {
						this.setVisibility(false)
					}}
				>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Press to close!</Text>
						<TouchableHighlight style={styles.closeButton}
							onPress={() => this.setVisibility(false)}>
							<Text>Close</Text>
						</TouchableHighlight>
					</View>
				</Modal>
				<TouchableHighlight style={styles.openButton}
					onPress={() => this.setVisibility(true)}
				>
					<Text>Press to open!</Text>
				</TouchableHighlight>
				
				
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	modalView:{
		margin:10,
		backgroundColor:"lightblue",
		padding:20,
		alignItems:"center",
		shadowColor:"#000",
		shadowOffset:{
			width:0,
			height:2
		},
		shadowOpacity:0.25,
		shadowRadius:4,
		elevation:5
	},
	openButton:{
		height:50,
		width:100,
		backgroundColor:"green"
	},
	closeButton:{
		height:50,
		width:100,
		backgroundColor:"red"
	},
	modalText:{
		textAlign:"center"
	}
})