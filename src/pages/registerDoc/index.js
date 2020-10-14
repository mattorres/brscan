import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import DocIconTrasDocumento from '../../../assets/Doc/DocIconTrasDocumento.png';
import IconLeft from '../../../assets/IconLeft.png';

import messages from '../../messages';

function RegisterDoc() {
  const [textButton, setTextButton] = useState('AVANÇAR');
  const swiper = useRef(null);
  const { navigate } = useNavigation();

  const nextSlide = () => {
    const { index } = swiper.current.state;

    if (index === 0) {
      setTextButton('AUTORIZAR');
      swiper.current.scrollTo(index + 1);
    } else if (index === 1) {
      swiper.current.scrollTo(index + 1);
      setTextButton('ENTENDI');
    } else if (index > 1) {
      swiper.current.scrollTo(index + 1);
      if (index === 7) {
        navigate('ChooseDocument');
      }
    }
  };

  const prevSlide = () => {
    const { index } = swiper.current.state;
    if (index > 0) {
      swiper.current.scrollTo(index - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <BackButton onPress={() => prevSlide()} icon={IconLeft} />
      </View>
      <Swiper ref={swiper} showsPagination={false} loop={false}>
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
          <Card icon={DocIconPlastico} title={messages.MSG_007} />
        </View>
        <View style={styles.content}>
          <Card
            icon={DocIconFundoEstampado}
            title={messages.MSG_008}
            subtitle=""
          />
        </View>
        <View style={styles.content}>
          <Card icon={DocIconReflexo} title={messages.MSG_009} />
        </View>
        <View style={styles.content}>
          <Card
            icon={DocIconFrenteDocumento}
            title={messages.MSG_0010}
            subtitle={messages.MSG_0011}
          />
        </View>
        <View style={styles.content}>
          <Card
            icon={DocIconTrasDocumento}
            title={messages.MSG_0012}
            subtitle={messages.MSG_0013}
          />
        </View>
      </Swiper>
      <Button onPress={() => nextSlide()} text={textButton} />
    </View>
  );
}

export default RegisterDoc;
