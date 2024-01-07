
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../constants/colors';

interface CategoriesHeaderProps {
  containerStyle?: object;
  text: string;
  categoresTextStyle? :TextStyle
  seeMoreTextStyle?:TextStyle
  seeMoreText : string
  onPressSeeMore: () => void;
}

const CategoriesHeader: React.FC<CategoriesHeaderProps> = ({
  containerStyle,
  text,
  categoresTextStyle,
  seeMoreTextStyle,
  seeMoreText,
  onPressSeeMore,
}) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={[styles.categoresTextStyle,categoresTextStyle]}>
        {text}
      </Text>
      <TouchableOpacity onPress={onPressSeeMore}>
        <Text style={[styles.seeMoreTextStyle,seeMoreTextStyle]}>
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
  categoresTextStyle : {
    color:colors.black,fontFamily:'Roboto-Light',textAlign:'center'
  },
  seeMoreTextStyle : {
    color:colors.black,fontFamily:'Roboto-Light',fontSize:hp("1.5%"),textAlign:'center'
  }

});
