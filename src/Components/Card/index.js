import React from 'react';
import { Image, View, Text } from 'react-native';

import styles from './styles';

const Card = ({ icon, title, subtitle }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={icon} />
    <View style={styles.contentText}>
      <Text style={[styles.text, styles.title]}>{title}</Text>
      <Text style={[styles.text, styles.subTitle]}>{subtitle}</Text>
    </View>
  </View>
);

export default Card;
