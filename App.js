import * as React from 'react';
import * as Font from 'expo-font';
import { Platform, StyleSheet, View } from 'react-native';

/* 
 * While Unimodules is in preview, this is required (see:
 * https://github.com/expo/expo/blob/master/packages/expo-font/README.md#configure-for-javascript)
 */
StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily);

import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="ios-add" size={50} />
        <Ionicons name="ios-airplane" size={50} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
