
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../containers/signIn';
import Register from '../containers/signUp';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName='Register'>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
