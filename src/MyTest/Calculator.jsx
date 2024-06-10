import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../public/CssProps/CalculatorCss";

const Calculator = () => {
    const [number, setNumber] = useState('');
    const [myDisabled, setMyDisabled] = useState(false);

    const handleClear = () => {
        setNumber('');
    };

    const handleBack = () => {
        setNumber(prevNumber => {
            if (prevNumber.length > 0) {
                return prevNumber.slice(0, -1);
            }
            return prevNumber;
        });
    };

    const handleKeyPress = (value) => {
        setNumber(prevNumber => prevNumber + value);
    };

    const calculatorOnOff = () => {
        setMyDisabled(!myDisabled);
    };

    const buttonDisable = {
        opacity: myDisabled ? 0.5 : 1,
    };

    const calculate = () => {
        try {
            const result = eval(number);
            setNumber(result.toString());
        }
        catch (error) {
            console.error("Calculation error:", error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                <TextInput style={[styles.display]} value={number} multiline={true} numberOfLines={3} editable={false} />
            </View>
            <View>
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={() => handleClear()} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleBack()} activeOpacity={0.5} disabled={myDisabled}>
                        <Icon style={[styles.button, {paddingVertical: 16}, buttonDisable]} name={'remove'} size={20} color="#ff9621" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("%")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("/")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={() => handleKeyPress("7")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("8")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("9")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("*")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={() => handleKeyPress("4")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("5")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("6")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("-")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={() => handleKeyPress("1")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("2")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("3")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("+")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttonContainer]}>
                    <TouchableOpacity onPress={() => calculatorOnOff()} activeOpacity={0.5} disabled={false}>
                        <MaterialCommunityIcons style={[styles.button, {paddingVertical: 16, paddingHorizontal: 16}]} name={myDisabled ? 'eye' : 'eye-off'} size={20} color="#ff9621" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress("0")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleKeyPress(".")} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => calculate()} activeOpacity={0.5} disabled={myDisabled}>
                        <Text style={[styles.button, buttonDisable]}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Calculator;
