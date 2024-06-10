import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
    },
    backgroundImage: {
        width: 200,
        height: 250,
        resizeMode: 'cover',
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginBottom: 30,
        fontSize: 29,
        color: "#946725",
    },
    cardTitle: {
        marginBottom: 30,
        fontSize: 32,
        color: "#ffffff",
        letterSpacing: 5,
    },
    cardYear: {
        fontSize: 13,
        color: "#00ff00",
        letterSpacing: 4,
    },
    cardText: {
        fontSize: 20,
        color: "#ffffff",
        lineHeight: 30,
        letterSpacing: 6,
    },
});

export default styles;
