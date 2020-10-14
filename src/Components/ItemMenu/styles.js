import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 60,
  },

  text: {
    fontFamily: 'IBMPlexSans',
    color: colors.white,
  },
});

export default styles;
