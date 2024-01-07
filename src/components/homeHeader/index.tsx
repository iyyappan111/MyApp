import React from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
  Text,
  TextStyle,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
interface HomeHeaderProps {
  containerStyle?: StyleProp<ViewStyle>;
  locationText: string;
  locationTextStyle?: StyleProp<TextStyle>;
  locationContainer? : ViewStyle
  cart_NotificationInnerContainer? : ViewStyle
  leftIconComponents : any
  rightCartIconComponents:any
  rightNotificationIconComponents : any
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  containerStyle,
  locationText = "chennai",
  locationTextStyle,
  locationContainer,
  cart_NotificationInnerContainer,
  leftIconComponents,
  rightCartIconComponents,
  rightNotificationIconComponents
}) => {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <View
        style={[styles.locationContainer,locationContainer]}
      >
        {leftIconComponents}
        <Text style={[styles.locationText, locationTextStyle]}>
          {locationText}
        </Text>
      </View>
      <View style={[styles.cart_NotificationInnerContainer,cart_NotificationInnerContainer]}>
        {rightCartIconComponents}
        {rightNotificationIconComponents}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    width: screenWidth,
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: screenHeight / 15,
  },
  icon: {
    marginHorizontal: wp("2%"),
  },
  cart_NotificationInnerContainer: {
    justifyContent: "space-between",
    width: wp("20%"),
    height: screenHeight / 15,
    alignItems: "center",
    flexDirection: "row",
  },
  locationText: {
    alignItems:'center',
    overflow:"hidden",
    fontFamily:"Roboto-Black"
  },
  locationContainer : {
    flexDirection: "row",
    minWidth: 0,
    maxWidth: wp("78%"),
    alignItems: "center",
    justifyContent: "space-between",
  }
});

export default HomeHeader;
