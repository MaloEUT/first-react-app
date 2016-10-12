/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *

 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import styles from './styles';


export default class nutApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.navbar}>
      <View style={styles.navbarButton}></View>
      <Text style={styles.navbarTitle}>NutApp</Text>
      <Text style={styles.navbarButton}>Search</Text>
      </View>
      <View style={styles.content}>
      <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      </View>
    );
  }
}



AppRegistry.registerComponent('nutApp', () => nutApp);