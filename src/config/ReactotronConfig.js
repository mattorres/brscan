import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: 'localhost',
    port: 9090,
  })
    .useReactNative()
    .useReactNative()
    .connect();
  tron.clear();
  console.tron = tron;
}
