import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~redux/store';
import {sortEpisodes} from '~redux/reducers/componentActions';
import {HOME, FILM_DETAIL, CHARACTER} from '~navigations/screens';
import HeaderRight from "~components/atoms/HeaderRight";
import * as favoriteStorage from "~storage/favorite";

//Navigators
import HomeTabNavigator from '~navigations/HomeTabNavigator';

//Screens
import FilmDetailScreen from '~screens/FilmDetail';
import CharacterDetailScreen from '~screens/CharacterDetail';

const Stack = createStackNavigator();

const RootStack = () => {
  const [isLiked, setLiked] = useState(false)
  const dispatch = useDispatch();
  const {episodesSortingMode} = useSelector(
    (state: RootState) => state.component,
  );
  const {currentCharacter} = useSelector(
    (state: RootState) => state.likedCharacter,
  );

  useEffect(()=>{
    markLikedCharacter()
  },[currentCharacter])

  console.log("currentCharacterId ",  currentCharacter)

  //Sort episodes
  const sort = () => {
    const mode = episodesSortingMode === 'asc' ? 'desc' : 'asc';
    dispatch(sortEpisodes({episodesSortingMode: mode}));
  };

  const markLikedCharacter = async ()=>{
    if (!currentCharacter?.id) return
    const exists = await favoriteStorage.exists(currentCharacter.id)
    setLiked(exists!)
  }

  const like = async () => {
    if (currentCharacter?.id) {
      const exists = await favoriteStorage.exists(currentCharacter.id);
      
      if (exists) {
        await favoriteStorage.remove(currentCharacter?.id);
      } else {
        await favoriteStorage.save(
          currentCharacter.id,
          JSON.stringify(currentCharacter),
        );
      }
      await markLikedCharacter()
    }
  };


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} 
          component={HomeTabNavigator} 
          options={{
            title: 'Home',
            headerRight: () => (
              <HeaderRight 
                icon={'sort-desc'}
                pressedIcon={'sort-asc'}
                pressed={episodesSortingMode === 'asc' }
                onPress={sort} />),
          }}
          />
        <Stack.Screen
          name={FILM_DETAIL}
          component={FilmDetailScreen}
          options= {{title: 'Film'}}
        />
        <Stack.Screen
          name={CHARACTER}
          component={CharacterDetailScreen}
          options={{title: 'Character', 
          headerRight: () => (
            <HeaderRight 
              icon={'heart-o'}
              pressedIcon={'heart'}
              pressed={isLiked}
              onPress={like} />),
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
