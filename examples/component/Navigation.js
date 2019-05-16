import { createStackNavigator, TabNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react'
import { Easing, Animated, Alert } from 'react-native';

import { BottomNavigationView } from 'react-native-material-bottom-tabs-navigation';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

const Tabs = BottomNavigationView(
    {
      Tab1: { screen: Tab1 },
      Tab2: { screen: Tab2 },
      Tab3: { screen: Tab3 },
      Tab4: { screen: Tab4 },
    },
    {
      initialRouteName: 'Tab1',
      labeled: true,
      shifting: false,
      activeColor: 'black',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: 'white', color: 'black' },
    }
  )


const Route = createStackNavigator(
  {
    Tabs: { screen: Tabs },
  },
  {
      initialRouteName: "Tabs",
      headerMode: "none",
  }
);

const RouteContainer = createAppContainer(Route);

class Navigation extends Component{
    render() {
        return(
            <RouteContainer />
        )
    }
}

export default Navigation;