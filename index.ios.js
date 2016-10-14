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
  TimerMixin,
  AlertIOS,
} from 'react-native';
import styles from './styles';

var API_URL = 'https://itunes.apple.com/search';

var LOADING = {};

var resultsCache = {
  dataForQuery: {}
};


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
        onChange={this.props.onSearch}
        />
        </View>
      );
  }
});


var MediaListView = React.createClass({
  mixins:[TimerMixin],

  timeoutID: (null: any),

  _urlForQuery : function(query: string): string {
    if (query.length > 5) {
      return API_URL + '?media=movie&term=' + encodeURIComponent(query);
    } else {
      return API_URL + 'media=movie&term=mission+impossible';
    }
  },

  searchMedia: function (query: string) {
    this.timeoutID = null;

    var cachedResultsForQuery = resultsCache.dataForQuery[query];
    if(cachedResultsForQuery) {
      if (!LOADING[query]) {
      AlertIOS.alert('Nuber of results', cachedResultsForQuery.length + ' cached results');
      }
    } else {
      var queryURL = this._urlForQuery(query);

       if (!queryURL) return;

       LOADING[query] = true;
       resultsCache.dataForQuery[query] = null;

       fetch(queryURL)
         .then((response) => response.json())
         .catch((error) => {
           LOADING[query] = false;
           resultsCache.dataForQuery[query] = undefined;
         })
         .then((responseData) => {
           LOADING[query] = false;
           resultsCache.dataForQuery[query] = responseData.results;

           AlertIOS.alert('Number of results', responseData.resultCount + ' results');
         });
    }
  },


  render: function() {
    return (
      <View style={styles.content}>
      <SearchBar
      onSearch={(event) => {
        var searchString = event.nativeEvent.text;

        
        this.timeoutID = This.setTimeout(() => this.searchMedia(searchString), 500 );
      }}


       />
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
