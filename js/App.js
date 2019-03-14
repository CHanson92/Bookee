/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './config/styles';
import ListContainer from './components/ListContainer/ListContainer';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListContainer />
      </View>
    );
  }
}

export default App;
