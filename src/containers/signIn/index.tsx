import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import LoginScreen from './screen';
import axios from 'axios';
export default function login() {
    const [email, setEmail] = useState<string>("umar@gmaoil.com")
    const [password, setPassword] = useState<string>("Aa@123123123")
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const baseURL = "http://192.168.1.7:9000/auth/signIn";
    const [response, setResponse] = useState({});
    const onChangeEmail = (val: string) => {
        setEmail(val)
    }
    const onChangePassword = (val: string) => {
        setPassword(val)
    }
    const loginHandler = async () => {
        await fetchData()
    };
    const fetchData = async () => {
        setLoading(true)
        setMessage('')
        const data = {
            email: email,
            password: password
        }
        try {
            const result = await axios.post(baseURL, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (result.data.StatusCode == 200) {
                setLoading(false)
                setMessage(result.data.Message)
            }
            else {
                setLoading(false)
                setMessage(result.data.Message)
            }
        } catch (error) {
            console.error("#######Error########:", error);

        }
    };
    return (
        <LoginScreen
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            loginHandler={loginHandler}
            email={email}
            password={password}
            loading={loading}
            message={message}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcomeText: {
        color: 'red',
        fontSize: 24,
    },
});
