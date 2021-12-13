import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useQuery} from '@apollo/client';
import {useSelector} from 'react-redux';
import {NavigationProp} from '@react-navigation/native';
import {FilmsEntity, Root} from '~types';
import {showErrorAlert} from '~helpers/errorHelper';
import {GET_FILMS} from "~graphQl/query";
import FilmList from '~components/organisms/FilmList';
import {RootState} from '~redux/store';
import {FILM_DETAIL} from '~navigations/screens';

interface Props {
  navigation: NavigationProp<any, string, any, any>;
};

const Film: React.FC<Props> = (props) => {
  const {navigation} = props
  const {loading, error, data: StarWarsData} = useQuery<Root>(GET_FILMS);
  const films = StarWarsData?.allFilms?.films;
  const [sortedData, setSortedData] = useState<FilmsEntity[]>([])

  const {episodesSortingMode} = useSelector(
    (state: RootState) => state.component,
  );

  useEffect(() => {
    if (!films) return
    
    //Sorting functions
    const sortAsc = (a:FilmsEntity, b:FilmsEntity) => a.releaseDate > b.releaseDate ? 1 : -1
    const sortDesc = (a:FilmsEntity, b:FilmsEntity) => a.releaseDate < b.releaseDate ? 1 : -1
    const sort = episodesSortingMode === 'asc' ? sortAsc : sortDesc

    //Sort data
    const newSortedData = [...films].sort(sort)
    setSortedData(newSortedData)
  }, [films, episodesSortingMode]);

  useEffect(() => {
    if (error) showErrorAlert(error);
  }, [error]);

  //Go to film detail screen
  const goToFilmDetail = (film: FilmsEntity)=>navigation.navigate(FILM_DETAIL, {film: film})

  return (
    <SafeAreaView style={{flex: 1}}>
      <FilmList data={sortedData} loading={loading} onItemPress={goToFilmDetail}/>
    </SafeAreaView>
  );
};

export default Film;
