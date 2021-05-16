import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';

import styles from './Box.styles';

interface BoxProps {
  value: number;
}

const Box: React.FC<BoxProps> = ({value}) => {
  const width = useWindowDimensions().width;

  return (
    <View
      style={{
        width: width * 0.2,
        height: width * 0.2,
        ...styles.container,
      }}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default Box;
