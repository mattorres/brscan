import React from 'react';
import { View, Image } from 'react-native';
import LineImage from '../../../assets/Doc/Line.png';
import styles from './styles';

const Line = () => (
  <View style={styles.line}>
    <Image source={LineImage} />
  </View>
);

export default Line;
