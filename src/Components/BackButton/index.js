import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const BackButton = ({ icon, onPress }) => (
  <TouchableOpacity style={{ marginTop: 80, marginLeft: 20 }}>
    <Image source={icon} />
  </TouchableOpacity>
);
export default BackButton;
