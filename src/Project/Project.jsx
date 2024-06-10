import React from 'react';
import { Platform, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import TermsAndCondition from './TermsAndCondition';

const Stack = createNativeStackNavigator();

const safeAreaInsetsValue = Platform.OS === 'android' ? 0 : 0;

const Project = ({ navigation }) => {
    const screenOptions = {
        headerShown: true,
        headerStyle: {
            backgroundColor: '#2196f3',
            elevation: 0,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
        },
        headerBackTitleVisible: false,
        safeAreaInsets: {
            top: safeAreaInsetsValue,
            bottom: safeAreaInsetsValue,
            left: 0,
            right: 0,
        },
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
                <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
                <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} options={{ title: 'Terms & Conditions' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Project;
