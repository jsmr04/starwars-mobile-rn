import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

type Props = {
  color?: string;
  size?: 'small' | 'large';
};
function Loader(props: Props) {
  const {color = 'blue', size = 'large'} = props;

  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator animating color={color} size={size} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    justifyContent: 'center',
  },
  loaderContainer: {
    alignSelf: 'center',
  },
});

export default Loader;
