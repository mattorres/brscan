import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 700,
    marginHorizontal: metrics.baseMargin * 2,
  },

  image: {
    marginTop: 100,
  },

  title: {
    fontFamily: 'IBMPlexSans',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },

  subTitle: {
    fontSize: 20,
  },

  text: {
    fontFamily: 'IBMPlexSans',
    color: colors.white,
    textAlign: 'center',
  },

  contentText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
