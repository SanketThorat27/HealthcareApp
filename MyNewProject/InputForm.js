// InputForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function InputForm({ onAddItem }) {
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim()) {
      onAddItem(input);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Item Name:</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type something..."
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    backgroundColor: '#E3F2FD',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#90CAF9',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
});
