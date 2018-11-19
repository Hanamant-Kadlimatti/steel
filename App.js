/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Header} from 'react-native';
import {createStackNavigator} from 'react-navigation';


import MyTabs from './src/config/Navigation'

import Registercattle from  './src/containers/registration/registercattle/Registercattle'
import Registersire from    './src/containers/registration/registersire/Registersire'
import Cattlesummary from   './src/containers/registration/cattlesummary/Cattlesummary'
import Activitylog from    './src/containers/registration/activitylog/Activitylog'


const RootStack = createStackNavigator(
  {
    Home: {screen : MyTabs,
      navigationOptions: ({navigation}) => ({
        title: 'Welcome',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    Registercattle:{ screen : Registercattle,
      navigationOptions: ({navigation}) => ({
        title: 'Cattle Registration',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    Activitylog:{screen :  Activitylog,
      navigationOptions: ({navigation}) => ({
        title: 'Activity Log',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    Cattlesummary: {screen : Cattlesummary,
      navigationOptions: ({navigation}) => ({
        title: 'Cattle Summary',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },

    Registersire: {screen : Registersire,
      navigationOptions: ({navigation}) => ({
        title: 'Register Sire',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#212121'},
      })
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component<Props> {
  render() {
    return ( 

      <RootStack />
        
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
