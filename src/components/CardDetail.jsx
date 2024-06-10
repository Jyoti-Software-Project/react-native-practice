import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardDetail = (props) => {
    return (
        <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, color: "red"}}>{props.textData} text</Text>
        </View>
    );
};
// const CardDetail = (jyoti) => {
//     return (
//         <View style={{marginTop: 20}}>
//             <Text style={{fontSize: 20, color: "red"}}>{jyoti.textData}</Text>
//         </View>
//     );
// };

// const CardDetail = ({textData}) => {
//     return (
//         <View style={{marginTop: 20}}>
//             <Text style={{fontSize: 20, color: "red"}}>{textData}</Text>
//         </View>
//     );
// };

export default CardDetail;