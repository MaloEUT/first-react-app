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
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  navbarTitle: {
    backgroundColor: '#42476F',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 2,
    color: '#DAE4E7'
  },
  navbarButton: {
    backgroundColor: '#42476F',
    width: 50,
    flex: 0,
    alignItems: 'center',
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