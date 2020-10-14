import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },

  content: {
    height: 440,
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 140,
    paddingHorizontal: metrics.basePadding,
  },
  text: {
    fontFamily: 'IBMPlexSans',
  },

  textLabel: {
    fontSize: 20,
  },

  textHeader: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '900',
  },

  textInput: {
    width: '100%',
    height: 30,
    borderBottomWidth: 1.0,
    borderBottomColor: colors.white,
  },

  contentButton: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  button: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%',
  },

  textButton: {
    color: colors.primary,
  },
});

export default styles;
