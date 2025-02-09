// import React, { useContext, useState } from 'react';
// import { View, Text, ActivityIndicator, Button } from 'react-native';
// import { GlobalContext } from '../Context/GlobalState';
// import { getPrediction } from '../API/api';
// import styles from '../styles';

// export default function PredictionScreen({ navigation }) {
//   const { state } = useContext(GlobalContext); // Access selectedItem
//   const [loading, setLoading] = useState(false);
//   const [prediction, setPrediction] = useState(null);

//   const fetchPrediction = async () => {
//     try {
//       setLoading(true);
//       const result = await getPrediction(state.selectedItem); // Send selected item data
//       setPrediction(result.prediction); // Assuming the API response has a `prediction` field
//     } catch (error) {
//       console.error('Failed to fetch prediction:', error);
//       setPrediction('Error fetching prediction.');
//     } finally {
//       setLoading(false);
//     }
//   };
    
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Prediction Screen</Text>
//       {state.selectedItem ? (
//         <>
//           <Text style={styles.itemText}>Input Data:</Text>
//           <Text style={styles.itemText}>{JSON.stringify(state.selectedItem, null, 2)}</Text>

//           {loading ? (
//             <ActivityIndicator size="large" color="#0D47A1" />
//           ) : prediction ? (
//             <Text style={styles.predictionText}>Prediction: {prediction}</Text>
//           ) : (
//             <Button title="Get Prediction" onPress={fetchPrediction} />
//           )}
//         </>
//       ) : (
//         <Text style={styles.itemText}>No input data provided.</Text>
//       )}

//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

//mod-1
// import React, { useContext, useState } from 'react';
// import { View, Text, ActivityIndicator, Button } from 'react-native';
// import { GlobalContext } from '../Context/GlobalState'; // Access global state
// import { getPrediction } from '../API/api'; // API utility
// import styles from '../styles'; // Style file

// export default function PredictionScreen({ navigation }) {
//   const { state } = useContext(GlobalContext); // Access selectedItem from global state
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const [prediction, setPrediction] = useState(null); // State for prediction result
//   const [confidence, setConfidence] = useState(null); // State for prediction result

//   // Function to fetch prediction from the API
// //   const fetchPrediction = async () => {
// //     try {
// //       setLoading(true); // Show loading indicator
// //       const inputData = state.selectedItem; // Get selected item data from global state
// //       if (!inputData) throw new Error('No input data provided.');

// //       const result = await getPrediction(inputData); // Send data to the API
// //       console.log('API Response:', result); // Log API response for debugging
// //       setPrediction(result.prediction); // Update state with prediction result
// //       setConfidence(result.confidence); // Update state with prediction result
// //     } catch (error) {
// //       console.error('Failed to fetch prediction:', error); // Log errors
// //       setPrediction('Error fetching prediction.'); // Display error message
// //       setConfidence('Error fetching Confidence.'); // Display error message
// //     } finally {
// //       setLoading(false); // Hide loading indicator
// //     }
// //   };

// const fetchPrediction = async () => {
//     try {
//       setLoading(true);
//       const result = await getPrediction(); // No need to send selectedItem here
//       console.log('Prediction Result:', result); // Check the result here
//       setPrediction(result.prediction); // Assuming result contains prediction and confidence
//     } catch (error) {
//       console.error('Failed to fetch prediction:', error);
//       setPrediction('Error fetching prediction.');
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       <View style={styles.titleWrapper}>
//         <Text style={styles.title}>Prediction Screen</Text>
//       </View>
//       {state.selectedItem ? (
//         <>
//           <Text style={styles.itemText}>Input Data:</Text>
//           <Text style={styles.itemText}>{JSON.stringify(state.selectedItem, null, 2)}</Text>

