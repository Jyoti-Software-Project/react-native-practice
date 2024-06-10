import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TermsAndCondition = () => {
    return (
        <View style={styles.termsContainer}>
            <Text style={styles.termsTitle}>Terms and Conditions</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    termsContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    termsTitle: {
        fontSize: 25,
        fontWeight: "bold",
    },
})

export default TermsAndCondition;
