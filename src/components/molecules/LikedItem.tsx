import React from 'react';
import {Card, Paragraph} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import { LikedCharacters } from '~types/LikedCharacter';

interface Props {
  item: LikedCharacters;
  onItemPress: (item: LikedCharacters) => void
}

const LikedItem: React.FC<Props> = props => {
  const {item, onItemPress} = props;
  return (
    <TouchableOpacity style={{flex: 1}} onPress={()=>onItemPress(item)}>
      <Card style={{margin: 5}}>
        <Card.Content>
          <Paragraph style={{fontSize: 18, textAlign: 'center'}}>{item.name}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default LikedItem;
