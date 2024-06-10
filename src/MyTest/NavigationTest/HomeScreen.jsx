import * as React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        />
    </View>
);

export default HomeScreen;
