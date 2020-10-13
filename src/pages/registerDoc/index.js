import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import Card from '../../Components/Card';
import Button from '../../Components/Button';
import BackButton from '../../Components/BackButton';

import DocIconFrenteDocumento from '../../../assets/Doc/DocIconFrenteDocumento.png';
import DocIconAcessoCamera from '../../../assets/Doc/DocIconAcessoCamera.png';
import DocIconLuz from '../../../assets/Doc/DocIconLuz.png';
import DocIconPlastico from '../../../assets/Doc/DocIconPlastico.png';
import DocIconFundoEstampado from '../../../assets/Doc/DocIconFundoEstampado.png';
import DocIconReflexo from '../../../assets/Doc/DocIconReflexo.png';
import IconLeft from '../../../assets/IconLeft.png';

import messages from '../../messages';

function RegisterDoc() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [textButton, setTextButton] = useState('AVANÇAR');
  const swiper = useRef(null);

  const nextSlide = () => {
    swiper.current.scrollBy(1);
    const { index } = swiper.current.state;

    if (index === 0) setTextButton('AUTORIZAR');
    else setTextButton('ENTENDI');
  };

  return (
    <View style={styles.container}>
      <View>
        <BackButton icon={IconLeft} />
      </View>
      <Swiper
        ref={swiper}
        showsPagination={false}
      >
        <View style={styles.content}>
          <Card
            icon={DocIconFrenteDocumento}
            title={messages.MSG_001}
            subtitle={messages.MSG_005}
          />
        </View>
        <View style={styles.content}>
          <Card
            icon={DocIconAcessoCamera}
            title={messages.MSG_002}
            subtitle=""
          />
        </View>
        <View style={styles.content}>
          <Card
            icon={DocIconLuz}
            title={messages.MSG_003}
            subtitle={messages.MSG_006}
          />
        </View>
        <View style={styles.content}>
          <Card
            icon={DocIconPlastico}
            title={messages.MSG_007}
            subtitle=""
          />
        </View>
        <View style={styles.content}>
          <Card
            icon={DocIconFundoEstampado}
            title={messages.MSG_008}
            subtitle=""
          />
        </View>
        <View style={styles.content}>
          <Card
            icon={DocIconReflexo}
            title={messages.MSG_009}
            subtitle=""
          />
        </View>
      </Swiper>
      <Button onPress={() => nextSlide()} text={textButton} />
    </View>
  );
}

export default RegisterDoc;
