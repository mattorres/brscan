import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const CloseButton = ({ icon }) => (
  <TouchableOpacity>
    <Image source={icon} />
  </TouchableOpacity>
);

export default CloseButton;
