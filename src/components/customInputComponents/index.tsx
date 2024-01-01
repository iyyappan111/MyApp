import Icons from '../../constants/icons';
import { colors } from '../../constants/colors';
import { TextInput, StyleSheet, TextInputProps, TextStyle, ViewStyle, View ,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
interface CustomTextInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  shadow?: ViewStyle
  rightIcon?: any
  leftIcon? : any
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ containerStyle, inputStyle, shadow,leftIcon, rightIcon, ...props }) => {
  return (
    <View style={[styles.inputContainer, containerStyle, styles.shadow]}>
      {rightIcon && <Image source={rightIcon} style={styles.rightIconStyle}/>}
      <TextInput
        {...props}
        style={inputStyle}
      />
        {/* {leftIcon && <Image source={Icons.close} style={styles.rightIconStyle}/>} */}
    </View>

  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: wp('85%'),
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightgray,
    color: colors.black,
    flexDirection: 'row',
    paddingVertical:hp("0.5%")
  },
  shadow: {
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  rightIconStyle : {
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'contain',
    color:colors.black,
    height:hp("4%"),
    width:wp("8%"),
    marginHorizontal:wp("2%")
  }
});

export default CustomTextInput;
