

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../containers/welcome';
import Home from '../containers/Home';
import TabNavigation from './TabNavigation';
const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={({ navigation }) => ({
          headerShown: false,

        })}
      />
    </Stack.Navigator>
  );
}

