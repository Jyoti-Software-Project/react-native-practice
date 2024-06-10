import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width : "100%",
        height : "100%",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    homeContainer: {
        width: "100%",
        borderRadius: 18,
        padding: 10,
        justifyContent: "center",
        backgroundColor: "#000000",
        opacity: 0.7,
    },
    darkMode: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    homeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#ffffff",
        letterSpacing: 3,
        marginBottom: 15,
        textDecorationLine: "underline",
        textAlign: "center",
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
        color: "#ffffff"
    },
});

export default styles;
