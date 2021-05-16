import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

interface ButtonProps {
  title: string;
  style?: object;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
