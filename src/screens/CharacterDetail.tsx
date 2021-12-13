import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface Props {
  navigation: NavigationProp<any, string, any, any>;
  route: RouteProp<
    {
      params: {
        characterId: string;
      };
    },
    'params'
  >;
}

const Character:React.FC<Props> = (props) => {
  const {navigation, route} = props;
  const {characterId} = route.params;

  useEffect(() => {
    //TODO: Do something
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>CHARACTER</Text>
      </View>
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Character;
