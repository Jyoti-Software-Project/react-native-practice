import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    goBackButtonContainer: {
        width: "100%",
        height: 50,
        backgroundColor: "#2196f3",
        alignItems: "left",
        justifyContent: "center",
        elevation: 0,
    },
    goBackButton: {
        width: "100%",
        fontSize: 25,
        color: "#000000",
    },
    pageContainer: {
        width: "100%",
        height: "100%",
        // paddingTop: -18,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    loadingContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    formContainer: {
        width: "100%",
        borderWidth: 2,
        borderColor: "#698069",
        borderRadius: 18,
        padding: 10,
        justifyContent: "center",
        backgroundColor: "#d8e4e9",
        opacity: 0.7,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        letterSpacing: 3,
        marginBottom: 10,
        textAlign: "center",
        textDecorationLine: "underline",
    },
    darkMode: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "100%",
        flex: 0,
        marginBottom: 2,
        position: "relative",
    },
    inputTitle: {
        fontSize: 19,
        color: "#000000",
        letterSpacing: 3,
    },
    textBox: {
        width: "auto",
        borderWidth: 1,
        borderColor: "#2196f3",
        borderRadius: 12,
        paddingHorizontal: 10,
        fontSize: 17,
        height: 35,
    },
    passwordText: {
        paddingRight: 0,
    },
    errorMessage: {
        color: "red",
        fontSize: 13,
    },
    toggle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    pageText: {
        fontSize: 17,
        letterSpacing: 1,
        color: "#000000",
    },
    checkBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18,
    },
    checkBox: {
        flex: 0,
        paddingRight: 10,
        borderColor: "red",
    },
    buttonContainer: {
        flexDirection: "row",
        paddingHorizontal: 70,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    button: {
        paddingVertical: 7,
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2196f3",
        borderRadius: 5,
    },
    buttonText: {
        textTransform: "uppercase",
        fontSize: 14,
        color: "#000000"
    },
    navigationContainer: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
