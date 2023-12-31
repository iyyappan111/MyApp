import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import HomeScreen from './screen';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const handleWelcomePress = () => {
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    //   navigation.navigate('Register')
    // }, 2000)
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)
  // })
  useEffect(() => {
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // Inserts at index 1
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
    months.splice(4, 1, 'May');
    // Replaces 1 element at index 4
    console.log(months);
    // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
setTimeout(()=> {
  setLoading(false)
},2000)
  })
  const onLoadStart = () => {
    console.log('Image loading started');
  };
  
  const onProgress = (e: any) => {
    console.log('Image loading progress:', e.nativeEvent);
  };
  
  const onLoad = (e: any) => {
    console.log('Image loaded successfully:', e.nativeEvent);
  };
  
  const onLoadEnd = () => {
    console.log('Image loading completed');
  };
  
  const onError = (error: any) => {
    console.log('Image loading error:', error.nativeEvent);
  };
  
  return (
    <HomeScreen
      handleWelcomePress={handleWelcomePress}
      onLoadStart={onLoadStart}
      onProgress={onProgress}
      onLoad={onLoad}
      onLoadEnd={onLoadEnd}
      onError ={onError}
      loading={loading}
    />
  );
};

export default Home;

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
