import React, { useState } from "react";
import { ActivityIndicator, Button, ImageBackground, SafeAreaView, Switch, Text, TouchableOpacity, View, StatusBar, } from "react-native";
import lightStyles from "../../public/ProjectProps/HomeLightCss";
import darkStyles from "../../public/ProjectProps/HomeDarkCss";

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Home = ({ navigation }) => {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
    
    const [darkMode, setDarkMode] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const styles = darkMode ? darkStyles : lightStyles;
    
    const changeStatusBarVisibility = () => setHidden(!hidden);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleNavigation = (route) => {
        setTimeout(() => {
            setIsLoaded(true);
            setTimeout(() => {
                navigation.navigate(route);
                setIsLoaded(false);
            }, 1000);
        }, 1);
    };

    return (
        <View style={{width: "100%", height: "100%"}}>
            <SafeAreaView style={{backgroundColor: "transparent"}}>
                <StatusBar animated={true} backgroundColor="#007AFF" hidden={hidden} />
            </SafeAreaView>
            <ImageBackground source={require("../../public/images/Wallpaper-3.jpg")} resizeMode="cover">
                <View style={styles.container}>
                    {isLoaded ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size={150} color="#adff2f" />
                        </View>
                    ) : (
                        <View style={styles.homeContainer}>
                            {/* Title with Dark and Light Mode */}
                            <View style={[styles.darkMode]}>
                                <Text style={styles.homeTitle}>Home&nbsp;</Text>
                                <Switch trackColor={{true: '#2196f3', false: '#767577'}} thumbColor={darkMode ? '#f5dd4b' : '#ffffff'} onValueChange={toggleDarkMode} value={darkMode} />
                            </View>
                            {/* Home Body */}
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={[styles.button]} onPress={() => handleNavigation('Login')} activeOpacity={0.5}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <Text>            </Text>
                                <TouchableOpacity style={[styles.button]} onPress={() => handleNavigation('Register')} activeOpacity={0.5}>
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
                            </View>
                        </View>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;
