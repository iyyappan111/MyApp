import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ColorName, colors } from '../../constants/colors';
import Loader from '../../components/appLoader';
interface Props {
    handleWelcomePress: () => void;
    loading:boolean
}

const welcomeScreen: React.FC<Props> = ({ handleWelcomePress ,loading}) => {
    return (
        <View style={styles.container}>
            {loading && <Loader/>}
            <TouchableOpacity onPress={handleWelcomePress} style={styles.touchableOpacity}>
                <Text style={{ color: 'white'}}>GET START NOW</Text>
            </TouchableOpacity>
        </View >
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
        borderRadius: 10
    },
});

export default welcomeScreen; 
