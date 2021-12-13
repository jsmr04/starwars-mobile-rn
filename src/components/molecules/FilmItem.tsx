import React from 'react';
import {Card, Paragraph} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {getFormattedDate} from '~helpers/utils';
import {FilmsEntity} from '~types';
import {formatDescription} from '~helpers/utils';

interface Props {
  item: FilmsEntity;
  onItemPress: (item: FilmsEntity) => void
}

const FilmItem: React.FC<Props> = props => {
  const {item, onItemPress} = props;
  return (
    <TouchableOpacity style={{flex: 1}} onPress={()=>onItemPress(item)}>
      <Card style={{margin: 5}}>
        <Card.Title
          title={props.item.title}
          subtitle={`Release date: ${getFormattedDate(item.releaseDate)}`}
        />
        <Card.Content>
          <Paragraph>{formatDescription(item.openingCrawl)}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default FilmItem;
