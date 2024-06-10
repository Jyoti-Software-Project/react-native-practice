import { StyleSheet } from "react-native";

const styles = (property, value) =>
    StyleSheet.create({
        props: {
            [property]: value,
        },
    });

export default styles;


// if need check this

// import { StyleSheet } from "react-native";

// const styles = (bgColor, color) =>
//     StyleSheet.create({
//         BgColor: {
//             backgroundColor: bgColor,
//         },
//         Color: {
//             backgroundColor: color,
//         },
//     });

// export default styles;
