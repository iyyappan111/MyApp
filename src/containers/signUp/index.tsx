import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import LoginScreen from './screen';
import axios from 'axios';

interface Props {
    navigation : any
}
export default function Register(Props: any) {
    const [firstName, setFirstName] = useState('iyyappan');
    const [lastName, setLastName] = useState('iyyappan');
    const [email, setEmail] = useState('iyyappan1091998@gmail.com');
    const [mobile, setMobile] = useState('1234567890');
    const [password, setPassword] = useState('Aa@95977679#');
    const [confirmPassword, setConfirmPassword] = useState('Aa@95977679#');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const baseURL = "http://localhost:5000/auth/signUp";

    const onChangefirstName = (val: React.SetStateAction<string>) => {
        setFirstName(val);
    };

    const onChangelastName = (val: React.SetStateAction<string>) => {
        setLastName(val);
    };

    const onChangeEmail = (val: React.SetStateAction<string>) => {
        setEmail(val);
    };

    const onChangeMobile = (val: React.SetStateAction<string>) => {
        setMobile(val);
    };

    const onChangePassword = (val: React.SetStateAction<string>) => {
        setPassword(val);
    };

    const onChangeConfirmPassword = (val: React.SetStateAction<string>) => {
        setConfirmPassword(val);
    };

    const SignUpHandler = async () => {
        await fetchData();
    };

    const fetchData = async () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setTimeout(() => {
                setMessage('');
            }, 1000)
            setMessage('Please fill in all required fields.');
            return;
        }
        const data = {
            firstName: "kumar",
            lastName: "s",
            email: "umar@gmaoil.com",
            mobile: "0471471471",
            password: "Aa@123123123#",
            confirmPassword: "Aa@123123123#"
        };
        try {
            setLoading(true);
            setMessage('');
            const result = await axios.post(baseURL, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (result.data.StatusCode === 200) {
                setLoading(false);
                setMessage(result.data.message);
                Props.navigation.navigate("Login");
            } else {
              console.log(result.data.message)
                setLoading(false);
                setMessage(result.data.message);
            }
        } catch (error) {
           
            if (axios.isAxiosError(error)) {
                setLoading(false);
                console.error(error);
                setMessage('An error occurred while communicating with the server.');
            } else {
                setLoading(false);
                console.error('Unknown error:', error);
                setMessage('An unknown error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginScreen
            onChangefirstName={onChangefirstName}
            onChangelastName={onChangelastName}
            onChangeEmail={onChangeEmail}
            onChangeMobile={onChangeMobile}
            onChangePassword={onChangePassword}
            onChangeConfirmPassword={onChangeConfirmPassword}
            SignUpHandler={SignUpHandler}
            firstName={firstName}
            lastName={lastName}
            email={email}
            mobile={mobile}
            password={password}
            confirmPassword={confirmPassword}
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
