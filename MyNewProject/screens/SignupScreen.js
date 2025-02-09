import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { registerUser } from '../API/api';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const result = await registerUser(username, email, password);
    if (result.error) {
      Alert.alert('Error', result.error.error || 'Signup failed');
    } else {
      Alert.alert('Success', 'Registration successful!');
      navigation.navigate('Login'); // Redirect to login
    }
  };

  return (
    <View>
      <Text>Signup</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
