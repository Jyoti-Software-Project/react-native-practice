import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ navigation, title, backButton }) => {
    const handleGoBack = () => {
        if (backButton) {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerContent} onPress={handleGoBack} disabled={!backButton} activeOpacity={0.5}>
                {backButton && <Text style={styles.backButton}>{"<= "}</Text>}
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        paddingLeft: 15,
        backgroundColor: '#007AFF',
        alignItems: 'left',
        justifyContent: 'center',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
    },
    backButton: {
        fontSize: 20,
        color: '#fff',
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
});

export default Header;
