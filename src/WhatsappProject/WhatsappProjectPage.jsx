import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ChatPage from './ChatPage';
import ChatListPage from './ChatListPage';
import MainPage from './MainPage';
import Header from './Header';

const Stack = createNativeStackNavigator();

const safeAreaInsetsValue = Platform.OS === 'android' ? 0 : 0;

const WhatsappProjectPage = () => {
    const screenOptions = {
        header: ({ route, navigation }) => (
            <Header title={route.params?.title || 'Whatsapp Clone'} backButton={navigation.canGoBack()} navigation={navigation} />
        ),
        headerShown: true,
        headerStyle: {
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
            <Stack.Navigator screenOptions={screenOptions} initialRouteName="Welcome">
                <Stack.Screen name="Header" component={Header} />
                <Stack.Screen name="Welcome" component={WelcomePage} options={{ title: 'Welcome' }} initialParams={{ title: 'Welcome' }} />
                <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login' }} initialParams={{ title: 'Login' }} />
                <Stack.Screen name="Register" component={RegisterPage} options={{ title: 'Register' }} initialParams={{ title: 'Register' }} />
                <Stack.Screen name="Chat" component={ChatPage} options={{ title: 'Chat' }} initialParams={{ title: 'Chat' }} />
                <Stack.Screen name="ChatList" component={ChatListPage} options={{ title: 'Chat List' }} initialParams={{ title: 'Chat List' }} />
                <Stack.Screen name="Main" component={MainPage} options={{ title: 'Main' }} initialParams={{ title: 'Main' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default WhatsappProjectPage;
