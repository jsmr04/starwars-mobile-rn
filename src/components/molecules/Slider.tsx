import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

export interface SliderData {
  id: string;
  text: string;
}

interface Props {
  onSliderPress: (id: string, text: string) => void;
  data: SliderData[];
}

const CharacterSlider: React.FC<Props> = props => {
  const {onSliderPress, data} = props;
  return (
    <FlatList
      data={data}
      keyExtractor={x => x.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onSliderPress(item.id, item.text)}>
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
