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
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

interface IconProps {
  name: string;
  size: number;
  color?: string;
}

const FeatherIcon: React.FC<IconProps> = ({ name, size, color }) => (
  <Feather name={name} size={size} style={[styles.icon, { color }]} />
);

const MaterialIcon: React.FC<IconProps> = ({ name, size, color }) => (
  <MaterialIcons name={name} size={size} style={[styles.icon, { color }]} />
);

interface HomeHeaderProps {
  containerStyle?: StyleProp<ViewStyle>;
  mapIconNameIconSize?: number;
  searchCartIconSize?: number;
  locationText: string;
  shoppingCartIconColor?: string;
  notificationsIconColor?: string;
  locationTextStyle?: StyleProp<TextStyle>;
  mapIconName?: string;
  shoppingCartIconName?: string;
  notificationsIconName?: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  containerStyle,
  mapIconNameIconSize = 20,
  searchCartIconSize = 20,
  locationText = "chennai",
  shoppingCartIconColor = "black",
  notificationsIconColor = "black",
  locationTextStyle,
  mapIconName = "map-pin",
  shoppingCartIconName = "shopping-cart",
  notificationsIconName = "notifications-none",
}) => {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <View
        style={{
          flexDirection: "row",
          minWidth: 0,
          maxWidth: wp("78%"),
          alignItems: "center",
          justifyContent: "space-between",
         
        }}
      >
        <FeatherIcon name={mapIconName} size={mapIconNameIconSize} color="black" />
        <Text style={[styles.locationText, locationTextStyle]}>
          {locationText}
        </Text>
      </View>
      <View style={styles.searchCartContainer}>
        <FeatherIcon
          name={shoppingCartIconName}
          size={searchCartIconSize}
          color={shoppingCartIconColor}
        />
        <MaterialIcon
          name={notificationsIconName}
          size={searchCartIconSize}
          color={notificationsIconColor}
        />
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
  searchCartContainer: {
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
});

export default HomeHeader;
