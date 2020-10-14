import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.darker,
  },

  textHeader: {
    textAlign: 'center',
    color: colors.white,
  },

  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    alignItems: 'center',
  },

  buttonClose: {
    color: '#FFF',
    fontSize: 30,
    marginLeft: 10
  },

  contentImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '90%',
    height: 600,
  },

  content: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  preview: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: 14,
  },
});

export default styles;
