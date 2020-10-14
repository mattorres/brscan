import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

function Register() {
  const [textCpf, setTextCpf] = useState('');
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.text, styles.textHeader]}>
          Para começar, preencha as informações abaixo.
        </Text>
        <View>
          <Text style={[styles.text, styles.textLabel]}>CPF</Text>
          <TextInputMask
            value={textCpf}
            onChangeText={(text) => {
              setTextCpf(text);
            }}
            type="cpf"
            // ref={(ref) => (this.cpfField = ref)}
            style={styles.textInput}
          />
        </View>
      </View>

      <View style={styles.contentButton}>
        <TouchableOpacity onPress={() => navigate('RegisterDoc')} style={styles.button}>
          <Text style={[styles.text, styles.textButton]}>AVANÇAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
