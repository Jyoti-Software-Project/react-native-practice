import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const PasswordInputTest = ({ label, placeholder, onChangeText }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <View style={{ marginVertical: 10 }}>
      <Text>{label}</Text>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc', }}>
          
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

export default PasswordInputTest;