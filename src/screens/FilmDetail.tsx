import {NavigationProp, RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Film} from '~types';
import {CHARACTER} from '~navigations/screens';
import Information, {InformationData} from '~components/organisms/Information';
import {SliderData} from '~components/molecules/Slider';
import {getFormattedDate} from '~helpers/utils';
import {useQuery} from '@apollo/client';
import {GET_FILM} from '~graphQl/query';

interface Props {
  navigation: NavigationProp<any, string, any, any>;
  route: RouteProp<
    {
      params: {
        filmId: string;
      };
    },
    'params'
  >;
}

const FilmDetail: React.FC<Props> = props => {
  const {navigation, route} = props;
  const {filmId} = route.params;
  const [filmData, setFilmData] = useState<InformationData>();
  const [characters, setCharacters] = useState<SliderData[]>();

  const {loading, error, data} = useQuery<Film>(GET_FILM, {
    variables: {filmId},
  });
  const film = data?.film;

  useEffect(() => {
    if (!film) return;

    //Set up data
    const informationData: InformationData = {
      title: film.title,
      subtitle: `Release date: ${getFormattedDate(film.releaseDate)}`,
      firstIndicatorIcon: 'people-circle-outline',
      firstIndicatorText: 'Species',
      firstIndicatorValue: film.speciesConnection.totalCount.toString(),
      secondIndicatorIcon: 'ios-planet-outline',
      secondIndicatorText: 'Planets',
      secondIndicatorValue: film.planetConnection.totalCount.toString(),
      thirdIndicatorIcon: 'rocket-outline',
      thirdIndicatorText: 'Vehicles',
      thirdIndicatorValue: film.vehicleConnection.totalCount.toString(),
      description: film.openingCrawl,
    };
    setFilmData(informationData);

    //Set up slider data
    const filmCharacters = film?.characterConnection?.characters;
    if (!filmCharacters) return;
    const sliderData: SliderData[] = filmCharacters.map(x => ({
      id: x.id,
      text: x.name,
    }));
    setCharacters(sliderData);
  }, [film]);

  //@ts-ignore
    const goToCharacterDetail = (characterId: string, name: string) => navigation.push(CHARACTER, {characterId, name});

  return (
    <ScrollView style={styles.scroll}>
      {filmData && characters && (
        <Information
          data={filmData}
          sliderData={characters}
          onSliderItemPress={goToCharacterDetail}
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
