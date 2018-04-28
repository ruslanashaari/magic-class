import React, { Component } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';

export default class test extends Component {
	render() {
		return (
			<KeyboardAvoidingView style={styles.container}>
				<Text style={styles.text}>Warning : {this.props.myText}</Text>
			</KeyboardAvoidingView>
		);
	}
}

const styles = {
	container: {
		width:300,
		height:50,
		padding: 10,
		marginTop: 10,
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