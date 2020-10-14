import React, { useState } from 'react';
import {
  View, TouchableOpacity, Text, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import BotaoCaptar from '../../../assets/Doc/BotaoCaptar.png';
import styles from './styles';

function CapturePhoto() {
  const { pop, navigate } = useNavigation();
  const [image, setImage] = useState(null);

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);

      setImage(data.uri);

      navigate('SendDocumentSuccess');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.textHeader}>
          Aperte o botão para capturar a foto
        </Text>
        <TouchableOpacity onPress={() => pop()}>
          <Text style={styles.buttonClose}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <RNCamera
          ref={(camera) => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
        />
        <View style={styles.contentImage}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Image source={BotaoCaptar} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CapturePhoto;
