import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, Alert, ImageBackground, ScrollView, Switch, ActivityIndicator, StatusBar, } from "react-native";
import CheckBox from 'react-native-check-box';
import axios from "axios";
import lightStyles from "../../public/ProjectProps/RegisterLoginLightCss";
import darkStyles from "../../public/ProjectProps/RegisterLoginDarkCss";

const Register = ({ navigation, route }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState("");
    const [validName, setValidName] = useState(false);

    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const [phone, setPhone] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [validPhone, setValidPhone] = useState(false);

    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);

    const [isSecureEntry, setIsSecureEntry] = useState(false);

    const [isChecked, setIsChecked] = useState(false);

    const [submitButton, setSubmitButton] = useState(false);
    const [resetButton, setResetButton] = useState(false);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const [resetButtonDisabled, setResetButtonDisabled] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const styles = darkMode ? darkStyles : lightStyles;

    const handleName = (text) => {
        // text = text.replace(/[^A-Za-z\s]/g, "");
        text = text.replace(/\s{2,}/g, ' ');
        setName(text);
        if (text === "") {
            setErrorName("*Name Required*");
            setValidName(false);
        }
        else if (/\d/.test(text)) {
            setErrorName("*Write alphabet only*");
            setValidName(false);
        }
        else {
            setErrorName("");
            setValidName(true);
        }
    };

    const handleEmail = (text) => {
        text = text.toLowerCase().trim();
        setEmail(text);
        if (text === "") {
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

    const handlePhone = (text) => {
        text = text.replace(/[^0-9]/g, "").slice(0, 10).trim();
        setPhone(text);
        if (text === "") {
            setErrorPhone("*Phone Required*");
            setValidPhone(false);
        }
        else if (text.length < 10) {
            setErrorPhone("*Phone no needs 10 character*");
            setValidPhone(false);
        }
        else {
            setErrorPhone("");
            setValidPhone(true);
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

    const handleConfirmPassword = (text) => {
        text = text.trim();
        setConfirmPassword(text);

        if (!text) {
            setErrorConfirmPassword("*Confirm Password Required*");
            setValidConfirmPassword(false);
        }
        else if (text !== password) {
            setErrorConfirmPassword("*Confirm Password must be match with Password*");
            setValidConfirmPassword(false);
        }
        else {
            setErrorConfirmPassword("");
            setValidConfirmPassword(true);
        }
    };

    const handleTermsPress = () => {
        setTimeout(() => {
            // setIsLoaded(true);
            navigation.navigate("TermsAndCondition");
        }, 1000);
    };

    const handleButtonSubmit = async () => {
        if (validName && validEmail && validPhone && validPassword && validConfirmPassword && isChecked) {
            try {
                const response = await axios.post('/api/register', {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                });
            
                if (response.status === 200) {
                    Alert.alert('Register successful');
                    navigation.navigate('Home');
                }
                else {
                    Alert.alert('Register failed');
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
        setName(name);
        setEmail(email);
        setPhone(phone);
        setPassword(password);
    };

    const handleButtonReset = () => {
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        setErrorName("");
        setErrorEmail("");
        setErrorPhone("");
        setErrorPassword("");
        setErrorConfirmPassword("");
        setResetButton(false);
        setIsChecked(false);
    };

    useEffect(() => {
        // For Submit Button
        if (validName && validEmail && validPhone && validPassword && validConfirmPassword && isChecked) {
            setSubmitButton(true);
            setSubmitButtonDisabled(false);
        }
        else {
            setSubmitButton(false);
            setSubmitButtonDisabled(true);
        }
        // For Reset Button
        if (name !== "" || email !== "" || phone !== "" || password !== "" || confirmPassword) {
            setResetButton(true);
            setResetButtonDisabled(false);
        }
        else {
            setResetButton(false);
            setResetButtonDisabled(true);
        }
    }, [name, email, phone, password, confirmPassword, validName, validEmail, validPhone, validPassword, validConfirmPassword, isChecked]);

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
                    <View style={styles.goBackButtonContainer}>
                        <TouchableOpacity style={{width: "30%",}} onPress={() => navigation.goBack()} activeOpacity={0.5}>
                            <Text style={styles.goBackButton}>{" <= Home"}</Text>
                        </TouchableOpacity>
                    </View>
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
                                        <Text style={styles.formTitle}>Register Now&nbsp;</Text>
                                        <Switch trackColor={{true: '#2196f3', false: '#767577'}} thumbColor={darkMode ? '#f5dd4b' : '#ffffff'} onValueChange={toggleDarkMode} value={darkMode} />
                                    </View>
                                    {/* Name Input */}
                                    <View style={[styles.inputContainer]}>
                                        <Text style={styles.inputTitle}>Name : </Text>
                                        <TextInput style={[styles.textBox]} value={name} onChangeText={handleName} placeholder="Enter Name" placeholderTextColor="#696969" keyboardType="default" />
                                        {errorName ? ( <Text style={styles.errorMessage}>{errorName}</Text> ) : null}
                                    </View>
                                    {/* Email Input */}
                                    <View style={[styles.inputContainer]}>
                                        <Text style={styles.inputTitle}>Email : </Text>
                                        <TextInput style={[styles.textBox]} value={email} onChangeText={handleEmail} placeholder="Enter Email" placeholderTextColor="#696969" keyboardType="email-address" />
                                        {errorEmail ? ( <Text style={styles.errorMessage}>{errorEmail}</Text> ) : null}
                                    </View>
                                    {/* Phone Input */}
                                    <View style={[styles.inputContainer]}>
                                        <Text style={styles.inputTitle}>Phone : </Text>
                                        <TextInput style={[styles.textBox]} value={phone} onChangeText={handlePhone} placeholder="Enter Phone" placeholderTextColor="#696969" keyboardType="numeric" />
                                        {errorPhone ? ( <Text style={styles.errorMessage}>{errorPhone}</Text> ) : null}
                                    </View>
                                    {/* Password Input */}
                                    <SafeAreaView style={[styles.inputContainer]}>
                                        <Text style={styles.inputTitle}>Password : </Text>
                                        <TextInput secureTextEntry={!isSecureEntry} value={password} style={[styles.textBox, styles.passwordText]} onChangeText={(text) => {
                                            setPassword(text); handlePassword(text); }} placeholder="Enter Password" placeholderTextColor="#696969" />
                                        {errorPassword ? ( <Text style={styles.errorMessage}>{errorPassword}</Text> ) : null}
                                    </SafeAreaView>
                                    {/* Confirm Password Input */}
                                    <SafeAreaView style={[styles.inputContainer]}>
                                        <Text style={styles.inputTitle}>Confirm Password : </Text>
                                        <TextInput secureTextEntry={!isSecureEntry} value={confirmPassword} style={[styles.textBox, styles.passwordText]} onChangeText={(text) => {
                                            setConfirmPassword(text); handleConfirmPassword(text); }} placeholder="Enter Confirm Password" placeholderTextColor="#696969" />
                                        {errorConfirmPassword ? ( <Text style={styles.errorMessage}>{errorConfirmPassword}</Text> ) : null}
                                    </SafeAreaView>
                                    {/* Password and Confirm Password show hide */}
                                    <View style={[styles.inputContainer, styles.toggle]}>
                                        <Switch trackColor={{true: '#2196f3', false: '#767577'}} thumbColor={isSecureEntry ? '#f5dd4b' : '#ffffff'} onValueChange={toggleShowPassword} value={isSecureEntry} />
                                        <Text style={styles.pageText}>&nbsp;Show Password</Text>
                                    </View>
                                    {/* Check Box Input */}
                                    <View style={[styles.inputContainer, styles.checkBoxContainer]}>
                                        <CheckBox style={styles.checkBox} isChecked={isChecked} onClick={() => { setIsChecked(!isChecked); }} checkBoxColor="#2196f3" />
                                        <Text style={styles.pageText}>I agree to all </Text>
                                        <TouchableOpacity onPress={handleTermsPress} activeOpacity={0.5}>
                                            <Text style={[styles.pageText, {color: isChecked ? "#008000" : "#ff0000"}]}>Terms & Conditions</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={[styles.button, {opacity: submitButtonDisabled ? 0.5 : 1,}]} onPress={handleButtonSubmit} disabled={(!submitButton)} activeOpacity="0.5">
                                            <Text style={styles.buttonText}>Submit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.button, {opacity: resetButtonDisabled ? 0.5 : 1,}]} onPress={handleButtonReset} disabled={(!resetButton)} activeOpacity="0.5">
                                            <Text style={styles.buttonText}>Reset</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.navigationContainer}>
                                        <Text style={styles.pageText}>Already have an account </Text>
                                        <TouchableOpacity onPress={() => handleNavigation('Login')} activeOpacity={0.5}>
                                            <Text style={[styles.pageText, {color: "#2196f3",}]}>Login Now</Text>
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

export default Register;
