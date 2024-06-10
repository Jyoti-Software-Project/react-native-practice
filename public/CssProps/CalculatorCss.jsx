import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        paddingHorizontal: 15,
        borderRadius: 18,
        marginVertical: 20,
    },
    displayContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    display: {
        width: "100%",
        height: "auto",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderColor: "#ff9621",
        textAlign: "right",
        padding: 10,
        fontSize: 25,
        color: "#ff9621",
        marginVertical: 30,
        backgroundColor: "#343541",
        opacity: 0.8,
        borderRadius: 18,
    },
    buttonContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        margin: 15,
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 12,
        color: "#ff9621",
        backgroundColor: "#343541",
        borderWidth: 1,
        borderColor: "#ff9621",
        borderRadius: 20,
    },
});

export default styles;
