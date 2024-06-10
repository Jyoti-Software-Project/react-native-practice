import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CheckBox from 'react-native-check-box';

const CheckBoxTest = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox style={{ flex: 1, padding: 10 }} isChecked={isChecked} leftText={"CheckBox"} onClick={() => { setIsChecked(!isChecked); }} />
                <Text style={styles.label}>Do you like React Native?</Text>
            </View>
            <Text>Is CheckBox selected: {isChecked ? '👍' : '👎'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
});

export default CheckBoxTest;
