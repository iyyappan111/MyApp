import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
    value: string;
    placeholder: string
    onChange: (val: string) => void;
}

const CustomInput: React.FC<Props> = ({ value, onChange, placeholder }) => {
    const [inputValue, setInputValue] = useState(value);


    return (
        <TextInput
            style={{ width: wp('70%'), height: wp('20') }}
            value={inputValue}
            onChangeText={onChange}
            placeholder={placeholder}


        />
    );
};

export default CustomInput;
