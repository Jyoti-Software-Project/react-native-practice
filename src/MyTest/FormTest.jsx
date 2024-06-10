import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, Button, Alert } from "react-native";
import styles from "../../public/CssProps/FormCss";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box';

// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();

const Form = () => {
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
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    const [isChecked, setIsChecked] = useState(false);

    const [submitButton, setSubmitButton] = useState(false);
    const [resetButton, setResetButton] = useState(false);

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

        if (text === "") {
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

    const handleTermsPress = () => {
        // navigation.navigate('TermsAndCondition');
    };

    const handleButtonSubmit = () => {
        if (validName && validEmail && validPhone && validPassword && isChecked) {
            // Alert.alert("Form is valid submitting");
            const formData = {
                name: name,
                email: email,
                phone: phone,
                password: password,
            };
            // Assuming there's an API function to send data to the database
            // sendDataToDatabase(formData)
            // .then(response => {
            //     console.log("Data submitted successfully : ", response);
            //     Alert.alert("Data submitted successfully");
            // })
            // .catch(error => {
            //     console.error("Error submitting data : ", error);
            //     Alert.alert("Please try again later");
            // });
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
        setErrorName("");
        setErrorEmail("");
        setErrorPhone("");
        setErrorPassword("");
        setResetButton(false);
        setIsChecked(false);
    };

    useEffect(() => {
        // For Submit Button
        if (validName && validEmail && validPhone && validPassword && isChecked) {
            setSubmitButton(true);
        }
        else {
            setSubmitButton(false);
        }
        // For Reset Button
        if (name !== "" || email !== "" || phone !== "" || password !== "") {
            setResetButton(true);
        }
        else {
            setResetButton(false);
        }
    }, [name, email, phone, password, validName, validEmail, validPhone, validPassword, isChecked]);
    

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Register Now</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Name : </Text>
                <TextInput style={[styles.textBox, styles.nameText]} value={name} onChangeText={handleName} placeholder="Enter Name" placeholderTextColor="#696969" keyboardType="default" />
            </View>
            {errorName ? ( <Text style={styles.errorMessage}>{errorName}</Text> ) : null}
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Email : </Text>
                <TextInput style={[styles.textBox, styles.emailText]} multiline numberOfLines={2} value={email} onChangeText={handleEmail} placeholder="Enter Email" placeholderTextColor="#696969" keyboardType="email-address" />
            </View>
            {errorEmail ? ( <Text style={styles.errorMessage}>{errorEmail}</Text> ) : null}
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Phone : </Text>
                <TextInput style={[styles.textBox, styles.phoneText]} value={phone} onChangeText={handlePhone} placeholder="Enter Phone" placeholderTextColor="#696969" keyboardType="numeric" />
            </View>
            {errorPhone ? ( <Text style={styles.errorMessage}>{errorPhone}</Text> ) : null}
            <SafeAreaView style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Password : </Text>
                <TextInput secureTextEntry={!isSecureEntry} value={password} style={[styles.textBox, styles.passwordText]} onChangeText={(text) => {
                    setPassword(text); handlePassword(text); }} placeholder="Enter Password" placeholderTextColor="#696969" />
                <MaterialCommunityIcons name={isSecureEntry ? 'eye' : 'eye-off'} size={24} color="#696969" style={styles.icon} onPress={toggleShowPassword} />
            </SafeAreaView>
            {errorPassword ? ( <Text style={styles.errorMessage}>{errorPassword}</Text> ) : null}
            <View style={[styles.inputContainer, styles.checkBoxContainer]}>
                <CheckBox style={styles.checkBox} isChecked={isChecked} onClick={() => { setIsChecked(!isChecked); }} rightText={
                    <View style={{flexDirection: "row"}}>
                        <Text style={{fontSize: 16}}>I agree to all </Text>
                        <TouchableOpacity onPress={handleTermsPress}>
                            <Text style={{ fontSize: 16, color: isChecked ? "#008000" : "#ff0000" }}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                } />
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Submit"} onPress={handleButtonSubmit} disabled={(!submitButton)} />
                <View style={{paddingHorizontal: 10,}}></View>
                <Button title={"Reset"} onPress={handleButtonReset} disabled={(!resetButton)} />
            </View>
        </View>
    );
};

export default Form;
