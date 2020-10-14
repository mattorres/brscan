import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Register from './pages/register';
import RegisterDoc from './pages/registerDoc';
import ChooseDocument from './pages/chooseDocument';
import SendDocument from './pages/sendDocument';
import CapturePhoto from './pages/capturePhoto';
import SendDocumentSuccess from './pages/sendSuccessDocument';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterDoc" component={RegisterDoc} />
        <Stack.Screen name="CapturePhoto" component={CapturePhoto} />
        <Stack.Screen name="ChooseDocument" component={ChooseDocument} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SendDocument" component={SendDocument} />
        <Stack.Screen
          name="SendDocumentSuccess"
          component={SendDocumentSuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
