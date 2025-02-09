// import axios from 'axios';

// const BASE_URL = 'https://run.mocky.io/v3/70574f87-05e1-4899-8f72-5b727dd1194d';

// export const fetchPrediction = async (inputData) => {
//   try {
//     const response = await axios.post(BASE_URL, inputData, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching prediction:', error);
//     throw error;
//   }
// };

// export const getPrediction = async () => {
//     const url = 'http://127.0.0.1:8000/api/predict/'; // Your mock API URL
//     // const url = 'https://run.mocky.io/v3/70574f87-05e1-4899-8f72-5b727dd1194d'; // Your mock API URL
  
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json(); // Ensure the response is parsed to JSON
//       return data; // Return the parsed data
//     } catch (error) {
//       console.error('Error fetching prediction:', error);
//       throw error; // Throw error to be caught in the calling function
//     }
//   };

// export const getPrediction = async (selectedItem) => {
//     const url = 'http://127.0.0.1:8000/api/predict/'; // Replace with your API endpoint
    
//     try {
//       const response = await fetch(url, {
//         method: 'POST', // Ensure the method is POST
//         headers: {
//           'Content-Type': 'application/json', // Inform the server about the request format
//         },
//         body: JSON.stringify(selectedItem), // Send the selected item as a JSON payload
//       });
  
//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }
  
//       const data = await response.json(); // Parse the response JSON
//       return data; // Return the parsed data
//     } catch (error) {
//       console.error('Error fetching prediction:', error);
//       throw error; // Throw error to be caught in the calling function
//     }
//   };

//mod-1 on 30/01/2025
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://127.0.0.1:8000/api'; // Base URL of your backend

// ========================= AUTHENTICATION FUNCTIONS =========================

// Register User
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register/`, {
      username,
      email,
      password,
    });
    return response.data; // { success: "User registered successfully", token: "your_token" }
  } catch (error) {
    return { error: error.response?.data || "Registration failed" };
  }
};

// Login User
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/token-auth/`, {
      username,
      password,
    });
    const { token } = response.data;

    // Store token in AsyncStorage
    await AsyncStorage.setItem('authToken', token);
    return { success: true, token };
  } catch (error) {
    return { error: error.response?.data || "Login failed" };
  }
};


// Get Token from AsyncStorage
export const getToken = async () => {
  return await AsyncStorage.getItem('authToken');
};

// Fetch Protected Data
export const fetchProtectedData = async () => {
  try {
    const token = await getToken();
    const response = await axios.get(`${API_URL}/protected/`, {
      headers: { Authorization: `Token ${token}` },
    });
    return response.data;
  } catch (error) {
    return { error: "Unauthorized access or invalid token" };
  }
};

// Logout
export const logoutUser = async () => {
  await AsyncStorage.removeItem('authToken');
};

// ========================= EXISTING PREDICTION FUNCTION =========================

export const getPrediction = async (selectedItem) => {
  const url = `${API_URL}/predict/`; // Ensure it uses the correct base URL

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedItem),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching prediction:', error);
    throw error;
  }
};
