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
  TextInput,
  AlertIOS,
} from 'react-native';
import styles from './styles';


var SearchBar = React.createClass({
  render: function() {
    return(
      <View style={styles.searchBar}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search for something..."
        returnKeyType="search"
        editable = {true}
        maxLength = {50}
        enablesReturnKeyAutomaticaly={true}
        style={styles.searchBarInput}
        />
        </View>
      );
  }
});

class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}


var MediaListView = React.createClass({
  render: function() {
    return (
      <View style={styles.content}>
      <SearchBar />
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
        rightButtonTitle: 'Search',
        onRightButtonPress: () => AlertIOS.alert(
          'YO',' AlertIOS.'
          )
         }} />
    );
  }
});




AppRegistry.registerComponent('nutApp', () => nutApp);
