import {View,Pressable,FlatList,StyleSheet,Text} from 'react-native';
import React from 'react';

export default class ContactList extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data:[
				{
					"firstname": "Zachary",
					"lastname": "Cobb",
					"id": 1
				},
				{
					"firstname": "Courtney",
					"lastname": "Cardenas",
					"id": 2
				},
				{
					"firstname": "Maris",
					"lastname": "Jennings",
					"id": 3
				},
				{
					"firstname": "Charles",
					"lastname": "Wilkerson",
					"id": 4
				},
				{
					"firstname": "Winter",
					"lastname": "Bell",
					"id": 5
				},
				{
					"firstname": "Daniel",
					"lastname": "Fox",
					"id": 6
				},
				{
					"firstname": "Wyatt",
					"lastname": "Dorsey",
					"id": 7
				},
				{
					"firstname": "Madonna",
					"lastname": "Rocha",
					"id": 8
				},
				{
					"firstname": "Linus",
					"lastname": "Chambers",
					"id": 9
				},
				{
					"firstname": "Holmes",
					"lastname": "Greene",
					"id": 10
				},
				{
					"firstname": "Raya",
					"lastname": "Gutierrez",
					"id": 11
				},
				{
					"firstname": "Grant",
					"lastname": "Wiley",
					"id": 12
				},
				{
					"firstname": "Miriam",
					"lastname": "Velazquez",
					"id": 13
				},
				{
					"firstname": "Kimberley",
					"lastname": "Forbes",
					"id": 14
				},
				{
					"firstname": "Hasad",
					"lastname": "Rollins",
					"id": 15
				},
				{
					"firstname": "Germaine",
					"lastname": "Schneider",
					"id": 16
				},
				{
					"firstname": "Yvette",
					"lastname": "Roberson",
					"id": 17
				},
				{
					"firstname": "Lucas",
					"lastname": "Gallegos",
					"id": 18
				},
				{
					"firstname": "Austin",
					"lastname": "Gray",
					"id": 19
				},
				{
					"firstname": "Guy",
					"lastname": "Dominguez",
					"id": 20
				},
				{
					"firstname": "Leonard",
					"lastname": "Noel",
					"id": 21
				},
				{
					"firstname": "Gail",
					"lastname": "Fernandez",
					"id": 22
				},
				{
					"firstname": "Simon",
					"lastname": "Calderon",
					"id": 23
				},
				{
					"firstname": "Price",
					"lastname": "Benson",
					"id": 24
				},
				{
					"firstname": "Amanda",
					"lastname": "Forbes",
					"id": 25
				},
				{
					"firstname": "Howard",
					"lastname": "Gilbert",
					"id": 26
				},
				{
					"firstname": "Dalton",
					"lastname": "Cantu",
					"id": 27
				},
				{
					"firstname": "Clinton",
					"lastname": "Branch",
					"id": 28
				},
				{
					"firstname": "Martena",
					"lastname": "Harrell",
					"id": 29
				},
				{
					"firstname": "Lev",
					"lastname": "Torres",
					"id": 30
				},
				{
					"firstname": "Myles",
					"lastname": "Vinson",
					"id": 31
				},
				{
					"firstname": "Medge",
					"lastname": "Castaneda",
					"id": 32
				},
				{
					"firstname": "Darryl",
					"lastname": "Hoover",
					"id": 33
				},
				{
					"firstname": "Dai",
					"lastname": "Schwartz",
					"id": 34
				},
				{
					"firstname": "Desiree",
					"lastname": "Harrison",
					"id": 35
				},
				{
					"firstname": "Eden",
					"lastname": "Perez",
					"id": 36
				},
				{
					"firstname": "Quin",
					"lastname": "Townsend",
					"id": 37
				},
				{
					"firstname": "Trevor",
					"lastname": "Mosley",
					"id": 38
				},
				{
					"firstname": "Olympia",
					"lastname": "Mosley",
					"id": 39
				},
				{
					"firstname": "Armando",
					"lastname": "Pope",
					"id": 40
				},
				{
					"firstname": "Amena",
					"lastname": "Gallegos",
					"id": 41
				},
				{
					"firstname": "Gillian",
					"lastname": "Calderon",
					"id": 42
				},
				{
					"firstname": "Daquan",
					"lastname": "Dejesus",
					"id": 43
				},
				{
					"firstname": "Nathaniel",
					"lastname": "Pierce",
					"id": 44
				},
				{
					"firstname": "Lacey",
					"lastname": "Bryant",
					"id": 45
				},
				{
					"firstname": "Pamela",
					"lastname": "Morton",
					"id": 46
				},
				{
					"firstname": "Isaac",
					"lastname": "Palmer",
					"id": 47
				},
				{
					"firstname": "Colin",
					"lastname": "Ochoa",
					"id": 48
				},
				{
					"firstname": "Brian",
					"lastname": "Woods",
					"id": 49
				},
				{
					"firstname": "Wanda",
					"lastname": "Quinn",
					"id": 50
				},
				{
					"firstname": "Cade",
					"lastname": "Parks",
					"id": 51
				},
				{
					"firstname": "Piper",
					"lastname": "Madden",
					"id": 52
				},
				{
					"firstname": "Buffy",
					"lastname": "Thomas",
					"id": 53
				},
				{
					"firstname": "Noah",
					"lastname": "Levy",
					"id": 54
				},
				{
					"firstname": "Lael",
					"lastname": "Joyce",
					"id": 55
				},
				{
					"firstname": "Orlando",
					"lastname": "Bradshaw",
					"id": 56
				},
				{
					"firstname": "Elliott",
					"lastname": "Mayer",
					"id": 57
				},
				{
					"firstname": "Ethan",
					"lastname": "Garrison",
					"id": 58
				},
				{
					"firstname": "Cherokee",
					"lastname": "Shelton",
					"id": 59
				},
				{
					"firstname": "Josiah",
					"lastname": "Walton",
					"id": 60
				},
				{
					"firstname": "Phillip",
					"lastname": "Logan",
					"id": 61
				},
				{
					"firstname": "Laurel",
					"lastname": "Riley",
					"id": 62
				},
				{
					"firstname": "Skyler",
					"lastname": "Franks",
					"id": 63
				},
				{
					"firstname": "Thomas",
					"lastname": "Mcclain",
					"id": 64
				},
				{
					"firstname": "Haley",
					"lastname": "Douglas",
					"id": 65
				},
				{
					"firstname": "Imogene",
					"lastname": "Craig",
					"id": 66
				},
				{
					"firstname": "Zahir",
					"lastname": "Wolf",
					"id": 67
				},
				{
					"firstname": "Indigo",
					"lastname": "Patrick",
					"id": 68
				},
				{
					"firstname": "Desirae",
					"lastname": "Frederick",
					"id": 69
				},
				{
					"firstname": "Zia",
					"lastname": "Ball",
					"id": 70
				},
				{
					"firstname": "Graiden",
					"lastname": "Jacobson",
					"id": 71
				},
				{
					"firstname": "Azalia",
					"lastname": "Wilkerson",
					"id": 72
				},
				{
					"firstname": "Tashya",
					"lastname": "Wallace",
					"id": 73
				},
				{
					"firstname": "Gannon",
					"lastname": "Crawford",
					"id": 74
				},
				{
					"firstname": "Kylan",
					"lastname": "Kramer",
					"id": 75
				},
				{
					"firstname": "Herman",
					"lastname": "Oliver",
					"id": 76
				},
				{
					"firstname": "Jocelyn",
					"lastname": "Burke",
					"id": 77
				},
				{
					"firstname": "Cooper",
					"lastname": "Delgado",
					"id": 78
				},
				{
					"firstname": "Imani",
					"lastname": "Mullins",
					"id": 79
				},
				{
					"firstname": "Ivor",
					"lastname": "Butler",
					"id": 80
				},
				{
					"firstname": "Craig",
					"lastname": "Montgomery",
					"id": 81
				},
				{
					"firstname": "Karyn",
					"lastname": "Sheppard",
					"id": 82
				},
				{
					"firstname": "Brianna",
					"lastname": "Stout",
					"id": 83
				},
				{
					"firstname": "Amir",
					"lastname": "Glover",
					"id": 84
				},
				{
					"firstname": "Kay",
					"lastname": "Joyce",
					"id": 85
				},
				{
					"firstname": "Paul",
					"lastname": "Richardson",
					"id": 86
				},
				{
					"firstname": "Jael",
					"lastname": "Fuentes",
					"id": 87
				},
				{
					"firstname": "Amanda",
					"lastname": "Fischer",
					"id": 88
				},
				{
					"firstname": "Hop",
					"lastname": "Sexton",
					"id": 89
				},
				{
					"firstname": "Baxter",
					"lastname": "Frazier",
					"id": 90
				},
				{
					"firstname": "Forrest",
					"lastname": "Hunter",
					"id": 91
				},
				{
					"firstname": "Carol",
					"lastname": "Wilkinson",
					"id": 92
				},
				{
					"firstname": "Iliana",
					"lastname": "Gordon",
					"id": 93
				},
				{
					"firstname": "Zena",
					"lastname": "Hinton",
					"id": 94
				},
				{
					"firstname": "Ira",
					"lastname": "Hart",
					"id": 95
				},
				{
					"firstname": "Alvin",
					"lastname": "Landry",
					"id": 96
				},
				{
					"firstname": "Yoko",
					"lastname": "Crosby",
					"id": 97
				},
				{
					"firstname": "Sheila",
					"lastname": "Foster",
					"id": 98
				},
				{
					"firstname": "Baker",
					"lastname": "Kidd",
					"id": 99
				},
				{
					"firstname": "Omar",
					"lastname": "Grimes",
					"id": 100
				}
			]
		}
	}
	
	removeFromList = (id) => {
		this.setState((state) => {
			let tempList = state.data.filter(item => item.id !== id)
			return {
				data:tempList
			}
		})
	}
	
	render() {
		return(
			<View>
				<FlatList data={this.state.data}
						renderItem={({item}) => {
								return(
									<View style={styles.rowStyle}>
										<Text style={styles.textStyle}>
											{item.firstname} {item.lastname}
										</Text>
										<Pressable 
										style={styles.buttonStyle}
										onPress={() => {this.removeFromList(item.id)}}>
											<Text>Remove</Text>
										</Pressable>
									</View>
								)
							}
						}
						keyExtractor={item => ""+item.id}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	rowStyle:{
		flexDirection:"row",
		height:60,
		alignItems:"center"
	},
	textStyle:{
		fontFamily:"sans-serif",
		fontSize:18,
		fontWeight:"bold"
	},
	buttonStyle:{
		width:80,
		height:50,
		borderRadius:5,
		backgroundColor:"red",
		alignItems:"center",
		justifyContent:"center",
		alignSelf:"flex-end"
	}
})