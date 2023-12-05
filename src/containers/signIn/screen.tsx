import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { ColorName, colors } from '../../constants/colors';
import Loader from '../../components/appLoader';
import Tost from '../../components/toast';
interface Props {
    onChangeEmail : (val  :string) => void
    onChangePassword : (val  :string) => void
    loginHandler : () => void
    email  : string
    password  :string
    loading : boolean
    message : string
}
const LoginScreen: React.FC<Props> = ({onChangeEmail,onChangePassword,email,password,loginHandler,loading,message}) => {
    return (
        <View style={styles.container}>
           {loading && <Loader/>} 
           {message && <Tost message ={message}/>}
            <View style={styles.inputViewStyle}>
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10,
                        padding:wp("5%"),
                    }}
                    placeholder="Email" // Example placeholder
                    placeholderTextColor={colors.black}
                    onChangeText={onChangeEmail}
                    value={email}
                />
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        padding:wp("5%"),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10
                    }}
                    placeholder="Password" // Example placeholder
                    placeholderTextColor={colors.black}
                    onChangeText={onChangePassword}
                    value={password}
                />
            </View>
            <View style={styles.buttonViewStyle}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={loginHandler}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
{/* <Text>{message}</Text> */}
        </View>
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
        backgroundColor: colors.blue,
        borderRadius: 10,
    },
    buttonViewStyle: {
        height: hp('15%'),
        width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputViewStyle: {
        height: hp('17%'),
        width: wp('80%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor:'red'
    },
});

export default LoginScreen;
