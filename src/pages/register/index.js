import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

function Register() {
  const [textCpf, setTextCpf] = useState('');

  // const = () => {}

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    // console.tron.log(this.cpfField);
  });

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

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, styles.textButton]}>AVANÇAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
