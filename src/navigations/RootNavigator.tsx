import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Navigators
import HomeTabNavigator from "~navigations/HomeTabNavigator";

const RootStack = () => {
  return (
    <NavigationContainer>
      <HomeTabNavigator/>
    </NavigationContainer>
  );
};

export default RootStack;
