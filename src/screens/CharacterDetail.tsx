import {NavigationProp, RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_CHARACTER} from '~graphQl/query';
import {Character} from '~types';
import Information, {InformationData} from '~components/organisms/Information';
import {SliderData} from '~components/molecules/Slider';
import {showErrorAlert} from '~helpers/errorHelper';
import {FILM_DETAIL} from '~navigations/screens';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentCharacterId } from "~redux/reducers/likedCharacters";

interface Props {
  navigation: NavigationProp<any, string, any, any>;
  route: RouteProp<
    {
      params: {
        characterId: string;
        name: string;
      };
    },
    'params'
  >;
}

const FilmDetail: React.FC<Props> = props => {
  const dispatch = useDispatch()
  const {navigation, route} = props;
  const {characterId, name} = route.params;
  const [characterData, setCharacterData] = useState<InformationData>();
  const [films, setFilms] = useState<SliderData[]>();
  const {loading, error, data} = useQuery<Character>(GET_CHARACTER, {
    variables: {characterId},
  });
  const person = data?.person;

  useEffect(() => {
    if (!person) return;

    //Set up data
    const informationData: InformationData = {
      title: person.name,
      subtitle: `Birth Year: ${person.birthYear}`,
      firstIndicatorIcon: 'man-outline',
      firstIndicatorText: 'Height',
      firstIndicatorValue: person.height.toString(),
      secondIndicatorIcon: 'body-outline',
      secondIndicatorText: 'Mass',
      secondIndicatorValue: person.mass.toString(),
      thirdIndicatorIcon: 'ios-planet-outline',
      thirdIndicatorText: 'Homeworld',
      thirdIndicatorValue: person.homeworld.name,
    };
    setCharacterData(informationData);

    //Set up slider data
    const personFilms = person?.filmConnection?.films;
    if (!personFilms) return;
    const sliderData: SliderData[] = personFilms.map(x => ({
      id: x.id,
      text: x.title,
    }));
    setFilms(sliderData);
  }, [person]);

  useEffect(() => {
    if (error) showErrorAlert(error);
  }, [error]);

  useEffect(()=>{
    dispatch(setCurrentCharacterId({currentCharacter: {id: characterId, name: name}}))
  },[navigation])

  //@ts-ignore
  const goToFilmDetail = (filmId: string) => navigation.push(FILM_DETAIL, {filmId});

  return (
    <ScrollView style={styles.scroll}>
      {characterData && films && (
        <Information
          data={characterData}
          sliderData={films}
          onSliderItemPress={goToFilmDetail}
          loading={loading}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {flex: 1},
});

export default FilmDetail;
