// App.js
import React, { } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView } from 'react-native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
