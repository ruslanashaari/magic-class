import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Button, Image, TextInput, Alert } from 'react-native';
import Test from './src/test';

export default class App extends React.Component {

  state = {
      myText: ''
  }

  openAlert(){
    // console.log('hi');
    Alert.alert(
      `${this.state.myText}`,
      'Your Alert Message',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image
          style={styles.image}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Text style={styles.disclaimer}>This app is just for testing purposes. It'll do nothing except playing around and asquare. Get it?</Text>
        <Test myText="For IE9 Only"/>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(text) => this.setState({ myText:text })}
        />

        <Button
        style={styles.button} 
        title="Submit" onPress={ this.openAlert.bind(this) }
        // title="Submit" onPress={()=>console.log(this.state.myText)
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', //default is column
    // justifyContent: 'space-between', 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disclaimer: {
    width: 250,
    padding: 10,
    // alignItems: 'center',    
    // justifyContent: 'center',
  },
  text: {
    width:300,
    height:50,
    padding: 10,
    backgroundColor:'#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 10,
    width: 100,
    height: 100,
  },
  button: {
    margin: 10,
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 50,
  }
});
