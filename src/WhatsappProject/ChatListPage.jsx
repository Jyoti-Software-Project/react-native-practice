import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ChatListPage = ({ navigation }) => {
    const chats = [];

    for (let i = 1; i <= 20; i++) {
        chats.push({ id: `${i}`, name: `Chat ${i}` });
    }

    return (
        <View style={styles.container}>
        <FlatList
            data={chats}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Chat', { chatId: item.id })}>
                <View style={styles.chatItem}>
                    <Text style={{color: '#fff',}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            )}
        />
        </View>
    );
};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#808080',
    },
});

export default ChatListPage;
