import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HookEffect from './src/MyTest/HookEffect';
import Calculator from './src/MyTest/Calculator';

export default function App() {
    const [calculatorExist, setCalculatorExist] = useState(false);

    useEffect(() => {
        if (typeof Calculator !== 'undefined' && Calculator !== null) {
            setCalculatorExist(true);
        }
        else {
            setCalculatorExist(false);
        }
    }, [1000]);

    const generateSpace = (count) => {
        return Array(count).fill('\u2003').join('');
    };

    return (
        <View style={myStyles.container}>
            <Text style={myStyles.title}>{calculatorExist ? 'Calculatorr' : 'Test App'}</Text>
            <ScrollView style={myStyles.scrollContainer}>
                {/* <HookEffect />
                <Text style={myStyles.spaceVartically}>{generateSpace(24)}</Text> */}
                <Calculator />
            </ScrollView>
        </View>
    );
}

const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#390039',
    },
    scrollContainer: {
        backgroundColor: '#fff',
    },
    spaceVartically: {
        textDecorationLine: 'underline',
        marginVertical: 20,
    },
});
