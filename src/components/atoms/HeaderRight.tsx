import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GestureResponderEvent} from 'react-native';
import {color} from '~theme';

//Header
const HeaderRight = (props: {
  onPress: (event: GestureResponderEvent) => void;
  icon: string;
  pressedIcon: string;
  pressed: boolean;
}) => {
  const {pressed, icon, pressedIcon, onPress} = props;
  const iconName = pressed ? pressedIcon : icon;

  return (
    <TouchableOpacity style={{paddingHorizontal: 10}} onPress={props.onPress}>
      <Icon name={iconName} size={25} color={color.primary} />
    </TouchableOpacity>
  );
};

export default HeaderRight