import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const YoutubeInputHide = () => {
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [isSecureEntry, setIsSecureEntry] = useState(false);

    const toggleShowPassword = () => {
        setIsSecureEntry(!isSecureEntry);
    };

    const handlePassword = (text) => {
        setPassword(text);

        if (text === '') {
            setErrorPassword('*Password Required*');
            setValidPassword(false);
        }
        else if (!/[A-Z]/.test(text)) {
            setErrorPassword('*Password must contain uppercase characters*');
            setValidPassword(false);
        }
        else if (!/[a-z]/.test(text)) {
            setErrorPassword('*Password must contain lowercase characters*');
            setValidPassword(false);
        }
        else if (!/\d/.test(text)) {
            setErrorPassword('*Password must contain numeric characters*');
            setValidPassword(false);
        }
        else if (!/[~!@#$%&*+_-]/.test(text)) {
            setErrorPassword('*Password must contain special characters*');
            setValidPassword(false);
        }
        else if (text.length < 8) {
            setErrorPassword('*Password needs 8 characters*');
            setValidPassword(false);
        }
        else {
            setErrorPassword('');
            setValidPassword(true);
        }
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.heading}>Geeksforgeeks || Password Show and Hide</Text>
            <View style={styles.container}>

                {/* <TextInput style={[styles.textBox, styles.passwordText]} multiline numberOfLines={2} /> */}



                <TextInput secureTextEntry={!isSecureEntry} value={password} style={styles.input} onChangeText={(text) => {
                    setPassword(text);
                    handlePassword(text);
                }} placeholder="Enter Password" placeholderTextColor="black" />


                <MaterialCommunityIcons name={isSecureEntry ? 'eye' : 'eye-off'} size={24} color="#696969" style={styles.icon} onPress={toggleShowPassword} />
            </View>
            {errorPassword ? <Text style={styles.error}>{errorPassword}</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 70,
        margin: 0,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
        paddingHorizontal: 14,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    },
    heading: {
        alignItems: 'center',
        fontSize: 20,
        color: 'green',
        marginBottom: 20,
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
});

export default YoutubeInputHide;
