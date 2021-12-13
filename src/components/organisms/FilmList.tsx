import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {FilmsEntity} from '~types';
import {Loader} from '~components/atoms';
import {FilmItem} from '~components/molecules';

interface Props {
  data: FilmsEntity[] | null | undefined;
  loading: boolean;
  onItemPress: (item: FilmsEntity) => void
}

const FilmList: React.FC<Props> = props => {
  const {data, loading, onItemPress} = props;
  return (
      <View style={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            data={data}
            keyExtractor={x => x.id}
            renderItem={({item}) => <FilmItem item={item} onItemPress={onItemPress} />}
          />
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-start', alignItems: 'stretch'},
});

export default FilmList;
