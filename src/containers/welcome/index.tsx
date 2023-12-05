import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import WelcomeScreen from './screen';

interface Props {
  navigation: any;
}

const Welcome: React.FC<Props> = ( Props ) => {
  const [loading, setLoading] = useState<boolean>(false)
  const handleWelcomePress = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      Props.navigation.navigate("Home");
    }, 2000)
  };

  return (
    <WelcomeScreen handleWelcomePress={handleWelcomePress}
      loading={loading}
    />
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcomeText: {
    color: 'red',
    fontSize: 24,
  },
});
