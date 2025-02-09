// Ensure to use capitalized Button from React Native or your custom Button component

// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function DetailScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>This is the Detail Screen</Text>
//       <Button
//         title="Go Back"
//         onPress={() => navigation.goBack()}
//         color="#6200EE"
//       />
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate('Home')}
//         color="#03DAC5"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#E3F2FD',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 20,
//     color: '#0D47A1',
//   },
// });

// import React, { useContext } from 'react';
// import { View, Text } from 'react-native';
// import { GlobalContext } from '../Context/GlobalState';
// import styles from '../styles';

// export default function DetailScreen() {
//   const { selectedItem } = useContext(GlobalContext);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Detail Screen</Text>
//       {selectedItem ? (
//         <>
//           <Text style={styles.itemText}>Name: {selectedItem.name}</Text>
//           <Text style={styles.itemText}>Description: {selectedItem.description}</Text>
//         </>
//       ) : (
//         <Text style={styles.itemText}>No item selected</Text>
//       )}
//     </View>
//   );
// }

import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GlobalContext } from '../Context/GlobalState';
import styles from '../styles';

export default function DetailScreen({ route }) {
  const { item } = route.params; // Item passed from HomeScreen
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    // Set selected item when the screen is loaded
    dispatch({ type: 'SET_SELECTED_ITEM', payload: item });
  }, [item, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Detail Screen</Text>
      </View>
      {state.selectedItem ? (
        <>
          <Text style={styles.itemText}>Name: {state.selectedItem.name}</Text>
          <Text style={styles.itemText}>Description: {state.selectedItem.description}</Text>
        </>
      ) : (
        <Text style={styles.itemText}>No item selected</Text>
      )}
    </View>
  );
}
