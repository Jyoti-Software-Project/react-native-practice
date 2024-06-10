import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>WhatsApp Clone</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatList')}>
                <Text style={styles.buttonText}>Go to Chats</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MainPage;
