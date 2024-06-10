import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const PasswordHide = () => {
  const [password, setPassword] = useState('');
  const [maskedPassword, setMaskedPassword] = useState('');

  const handlePassword = (text) => {
    // Update the actual password value
    setPassword(text);

    // Mask the displayed password with asterisks
    const masked = '*'.repeat(text.length);
    setMaskedPassword(masked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Password : </Text>
        <TextInput
          style={[styles.textBox, styles.passwordText]}
          multiline
          numberOfLines={2}
          value={maskedPassword} // Display maskedPassword instead of actual password
          onChangeText={handlePassword} // Update actual password and mask it
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputTitle: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
  },
  passwordText: {
    // Additional styles for password input if needed
  },
});

export default PasswordHide;
