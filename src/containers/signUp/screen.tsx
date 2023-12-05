import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, PixelRatio } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { ColorName, colors } from '../../constants/colors';
import Loader from '../../components/appLoader';
import Tost from '../../components/toast';
import LinearGradient from 'react-native-linear-gradient';
interface Props {

    onChangefirstName: (val: string) => void
    onChangelastName: (val: string) => void
    onChangeEmail: (val: string) => void
    onChangeMobile: (val: string) => void
    onChangePassword: (val: string) => void
    onChangeConfirmPassword: (val: string) => void
    SignUpHandler: () => void
    firstName: string
    lastName: string
    email: string
    mobile: string
    password: string
    confirmPassword: string
    loading: boolean
    message: string

}
const RegisterScreen: React.FC<Props> = ({ onChangefirstName, onChangelastName, onChangeEmail, onChangeMobile, onChangePassword, onChangeConfirmPassword
    , SignUpHandler, firstName, lastName, email, mobile, password, confirmPassword, loading, message }) => {
    const fontScale = PixelRatio.getFontScale();
    const getFontSize = (size: number) => size / fontScale;
    return (
        <LinearGradient
            colors={['#FDFCFB', '#E2D1C3']} 
            style={styles.container}
        >
            {loading && <Loader />}
            {message && <Tost message={message} />}
            <View style={{ width: wp("100%"), height: hp("10%"), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: getFontSize(25) }}>
                    Sign Up
                </Text>
            </View>
            <View style={styles.inputViewStyle}>
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10,
                        paddingHorizontal: wp("5%"),

                    }}
                    placeholder="firstName" 
                    placeholderTextColor={colors.black}
                    onChangeText={onChangefirstName}
                    value={firstName}
                />
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        paddingHorizontal: wp("5%"),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10
                    }}
                    placeholder="lastName" 
                    placeholderTextColor={colors.black}
                    onChangeText={onChangelastName}
                    value={lastName}
                />
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10,
                        paddingHorizontal: wp("5%"),
                    }}
                    placeholder="Email" 
                    placeholderTextColor={colors.black}
                    onChangeText={onChangeEmail}
                    value={email}
                />
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        paddingHorizontal: wp("5%"),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10
                    }}
                    placeholder="mobile" 
                    placeholderTextColor={colors.black}
                    onChangeText={onChangeMobile}
                    value={mobile}
                />
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        paddingHorizontal: wp("5%"),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10
                    }}
                    placeholder="password" 
                    placeholderTextColor={colors.black}
                    onChangeText={onChangePassword}
                    value={password}
                />
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        paddingHorizontal: wp("5%"),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10
                    }}
                    placeholder="ConfirmPassword" 
                    placeholderTextColor={colors.black}
                    onChangeText={onChangeConfirmPassword}
                    value={confirmPassword}
                />
                <View style={styles.buttonViewStyle}>
                    <TouchableOpacity style={styles.touchableOpacity} onPress={SignUpHandler}>
                        <Text style={{ color: 'white' }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    touchableOpacity: {
        height: hp('8%'),
        width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp("3%"),
        borderRadius: 10,
    },
    buttonViewStyle: {
        height: hp('7%'),
        width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp("3%"),
        borderRadius: 10,
        backgroundColor: 'green'

    },
    inputViewStyle: {
        height: hp('60%'),
        width: wp('80%'),
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});

export default RegisterScreen;
