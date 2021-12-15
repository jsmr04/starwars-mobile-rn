import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LikedList from '~components/organisms/LIkedList';
import * as favoriteStorage from "~storage/favorite";
import { LikedCharacters } from '~types/LikedCharacter';
import { CHARACTER } from "~navigations/screens";

interface Props {
  navigation: NavigationProp<any, string, any, any>;
}

const LikedCharacter:React.FC<Props> = (props) => {
  const {navigation} = props
  const [likedCharacter, setLikedCharacter] = useState<LikedCharacters[]>([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const data = await favoriteStorage.getAll()
      if (data){
        const jsonData:LikedCharacters[]  = data?.reduce((acc: any[], x) => [...acc, JSON.parse(x)],[])
        setLikedCharacter(jsonData)
      }
    });

    return unsubscribe;
  }, [navigation]);

  //@ts-ignore
  const goToCharacterDetail = (item: LikedCharacters) => navigation.push(CHARACTER, {characterId: item.id, name: item.name});

  return (
    <SafeAreaView style={{flex: 1}}>
      <LikedList data={likedCharacter} loading={false} onItemPress={goToCharacterDetail}/>
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default LikedCharacter;