//           {loading ? (
//             <ActivityIndicator size="large" color="#0D47A1" /> // Show loading spinner
//           ) : prediction ? (
//             <Text style={styles.predictionText}>Prediction: {prediction}</Text> // Show prediction result
//           ) : (
//             <Button title="Get Prediction" onPress={fetchPrediction} /> // Button to fetch prediction
//           )}
//         </>
//       ) : (
//         <Text style={styles.itemText}>No input data provided.</Text> // Handle case with no input data
//       )}

//       <Button title="Go Back" onPress={() => navigation.goBack()} /> // Navigation button
//     </View>
//   );
// }

//mod-2
// import React, { useContext, useState } from 'react';
// import { View, Text, ActivityIndicator, Button } from 'react-native';
// import { GlobalContext } from '../Context/GlobalState'; // Access global state
// import { getPrediction } from '../API/api'; // API utility
// import styles from '../styles'; // Style file

// export default function PredictionScreen({ navigation }) {
//   const { state } = useContext(GlobalContext); // Access selectedItem from global state
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const [prediction, setPrediction] = useState(null); // State for prediction result
//   const [confidence, setConfidence] = useState(null); // State for confidence score

//   // Function to fetch prediction from the API
//   const fetchPrediction = async () => {
//     try {
//       setLoading(true); // Show loader
//       const result = await getPrediction(state.selectedItem); // Pass input data to the API
//       console.log('Prediction Result:', result); // Debugging the response
//       setPrediction(result.prediction); // Set prediction result
//       setConfidence(result.confidence); // Set confidence score
//     } catch (error) {
//       console.error('Failed to fetch prediction:', error);
//       setPrediction('Error fetching prediction.'); // Handle error case
//     } finally {
//       setLoading(false); // Hide loader
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.titleWrapper}>
//         <Text style={styles.title}>Prediction Screen</Text>
//       </View>
//       {state.selectedItem ? (
//         <>
//           <Text style={styles.itemText}>Input Data:</Text>
//           <Text style={styles.itemText}>{JSON.stringify(state.selectedItem, null, 2)}</Text>

//           {loading ? (
//             <ActivityIndicator size="large" color="#0D47A1" /> // Show loading spinner
//           ) : prediction ? (
//             <View style={styles.resultContainer}>
//               <Text style={styles.predictionText}>Prediction: {prediction}</Text>
//               {confidence && (
//                 <Text style={styles.predictionText}>
//                   Confidence: {(confidence * 100).toFixed(2)}%
//                 </Text>
//               )}
//               <Button title="Get New Prediction" onPress={fetchPrediction} />
//             </View>
//           ) : (
//             <Button title="Get Prediction" onPress={fetchPrediction} /> // Button to fetch prediction
//           )}
//         </>
//       ) : (
//         <Text style={styles.itemText}>No input data provided.</Text> // Handle case with no input data
//       )}
//       <Button title="Go Back" onPress={() => navigation.goBack()} /> // Navigation button
//     </View>
//   );
// }

//mod-3
// import React, { useContext, useState } from 'react';
// import { View, Text, ActivityIndicator, Button, Alert } from 'react-native';
// import { GlobalContext } from '../Context/GlobalState'; // Access global state
// import { getPrediction } from '../API/api'; // API utility
// import styles from '../styles'; // Style file

// export default function PredictionScreen({ navigation }) {
//   const { state } = useContext(GlobalContext); // Access selectedItem from global state
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const [prediction, setPrediction] = useState(null); // State for prediction result
//   const [confidence, setConfidence] = useState(null); // State for confidence score

//   // Function to fetch prediction from the API
//   const fetchPrediction = async () => {
//     if (!state.selectedItem) {
//       Alert.alert('Error', 'No input data provided.'); // Show an error alert
//       return;
//     }

//     try {
//       setLoading(true); // Show loader
//       console.log('Sending input data to API:', state.selectedItem); // Log input data for debugging
//       const result = await getPrediction(state.selectedItem); // Pass input data to the API
//       console.log('API Response:', result); // Debugging the response

