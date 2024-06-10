import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const PasswordInput = ({ label, placeholder, onChangeText, containerStyle, style }) => {
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return (
        <View style={{ marginVertical: 10 }}>
            <Text>{label}</Text>
            <View style={[containerStyle]}>
                <TextInput style={[style]} secureTextEntry={isSecureEntry} placeholder={placeholder} onChangeText={onChangeText} keyboardType="numeric" />
                <TouchableOpacity onPress={() => { setIsSecureEntry((prev) => !prev); }}>
                    <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PasswordInput;
