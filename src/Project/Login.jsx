import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, Alert, ImageBackground, ScrollView, Switch, ActivityIndicator } from "react-native";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from '@rneui/themed';
import axios from "axios";
import lightStyles from "../../public/ProjectProps/RegisterLoginLightCss";
import darkStyles from "../../public/ProjectProps/RegisterLoginDarkCss";

const Login = ({ navigation, route }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);

    const [isSecureEntry, setIsSecureEntry] = useState(false);

    const [submitButton, setSubmitButton] = useState(false);
    const [resetButton, setResetButton] = useState(false);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [resetButtonDisabled, setResetButtonDisabled] = useState(false);

    const styles = darkMode ? darkStyles : lightStyles;

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleEmail = (text) => {
        text = text.toLowerCase().trim();
        setEmail(text);
        if (!text) {
            setErrorEmail("*Email Required*");
            setValidEmail(false);
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
            setErrorEmail("*Invalid Email format*");
            setValidEmail(false);
        }
        else {
            setErrorEmail("");
            setValidEmail(true);
        }
    };

    const toggleShowPassword = () => {
        setIsSecureEntry(!isSecureEntry);
    };

    const handlePassword = (text) => {
        text = text.trim();
        setPassword(text);

        if (!text) {
            setErrorPassword("*Password Required*");
            setValidPassword(false);
        }
        else if (!(/[A-Z]/.test(text))) {
            setErrorPassword("*Password must contain uppercase characters*");
            setValidPassword(false);
        }
        else if (!(/[a-z]/.test(text))) {
            setErrorPassword("*Password must contain lowercase characters*");
            setValidPassword(false);
        }
        else if (!(/\d/.test(text))) {
            setErrorPassword("*Password must contain numeric characters*");
            setValidPassword(false);
        }
        else if (!(/[~!@#$%&*+_-]/.test(text))) {
            setErrorPassword("*Password must contain special characters*");
            setValidPassword(false);
        }
        else if (text.length < 8) {
            setErrorPassword("*Password needs 8 characters*");
            setValidPassword(false);
        }
        else {
            setErrorPassword("");
            setValidPassword(true);
        }
    };

    const handleButtonSubmit = async () => {
        if (validEmail && validPassword) {
            try {
                const response = await axios.post('/api/login', {
                    email: email,
                    password: password,
                });
            
                if (response.status === 200) {
                    Alert.alert('Login successful');
                    navigation.navigate('Home');
                }
                else {
                    Alert.alert('Login failed');
                }
            }
            catch (error) {
                console.error('Error submitting data: ', error);
                Alert.alert('Please try again later');
            }
        }
        else {
            Alert.alert("Form Data is invalid");
        }
        setEmail(email);
        setPassword(password);
    };

    const handleButtonReset = () => {
        setEmail("");
        setPassword("");
        setErrorEmail("");
        setErrorPassword("");
        setResetButton(false);
    };

    useEffect(() => {
        // For Submit Button
        if (validEmail && validPassword) {
            setSubmitButton(true);
            setSubmitButtonDisabled(false);
        }
        else {
            setSubmitButton(false);
            setSubmitButtonDisabled(true);
        }
        // For Reset Button
        if (email !== "" || password !== "") {
            setResetButton(true);
            setResetButtonDisabled(false);
        }
        else {
            setResetButton(false);
            setResetButtonDisabled(true);
        }
    }, [email, password, validEmail, validPassword]);

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
            <ImageBackground source={require("../../public/images/Wallpaper-3.jpg")} resizeMode="cover">
                <View style={{backgroundColor: "transparent"}}>
                    {/* <View style={styles.goBackButtonContainer}>
                        <TouchableOpacity style={{width: "30%",}} onPress={() => navigation.goBack()} activeOpacity={0.5}>
                            <Text style={styles.goBackButton}>{" <= Home"}</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={styles.pageContainer}>
                        {isLoaded ? (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator size={150} color="#adff2f" />
                            </View>
                        ) : (
                            <View style={styles.formContainer}>
                                <ScrollView>
                                    {/* Title with Dark and Light Mode */}
                                    <View style={[styles.darkMode]}>
                                        <Text style={styles.formTitle}>Login Now&nbsp;</Text>
                                        <Switch trackColor={{true: '#2196f3', false: '#767577'}} thumbColor={darkMode ? '#f5dd4b' : '#ffffff'} onValueChange={toggleDarkMode} value={darkMode} />
                                    </View>
                                    {/* Email Input */}
                                    <View style={[styles.inputContainer]}>
                                        <Text style={styles.inputTitle}>Email : </Text>
                                        <TextInput style={[styles.textBox]} value={email} onChangeText={handleEmail} placeholder="Enter Email" placeholderTextColor="#696969" keyboardType="email-address" />
                                        {errorEmail ? ( <Text style={styles.errorMessage}>{errorEmail}</Text> ) : null}
                                    </View>
                                    {/* Password Input */}
                                    <SafeAreaView style={[styles.inputContainer]}>
                                        <Text style={styles.inputTitle}>Password : </Text>
                                        <TextInput secureTextEntry={!isSecureEntry} value={password} style={[styles.textBox, styles.passwordText]} onChangeText={(text) => {
                                            setPassword(text); handlePassword(text); }} placeholder="Enter Password" placeholderTextColor="#696969" />
                                        {errorPassword ? ( <Text style={styles.errorMessage}>{errorPassword}</Text> ) : null}
                                    </SafeAreaView>
                                    {/* Password show hide */}
                                    <View style={[styles.inputContainer, styles.toggle]}>
                                        <Switch trackColor={{true: '#2196f3', false: '#767577'}} thumbColor={isSecureEntry ? '#f5dd4b' : '#ffffff'} onValueChange={toggleShowPassword} value={isSecureEntry} />
                                        <Text style={styles.pageText}>&nbsp;Show Password</Text>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={[styles.button, {opacity: submitButtonDisabled ? 0.5 : 1,}]} onPress={handleButtonSubmit} disabled={(!submitButton)} activeOpacity={0.5}>
                                            <Text style={styles.buttonText}>Submit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.button, {opacity: resetButtonDisabled ? 0.5 : 1,}]} onPress={handleButtonReset} disabled={(!resetButton)} activeOpacity={0.5}>
                                            <Text style={styles.buttonText}>Reset</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.navigationContainer}>
                                        <Text style={styles.pageText}>Don't have an account </Text>
                                        <TouchableOpacity onPress={() => handleNavigation('Register')} activeOpacity={0.5}>
                                            <Text style={[styles.pageText, {color: "#2196f3",}]}>Register Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                        )}
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;
