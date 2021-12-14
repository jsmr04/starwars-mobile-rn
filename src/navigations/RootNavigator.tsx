import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureResponderEvent} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~redux/store';
import {sortEpisodes} from '~redux/reducers/componentActions';
import {HOME, FILM_DETAIL, CHARACTER} from '~navigations/screens';

//Navigators
import HomeTabNavigator from '~navigations/HomeTabNavigator';

//Screens
import FilmDetailScreen from '~screens/FilmDetail';
import CharacterDetailScreen from '~screens/CharacterDetail';

const Stack = createStackNavigator();

const RootStack = () => {
  const dispatch = useDispatch();
  const {episodesSortingMode} = useSelector(
    (state: RootState) => state.component,
  );

  //Sort episodes
  const toggle = () => {
    const mode = episodesSortingMode === 'asc' ? 'desc' : 'asc';
    dispatch(sortEpisodes({episodesSortingMode: mode}));
  };

  //Header
  const HeaderRight = (props: {
    onPress: (event: GestureResponderEvent) => void;
  }) => {
    const sorttingIcon =
      episodesSortingMode === 'asc' ? 'sort-desc' : 'sort-asc';

    return (
      <TouchableOpacity style={{paddingHorizontal: 10}} onPress={props.onPress}>
        <Icon name={sorttingIcon} size={25} color={'black'} />
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} 
          component={HomeTabNavigator} 
          options={{
            title: 'Home',
            headerRight: () => <HeaderRight onPress={toggle} />,
          }}
          />
        <Stack.Screen
          name={FILM_DETAIL}
          component={FilmDetailScreen}
        />
        <Stack.Screen
          name={CHARACTER}
          component={CharacterDetailScreen}
          options={{title: 'Character'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
