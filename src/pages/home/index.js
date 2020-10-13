import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import iconHome from '../../../assets/IconHome.png';
import Card from '../../Components/Card';
import Button from '../../Components/Button';

function Home() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Card icon={iconHome} title="BrSafe" subtitle="Bioface" />
      <Button text="INICIAR" onPress={() => navigate('Register')} />
    </View>
  );
}

export default Home;
