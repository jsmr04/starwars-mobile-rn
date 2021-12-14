import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '~theme';

interface Props {
  iconName: string;
  text: string;
  value: string;
}
const CountIndicator: React.FC<Props> = props => {
  const {iconName, text, value} = props;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Icon
          style={{alignSelf: 'center'}}
          name={iconName}
          size={45}
          color={color.primary}
        />
        <View style={{alignSelf: 'stretch'}}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}>{value}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '33%'},
  card: {margin: 5, alignItems: 'center', paddingVertical: 3},
  text: {textAlign: 'center', fontSize: 18},
});

export default CountIndicator;
