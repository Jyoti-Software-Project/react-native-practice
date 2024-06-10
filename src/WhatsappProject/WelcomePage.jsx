import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, SafeAreaView, StatusBar } from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const WelcomePage = ({ navigation }) => {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{backgroundColor: "transparent"}}>
                <StatusBar animated={true} backgroundColor="#007AFF" hidden={hidden} />
            </SafeAreaView>
            <Text>Welcome to WhatsApp Clone</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Text>Main</Text>
            </TouchableOpacity>
            <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WelcomePage;
