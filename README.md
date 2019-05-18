# react-native-material-bottom-tabs-navigation

This library works with `react-navigation`, the motivation to make this was to avoid to install `react-native-paper` and `react-native-vector-icon`. This library use component from `react-navigation-material-bottom-tabs` But it has peer dependency of `react-native-reanimated`.

# Installation

`npm i react-native-material-bottom-tabs-navigation`

# Usage

```javascript
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

  ```
# Contributing

Feel free to send PR
  
# Credit

[Satyajit Sahoo](https://github.com/satya164) and `react-navigation` team
