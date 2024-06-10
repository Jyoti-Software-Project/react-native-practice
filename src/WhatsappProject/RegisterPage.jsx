import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        // Implement your registration logic here
        console.log('Registering with:', username, password);
        // Redirect to LoginPage upon successful registration
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text>Register</Text>
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
            <TouchableOpacity onPress={handleRegistration}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Go to Login</Text>
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

export default RegisterPage;
