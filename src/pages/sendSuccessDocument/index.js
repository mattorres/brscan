import React from 'react';

import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../../Components/Card';
import Button from '../../Components/Button';
import styles from './styles';

function SendSuccessDocument() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Card title="Pronto!" subtitle="Seu documento foi recebido." />
      <Button text="FINALIZAR" onPress={() => navigate('ChooseDocument')} />
    </View>
  );
}

export default SendSuccessDocument;
