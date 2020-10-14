import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  contentHeader: {
    width: 300,
    margin: 20,
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'IBMPlexSans',
    color: colors.white,
  },

  contentButton: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 50,
  },

  textHeader: {
    fontSize: 30,
  },
});

export default styles;
