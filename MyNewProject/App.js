// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//new code
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import DetailScreen from './screens/DetailScreen';
// import Button from './Components/Button';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#6200EE', // Change header background
//           },
//           headerTintColor: '#fff', // Change text color
//           headerTitleStyle: {
//             fontWeight: 'bold', // Customize font
//           },
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: 'Welcome Home', // Custom header title
//           }}
//         />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           options={({ navigation }) => ({
//             title: 'Details Page',
//             headerRight: () => (
//               <Button
//                 style={{
//                   backgroundColor: 'transparent',
//                   border: 'none',
//                   color: '#fff',
//                   fontSize: 16,
//                   padding: 5,
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => alert('More Options!')}
//               >
//                 Info
//               </Button>
//             ),
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalProvider } from './Context/GlobalState';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import InputForm from './InputFormScreen';
import PredictionScreen from './Prediction/Prediction';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import ProtectedScreen from './screens/ProtectedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Track authentication status

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');
      setIsAuthenticated(!!token); // Convert token to boolean
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return null; // Render nothing while checking auth state
  }

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
          }}
        >
          {isAuthenticated ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Home Page' }} />
              <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Page' }} />
              <Stack.Screen name="InputForm" component={InputForm} options={{ title: 'Input Form Page' }} />
              <Stack.Screen name="Prediction" component={PredictionScreen} options={{ title: 'Prediction Page' }} />
              <Stack.Screen name="Protected" component={ProtectedScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
