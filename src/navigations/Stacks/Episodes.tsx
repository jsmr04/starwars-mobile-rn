import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {EPISODES, FILM_DETAIL, CHARACTER} from '~navigations/screens';
import {sortEpisodes} from '~redux/reducers/componentActions';
import {GestureResponderEvent} from 'react-native';
import {RootState} from '~redux/store';

//Screens
import EpisodesScreen from '~screens/Episodes';
import FilmDetailScreen from '~screens/FilmDetail';
import CharacterDetailScreen from '~screens/CharacterDetail';

const Stack = createStackNavigator();

const EpisodesStack = () => {
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
  const HeaderRight = (props: {onPress: (event: GestureResponderEvent) => void}) => {
    const sorttingIcon = episodesSortingMode === 'asc' ? 'sort-desc' : 'sort-asc'
    
    return <TouchableOpacity style={{paddingHorizontal: 10}} onPress={props.onPress}>
            <Icon name={sorttingIcon} size={25} color={'black'} />
          </TouchableOpacity>
  };

  return (
    <Stack.Navigator >
      <Stack.Screen
        name={EPISODES}
        component={EpisodesScreen}
        options={{
          title: 'Episodes',
          headerRight: () => <HeaderRight onPress={toggle} />,
        }}
      />
      <Stack.Screen
        name={FILM_DETAIL}
        component={FilmDetailScreen}
        options={{title: 'Episode Information'}}
      />
      <Stack.Screen
        name={CHARACTER}
        component={CharacterDetailScreen}
        options={{title: 'Character'}}
      />
    </Stack.Navigator>
  );
};

export default EpisodesStack;
