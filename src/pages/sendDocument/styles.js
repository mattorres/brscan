import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },

  text: {
    fontFamily: 'IBMPlexSans',
    color: colors.white,
    margin: 30
  },

  textHeader: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default styles;
