import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darker,
  },

  line: {
    height: 100,
    margin: metrics.baseMargin,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },

  box: {
    backgroundColor: colors.dark,
    height: 12,
    width: 12,
  },
});

export default styles;
