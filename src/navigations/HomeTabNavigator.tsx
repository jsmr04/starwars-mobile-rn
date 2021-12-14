import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EPISODES_STACK, LIKED_CHARACTERS_STACK} from '~navigations/screens';

//Screens
import EpisodesStack from '~screens/Episodes';
import LikedCharactersScreen from '~screens/LikedCharacters';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={EPISODES_STACK}
        component={EpisodesStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="film" size={24} color={color} />
          ),
          title: 'Episodes'
        }}
      />
      <Tab.Screen
        name={LIKED_CHARACTERS_STACK}
        component={LikedCharactersScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="person" size={24} color={color} />
          ),
          title: 'Liked Characters'
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
