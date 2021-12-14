import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

export interface SliderData {
  id: string;
  text: string;
}

interface Props {
  onCharacterPress: (characterId: string) => void;
  data: SliderData[];
}

const CharacterSlider: React.FC<Props> = props => {
  const {onCharacterPress, data} = props;
  return (
    <FlatList
      data={data}
      keyExtractor={x => x.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onCharacterPress(item.id)}>
          <Card style={styles.card}>
            <Card.Content>
              <Paragraph style={styles.text}>{item.text}</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  card: {padding: 5, margin: 5},
  text: {fontSize: 17},
});

export default CharacterSlider;
