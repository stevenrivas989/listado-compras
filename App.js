import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from "./src/base/modules/AppBar/AppBar";
import { StatusBar } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppBar></AppBar>
      </View>
    );
  }

}
