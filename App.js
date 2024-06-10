import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Project from './src/Project/Project';
import WhatsappProjectPage from './src/WhatsappProject/WhatsappProjectPage';
import Global from './src/GlobalTest/Global';

export default function App() {
    return (
        <View style={myStyles.container}>
            {/* <Text style={myStyles.title}>Demo Project</Text> */}
            {/* <Project /> */}
            <WhatsappProjectPage />
            {/* <Global /> */}
        </View>
    );
}

const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 0,
        color: '#390039',
        marginTop: 30,
    },
});
