import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const ItemMenu = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image source={icon} />
    <Text style={[styles.text]}>{text}</Text>
  </TouchableOpacity>
);

export default ItemMenu;
