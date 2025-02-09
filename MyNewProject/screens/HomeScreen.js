// import React, { useContext } from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import { GlobalContext } from '../Context/GlobalState';
// import styles from '../styles';

// export default function HomeScreen({ navigation }) {
//   const { setSelectedItem } = useContext(GlobalContext);

//   const data = [
//     { id: '1', name: 'Item 1', description: 'This is the description for Item 1' },
//     { id: '2', name: 'Item 2', description: 'This is the description for Item 2' },
//     { id: '3', name: 'Item 3', description: 'This is the description for Item 3' },
//   ];

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.item}
//       onPress={() => {
//         setSelectedItem(item); // Set the item in global state
//         navigation.navigate('Detail'); // Navigate to Detail screen
//       }}
//     >
//       <Text style={styles.itemText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Screen</Text>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }

//mod-1
// import React, { useContext } from 'react';
// import { View, Text, FlatList, TouchableOpacity,Button } from 'react-native';
// import InputForm from '../InputForm';
// import { GlobalContext } from '../Context/GlobalState';
// import styles from '../styles';

// export default function HomeScreen({ navigation }) {
//   const { state, dispatch } = useContext(GlobalContext);

//   const addItem = (name) => {
//     const newItem = {
//       id: (state.items.length + 1).toString(),
//       name,
//       description: `Description for ${name}`,
//     };
//     dispatch({ type: 'ADD_ITEM', payload: newItem });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.item}
//       onPress={() => navigation.navigate('Detail', { item })}
//     >
//       <Text style={styles.itemText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Screen</Text>
//       <InputForm onAddItem={addItem} />
//       <Button title="Fill Health Data Form" onPress={() => navigation.navigate('InputForm')} />
//       <FlatList
//         data={state.items}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }


//mod-2
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { GlobalContext } from '../Context/GlobalState';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  const { state, dispatch } = useContext(GlobalContext);

  const removeItem = (id) => {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    };
    
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Detail', { item })}
        >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
      <Button
        title="Remove"
        color="#FF3D00"
        onPress={() => removeItem(item.id)}
        />
    </View>
  );
  
  return (
      <View style={styles.container}>
      {/* <Text style={styles.title}>Home Screen</Text> */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Home Screen</Text>
      </View>
       {/* <Button title="Fill Health Data Form" onPress={() => navigation.navigate('InputForm')} />
       <Button title="View Prediction"onPress={() => navigation.navigate('Prediction')}/> */}
        <View style={{ marginBottom: 10 }}>
            <Button title="Fill Health Data Form" onPress={() => navigation.navigate('InputForm')} />
        </View>
  
        <View style={{ marginBottom: 10 }}>
            <Button title="View Prediction" onPress={() => navigation.navigate('Prediction')} />
        </View>
      <FlatList
        data={state.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Add New Item"
        onPress={() => navigation.navigate('InputForm')}
      />
    </View>
  );
}
