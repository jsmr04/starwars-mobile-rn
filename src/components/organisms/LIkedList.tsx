import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Loader} from '~components/atoms';
import {LikedItem} from '~components/molecules';
import { LikedCharacters } from '~types/LikedCharacter';

interface Props {
  data: LikedCharacters[] | null | undefined;
  loading: boolean;
  onItemPress: (item: LikedCharacters) => void
}

const LikedList: React.FC<Props> = props => {
  const {data, loading, onItemPress} = props;
  return (
      <View style={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            data={data}
            keyExtractor={x => x.id}
            renderItem={({item}) => <LikedItem item={item} onItemPress={onItemPress} />}
          />
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-start', alignItems: 'stretch'},
});

export default LikedList;
