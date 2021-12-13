import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, ScrollView, Alert, FlatList, TouchableOpacity} from 'react-native';
import {Card, Paragraph, Text} from 'react-native-paper';
import {getFormattedDate} from '~helpers/utils';
import {CharactersEntity, FilmsEntity} from '~types';
import Icon from "react-native-vector-icons/Ionicons";
import { color } from "~theme";
import { CHARACTER } from "~navigations/screens";


interface Props {
  navigation: NavigationProp<any, string, any, any>;
  route: RouteProp<
    {
      params: {
        film: FilmsEntity;
      };
    },
    'params'
  >;
}

const CountIndicator = (props: {
  iconName: string;
  text: string;
  count: number;
}) => {
  const {iconName, text, count} = props;

  return (
    <View style={{width: '33%'}}>
      <Card style={{margin: 5, alignItems: 'center', paddingVertical: 3}}>
        <Icon style={{alignSelf: 'center'}} name={iconName} size={45} color={color.primary} />
        <View style={{alignSelf: 'stretch'}}>
          <Text style={{textAlign: 'center', fontSize: 18}}>{text}</Text>
          <Text style={{textAlign: 'center', fontSize: 18}}>{count}</Text>
        </View>
      </Card>
    </View>
  );
};

const FilmDetail: React.FC<Props> = props => {
  const {navigation, route} = props;
  const {film} = route.params;
  const characters = film?.characterConnection?.characters || [] as CharactersEntity[]

  const goToCharacterDetail = (characterId: string)=>navigation.navigate(CHARACTER, {characterId})

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{width: '100%', marginVertical: 5}}>
          <Card style={{margin: 5}}>
            <Card.Title
              titleStyle={{fontSize: 25}}
              subtitleStyle={{fontSize: 17}}
              title={film.title}
              subtitle={`Release date: ${getFormattedDate(film.releaseDate)}`}
            />
          </Card>
        </View>
        <View style={{width: '100%', marginBottom: 5, flexDirection:'row'}}>
          <CountIndicator iconName={'people-circle-outline'} text={'Species'} count={film.speciesConnection.totalCount} />
          <CountIndicator iconName={'ios-planet-outline'} text={'Planets'} count={film.planetConnection.totalCount} />
          <CountIndicator iconName={'rocket-outline'} text={'Vehicles'} count={film.vehicleConnection.totalCount} />
        </View>
        <View style={{width: '100%', marginBottom: 5}}>
          <Card style={{margin: 5}}>
            <Card.Content>
              <Paragraph style={{textAlign: 'center'}}>
                {film.openingCrawl}
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
        <FlatList
          data={characters}
          keyExtractor={x=>x.id}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>goToCharacterDetail(item.id)}>
            <Card style={{padding: 5, margin: 5}}>
              <Card.Content>
                <Paragraph style={{fontSize: 17}}>
                  {item.name}
                </Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          )}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', paddingBottom: 10},
});

export default FilmDetail;
