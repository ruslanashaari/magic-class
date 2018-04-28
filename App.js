import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Test from './src/test';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Test myText="Iphone 7"/>
        <Image
        style={styles.image}
        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Button
        style={styles.button} 
        title="Push Me" onPress={()=>console.log('hello')}
        />
      </View>
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
});
