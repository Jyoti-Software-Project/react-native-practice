import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const PasswordInput = ({ label, placeholder, onChangeText }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <View style={{ marginVertical: 10 }}>
      <Text>{label}</Text>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc',
        }}>
        <TextInput placeholder={placeholder} secureTextEntry={isSecureEntry} style={{ flex: 1 }} onChangeText={onChangeText} />
        <TouchableOpacity
          onPress={() => {
            setIsSecureEntry((prev) => !prev);
          }}>
          <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  const handleChange = ({ name, value }) => {
    // Handle the password change logic here
    // console.log(`Changed ${name} to: ${value}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <PasswordInput label="Password" placeholder="Enter Password" onChangeText={(value) => {
          handleChange({ name: 'password', value });
        }}
      />
    </View>
  );
}