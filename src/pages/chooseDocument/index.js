import React from 'react';
import {
  View, Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import IconRG from '../../../assets/Doc/IconRG.png';
import IconCNH from '../../../assets/Doc/IconCNH.png';
import BackButton from '../../Components/BackButton';
import IconLeft from '../../../assets/IconLeft.png';
import ItemMenu from '../../Components/ItemMenu';
import Line from '../../Components/Line';

function ChooseDocument() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <BackButton icon={IconLeft} />
      <View style={styles.contentHeader}>
        <Text style={[styles.text, styles.textHeader]}>
          Selecione o tipo de documento
        </Text>
      </View>
      <View style={styles.contentButton}>
        <ItemMenu
          icon={IconRG}
          text="USAR MEU RG"
          onPress={() => navigate('SendDocument', { tipoDocumento: 'RG' })}
        />
        <Line />
        <ItemMenu
          icon={IconCNH}
          text="USAR MINHA CNH"
          onPress={() => navigate('SendDocument', { tipoDocumento: 'CNH' })}
        />
      </View>
    </View>
  );
}

export default ChooseDocument;
