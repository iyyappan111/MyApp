


import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import loaderJson from "../../asset/animationFiles";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Loader() {
  return (
    <View style={styles.overlay}>
      <LottieView
        source={loaderJson}
        style={styles.animation}
        autoPlay
      />
      {/* <Text style={styles.loadingText}>Loading...</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    zIndex: 1,
    position: 'absolute',
    width: wp("100%"),
    height: hp("100%"),
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  animation: {
    width: wp("50%"),
    height: hp("50%"), 
  },
  loadingText: {
    marginTop: hp("2%"),
    fontSize: 16,
    color: "#ffffff",
  },
});
