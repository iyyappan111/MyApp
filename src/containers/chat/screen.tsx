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
    onChangeMessage: (val: string) => void
    chatMessage: string
    sendMessage: () => void
    loading: boolean
    message: string
}
const ChatScreen: React.FC<Props> = ({ onChangeMessage, sendMessage, loading, message, chatMessage }) => {
    return (
        <View style={styles.container}>
            {loading && <Loader />}
            {message && <Tost message={message} />}
            <View style={styles.inputViewStyle}>
                <TextInput
                    style={{
                        height: hp('7%'),
                        width: wp('80%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.gainsboro,
                        borderRadius: 10,
                        padding: wp("5%"),
                    }}
                    placeholder="Message" // Example placeholder
                    placeholderTextColor={colors.black}
                    onChangeText={onChangeMessage}
                    value={chatMessage}
                />
            </View>
            {/* <View style={styles.buttonViewStyle}>
                <TouchableOpacity style={styles.touchableOpacity} onPress={sendMessage}>
                    <Text>Sent</Text>
                </TouchableOpacity>
            </View> */}
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
        height: hp('5%'),
        width: wp('80%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor:'red'
    },
});

export default ChatScreen;
