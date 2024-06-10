import * as React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = ({ route }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is {route.params.name}'s profile</Text>
    </View>
);

export default ProfileScreen;
