import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { fetchProtectedData, logoutUser } from '../API/api';

const ProtectedScreen = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadProtectedData = async () => {
      const result = await fetchProtectedData();
      if (result.error) {
        Alert.alert('Error', result.error);
        navigation.navigate('Login');
      } else {
        setData(result);
      }
    };
    loadProtectedData();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Protected Data:</Text>
      <Text>{JSON.stringify(data)}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProtectedScreen;
