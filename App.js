import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import ExchangeScreen from "./screens/ExchangeScreen";
import HomeScreen from "./screens/HomeScreen";
import SignupLogininScreen from "./screens/SignupLogininScreen";
import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from './screens/SettingScreen'
import CustomSideBarMenu  from './components/CustomSideBarMenu';

export default function App() {
  return (<AppContainer />);
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
  },
});
const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
    },
  Setting : {
    screen : SettingScreen
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

  const switchNavigator = createSwitchNavigator({
    SignupLogininScreen:{screen: SignupLogininScreen}, 
    AppDrawerNavigator : AppDrawerNavigator,
  })
const AppContainer = createAppContainer(switchNavigator);


// import React from 'react';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
// import SignupLogininScreen from './screens/SignupLogininScreen';
// import { AppDrawerNavigator } from './components/AppDrawerNavigator'

// export default function App() {
//   return (
//     <AppContainer/>
//   );
// }

// const switchNavigator = createSwitchNavigator({
//   SignupLogininScreen:{screen: SignupLogininScreen},
//   Drawer: AppDrawerNavigator
// })

// const AppContainer = createAppContainer(switchNavigator);