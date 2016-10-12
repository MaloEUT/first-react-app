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
  AlertIOS,
} from 'react-native';
import styles from './styles';
import MediaListView from './media-list-view';



var nutApp = React.createClass({
  render: function() {
    return ( 
      <NavigatorIOS 
      style={styles.container}
      barTintColor='#1B5064'
      titleTextColor='#DAE4E7'
      tintColor='#FEC503'
      initialRoute={{
        component: MediaListView,
        title: 'NutApp',
        rightButtonTitle: 'Search',
        onRightButtonPress: () => AlertIOS.alert(
          'YO','clic ok . ;-)'
          )
         }} />
    );
  }
});



AppRegistry.registerComponent('nutApp', () => nutApp);