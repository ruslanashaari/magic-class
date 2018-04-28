import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class test extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Fixed Text : {this.props.myText}</Text>
			</View>
		);
	}
}

const styles = {
	container: {
		width:300,
		height:50,
		padding: 10,
		backgroundColor:'#eaeaea',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		margin: 10,
		fontSize: 16,
		color: 'red',
		fontWeight: 'bold' 
	}
};