import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const BackButton = ({ icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image source={icon} />
  </TouchableOpacity>
);
export default BackButton;
