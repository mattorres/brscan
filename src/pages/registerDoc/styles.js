import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darker,
    flex: 1,
  },

  content: {
    justifyContent: 'space-between',
    flex: 1
  },
});

export default styles;
