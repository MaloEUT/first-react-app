'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
container: {
    flex: 1,
  },
  content: {
    flex: 1,

    backgroundColor: '#DAE4E7',
  },

  navbar: {
    backgroundColor: '#42476F',
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row',
  },
  navbarTitle: {
    backgroundColor: '#42476F',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    color: '#DAE4E7',

  },
  navbarButton: {
    backgroundColor: '#42476F',
    width: 50,
    flex: 0,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    paddingTop: 60,
    textAlign: 'center',
    margin: 10,
  },
  searchBar: {
    padding: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: 64,
  },
  searchBarInput: {
  	fontSize: 15,
    flex: 1,
    height: 30,
  },
  instructions: {

    textAlign: 'center',
    color: '#333333',

  },
});