//       if (result.error) {
//         setPrediction('Error: ' + result.error); // Handle API errors
//         setConfidence(null);
//       } else {
//         setPrediction(result.prediction); // Set prediction result
//         setConfidence(result.confidence); // Set confidence score
//       }
//     } catch (error) {
//       console.error('Failed to fetch prediction:', error);
//       setPrediction('Error fetching prediction.'); // Handle error case
//       setConfidence(null);
//     } finally {
//       setLoading(false); // Hide loader
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.titleWrapper}>
//         <Text style={styles.title}>Prediction Screen</Text>
//       </View>
//       {state.selectedItem ? (
//         <>
//           <Text style={styles.itemText}>Input Data:</Text>
//           <Text style={styles.itemText}>{JSON.stringify(state.selectedItem, null, 2)}</Text>

//           {loading ? (
//             <ActivityIndicator size="large" color="#0D47A1" /> // Show loading spinner
//           ) : prediction ? (
//             <View style={styles.resultContainer}>
//               <Text style={styles.predictionText}>Prediction: {prediction}</Text>
//               {confidence !== null && (
//                 <Text style={styles.predictionText}>
//                   Confidence: {(confidence * 100).toFixed(2)}%
//                 </Text>
//               )}
//               <Button title="Get New Prediction" onPress={fetchPrediction} />
//             </View>
//           ) : (
//             <Button title="Get Prediction" onPress={fetchPrediction} /> // Button to fetch prediction
//           )}
//         </>
//       ) : (
//         <Text style={styles.itemText}>No input data provided.</Text> // Handle case with no input data
//       )}
//       <Button title="Go Back" onPress={() => navigation.goBack()} /> // Navigation button
//     </View>
//   );
// }

//mod-4
// import React, { useContext, useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator, Button } from 'react-native';
// import { GlobalContext } from '../Context/GlobalState'; // Access global state
// import { getPrediction } from '../API/api'; // API utility
// import styles from '../styles'; // Style file

// export default function PredictionScreen({ navigation }) {
//   const { state, dispatch } = useContext(GlobalContext); // Access global state and dispatch
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const [prediction, setPrediction] = useState(null); // State for prediction result
//   const [confidence, setConfidence] = useState(null); // State for confidence score

//   // Default or Test Data
//   const defaultData = {
//     Pregnancies: 2,
//     Glucose: 120,
//     BloodPressure: 80,
//     SkinThickness: 20,
//     Insulin: 85,
//     BMI: 24.5,
//     DiabetesPedigreeFunction: 0.5,
//     Age: 30,
//   };

//   // UseEffect to set default data in global state
//   useEffect(() => {
//     if (!state.selectedItem) {
//       dispatch({ type: 'SET_SELECTED_ITEM', payload: defaultData });
//     }
//   }, []);

//   // Function to fetch prediction from the API
// //   const fetchPrediction = async () => {
// //     try {
// //       setLoading(true); // Show loader
// //       const result = await getPrediction(state.selectedItem); // Pass input data to the API
// //       console.log('Prediction Result:', result); // Debugging the response
// //       setPrediction(result.prediction); // Set prediction result
// //       setConfidence(result.confidence); // Set confidence score
// //     } catch (error) {
// //       console.error('Failed to fetch prediction:', error);
// //       setPrediction('Error fetching prediction.'); // Handle error case
// //     } finally {
// //       setLoading(false); // Hide loader
// //     }
// //   };
// const fetchPrediction = async () => {
//     try {
//       setLoading(true);
//       const result = await getPrediction(state.selectedItem); // Pass selectedItem as input
//       console.log('Prediction Result:', result); // Debugging the response
//       setPrediction(result.prediction);
//       setConfidence(result.confidence);
//       console.log('Selected Item:', state.selectedItem);
//     } catch (error) {
//       console.error('Failed to fetch prediction:', error);
//       setPrediction('Error fetching prediction.'); // Handle error case
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       <View style={styles.titleWrapper}>
//         <Text style={styles.title}>Prediction Screen</Text>
//       </View>
//       {state.selectedItem ? (
//         <>
//           <Text style={styles.itemText}>Input Data:</Text>
//           <Text style={styles.itemText}>{JSON.stringify(state.selectedItem, null, 2)}</Text>

