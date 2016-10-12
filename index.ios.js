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
  NavigatorIOS,
} from 'react-native';
import styles from './styles';



var MediaListView = React.createClass({
  render: function() {
    return ( 
      <View style={styles.content}>
      <Text style={styles.welcome}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
      </View>
    );
  }
});


var nutApp = React.createClass({
  render: function() {
    return ( <NavigatorIOS 
      style={styles.container}
      barTintColor='#1B5064'
      titleTextColor='#DAE4E7'
      tintColor='#FEC503'
      initialRoute={{
        component: MediaListView,
        title: 'NutApp',
        rightButtonTitle: 'Search'
         }} />
    );
  }
});



AppRegistry.registerComponent('nutApp', () => nutApp);