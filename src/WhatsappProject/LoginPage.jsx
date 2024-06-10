import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Logging in with:', username, password);
        // Redirect to ChatListPage upon successful login
        navigation.navigate('ChatList');
    };

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Go to Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
});

export default LoginPage;
