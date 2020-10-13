import { StyleSheet } from 'react-native';
import { colors, general } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontFamily: general.font
  },
});

export default styles;
