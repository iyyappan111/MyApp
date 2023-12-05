import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
    message: string;
}

const Tost: React.FC<Props> = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            clearTimeout(timer);
        }, 2000);
    }, []);

    return (
        <View style={visible ? styles.overlay : { display: "none" }}>
            <LinearGradient
                colors={["#FCB69F", "#FCB69F"]}
                style={styles.gradientBackground}>
                <Text style={styles.text}>{message}</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        width: wp("80%"),
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',

    },
    gradientBackground: {
        width: wp("80%"),
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    text: {
        fontSize: 16,
        color: "#ffffff",
    },
});

export default Tost;
