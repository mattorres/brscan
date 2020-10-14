import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import BackButton from '../../Components/BackButton';
import IconLeft from '../../../assets/IconLeft.png';
import ItemMenu from '../../Components/ItemMenu';
import IconRG from '../../../assets/Doc/IconRG.png';
import IconRGVerso from '../../../assets/Doc/IconRGVerso.png';
import IconRGFrenteVerso from '../../../assets/Doc/IconRGFrenteVerso.png';
import IconCNH from '../../../assets/Doc/IconCNH.png';
import IconCNHVerso from '../../../assets/Doc/IconCNHVerso.png';
import IconCNHFrenteVerso from '../../../assets/Doc/IconCNHFrenteVerso.png';
import Line from '../../Components/Line';

function SendDocument({ route }) {
  const { pop, navigate } = useNavigation();

  const { tipoDocumento } = route.params;

  const [iconeFrente, setIconeFrente] = useState(null);
  const [iconeVerso, setIconeVerso] = useState(null);
  const [iconeFrenteVerso, setIconeFrenteVerso] = useState(null);

  useEffect(() => {
    if (tipoDocumento === 'RG') {
      setIconeFrente(IconRG);
      setIconeVerso(IconRGVerso);
      setIconeFrenteVerso(IconRGFrenteVerso);
    } else {
      setIconeFrente(IconCNH);
      setIconeVerso(IconCNHVerso);
      setIconeFrenteVerso(IconCNHFrenteVerso);
    }
  }, [route.params?.tipoDocumento]);

  return (
    <View style={styles.container}>
      <BackButton icon={IconLeft} onPress={() => pop()} />
      <Text style={[styles.text, styles.textHeader]}>
        Escolha como quer enviar o seu
        {' '}
        {tipoDocumento}
        .
      </Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ItemMenu
          onPress={() => navigate('CapturePhoto')}
          icon={iconeFrente}
          text="FOTO DE FRENTE"
        />
        <Line />
        <ItemMenu
          onPress={() => navigate('CapturePhoto')}
          icon={iconeVerso}
          text="FOTO DO VERSO"
        />
        <Line />
        <ItemMenu
          onPress={() => navigate('CapturePhoto')}
          icon={iconeFrenteVerso}
          text="FRENTE E VERSO"
        />
      </View>
    </View>
  );
}

export default SendDocument;
