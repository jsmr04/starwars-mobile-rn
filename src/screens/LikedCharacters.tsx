import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const LikedCharacter = () => {

  useEffect(() => {
    //TODO: Do something
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>LIKED CHARACTER</Text>
      </View>
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default LikedCharacter;
