import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContainer: {
        borderWidth: 2,
        borderColor: "#698069",
        borderRadius: 18,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    formTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#55cc99",
        letterSpacing: 3,
        marginBottom: 15,
        textDecorationLine: "underline",
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 6,
        position: "relative",
    },
    inputTitle: {
        fontSize: 19,
        color: "#000000",
        letterSpacing: 3,
    },
    textBox: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#2196f3",
        borderRadius: 12,
        paddingHorizontal: 10,
        fontSize: 16,
        height: 35,
    },
    nameText: {
        width: 246,
    },
    emailText: {
        width: 240.5,
    },
    phoneText: {
        width: 238.5,
    },
    passwordText: {
        width: 198,
        paddingRight: 30,
    },
    errorMessage: {
        color: "red",
        fontSize: 12,
    },
    icon: {
        position: "absolute",
        top: 5,
        right: 5,
    },
    checkBoxContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 22,
    },
    checkBox: {
        flex: 1,
        padding: 10,
    },
    buttonContainer: {
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
});

export default styles;