//           {loading ? (
//             <ActivityIndicator size="large" color="#0D47A1" /> // Show loading spinner
//           ) : prediction ? (
//             <View style={styles.resultContainer}>
//               <Text style={styles.predictionText}>Prediction: {prediction}</Text>
//               {confidence && (
//                 <Text style={styles.predictionText}>
//                   Confidence: {(confidence * 100).toFixed(2)}%
//                 </Text>
//               )}
//               <Button title="Get New Prediction" onPress={fetchPrediction} />
//             </View>
//           ) : (
//             <Button title="Get Prediction" onPress={fetchPrediction} /> // Button to fetch prediction
//           )}
//         </>
//       ) : (
//         <Text style={styles.itemText}>No input data provided.</Text> // Handle case with no input data
//       )}
//       <Button title="Go Back" onPress={() => navigation.goBack()} /> // Navigation button
//     </View>
//   );
// }

//mod-5
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { GlobalContext } from '../Context/GlobalState'; // Access global state
import { getPrediction } from '../API/api'; // API utility
import styles from '../styles'; // Style file

export default function PredictionScreen({ navigation }) {
  const { state, dispatch } = useContext(GlobalContext); // Access global state and dispatch
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [prediction, setPrediction] = useState(null); // State for prediction result
  const [confidence, setConfidence] = useState(null); // State for confidence score

  // Default or Test Data
  const defaultData = {
    Pregnancies: 2,
    Glucose: 120,
    BloodPressure: 80,
    SkinThickness: 20,
    Insulin: 85,
    BMI: 24.5,
    DiabetesPedigreeFunction: 0.5,
    Age: 30,
  };

  // UseEffect to set default data in global state
  useEffect(() => {
    if (!state.selectedItem) {
      dispatch({ type: 'SET_SELECTED_ITEM', payload: defaultData });
    }
  }, []);

  const fetchPrediction = async () => {
    try {
      setLoading(true);
      const result = await getPrediction(state.selectedItem); // Pass selectedItem as input
      setPrediction(result.prediction || 'Unknown'); // Fallback to 'Unknown' if prediction is undefined
      setConfidence(result.confidence || 0); // Fallback to 0 if confidence is undefined
    } catch (error) {
      setPrediction('Error fetching prediction.'); // Handle error case
      setConfidence(null); // Clear confidence in case of an error
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Prediction Screen</Text>
      </View>
      {state.selectedItem ? (
        <>
          <Text style={styles.itemText}>Input Data:</Text>
          <Text style={styles.itemText}>
            {JSON.stringify(state.selectedItem, null, 2) || 'No data available.'}
          </Text>

          {loading ? (
            <ActivityIndicator size="large" color="#0D47A1" /> // Show loading spinner
          ) : prediction ? (
            <View style={styles.resultContainer}>
              <Text style={styles.predictionText}>
                Prediction: {typeof prediction === 'string' ? prediction : 'Invalid result'}
              </Text>
              {confidence !== null && (
                <Text style={styles.predictionText}>
                  Confidence: {confidence ? (confidence * 100).toFixed(2) : '0.00'}%
                </Text>
              )}
              <Button title="Get New Prediction" onPress={fetchPrediction} />
            </View>
          ) : (
            <Button title="Get Prediction" onPress={fetchPrediction} /> // Button to fetch prediction
          )}
        </>
      ) : (
        <Text style={styles.itemText}>No input data provided.</Text> // Handle case with no input data
      )}
      <Button title="Go Back" onPress={() => navigation.goBack()} /> // Navigation button
    </View>
  );
}
