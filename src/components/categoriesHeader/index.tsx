
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../constants/colors';

interface CategoriesHeaderProps {
  containerStyle?: object;
  text: string;
  textColor?: string;
  seeMoreText: string;
  seeMoreTextColor?: string;
  onPressSeeMore: () => void;
}

const CategoriesHeader: React.FC<CategoriesHeaderProps> = ({
  containerStyle,
  text,
  textColor,
  seeMoreText,
  seeMoreTextColor,
  onPressSeeMore,
}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={{ color:colors.black,fontSize:hp("2%") ,fontWeight:'bold'}}>
        {text}
      </Text>
      <TouchableOpacity onPress={onPressSeeMore}>
        <Text style={{ color: seeMoreTextColor,fontSize:hp("1.5%") }}>
          {seeMoreText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesHeader;

const styles = StyleSheet.create({
  containerStyle: {
    width: wp("100%"),
    height: hp("7%"),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp("2%"),
    flexDirection: 'row',
  },
});
