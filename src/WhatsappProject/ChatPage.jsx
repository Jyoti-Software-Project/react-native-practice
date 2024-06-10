import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChatPage = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = () => {
        // Implement sending message logic here
        setChat([...chat, { id: chat.length.toString(), message }]);
        setMessage('');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={chat}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={styles.messageContainer}>
                    <Text>{item.message}</Text>
                </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Type a message..."
                onChangeText={(text) => setMessage(text)}
                value={message}
                style={styles.input}
                />
                <TouchableOpacity onPress={sendMessage}>
                <Text>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10,
    },
});

export default ChatPage;
