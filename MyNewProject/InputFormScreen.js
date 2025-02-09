// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import { GlobalContext } from './Context/GlobalState';
// import styles from './styles';

// export default function InputFormScreen({ navigation }) {
//     const { setSelectedItem } = useContext(GlobalContext);
//     const [formData, setFormData] = useState({
//         name: '',
//         age: '',
//         symptoms: '',
//     });

//     const handleInputChange = (field, value) => {
//         setFormData({ ...formData, [field]: value });
//     };

//     // const handleSubmit = () => {
//     //     if (formData.name && formData.age && formData.symptoms) {
//     //         // setSelectedItem(formData);
//     //         Alert.alert('Success', 'Form submitted successfully!');
//     //         navigation.navigate('Detail'); // Navigate to the detail screen
//     //     } else {
//     //         Alert.alert('Error', 'Please fill out all fields');
//     //     }
//     // };
//     const handleSubmit = () => {
//         const newItem = { name, description };
//         dispatch({ type: 'SET_SELECTED_ITEM', payload: newItem });
//         navigation.goBack();
//       };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Input Form</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Name"
//                 value={formData.name}
//                 onChangeText={(value) => handleInputChange('name', value)}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Age"
//                 keyboardType="numeric"
//                 value={formData.age}
//                 onChangeText={(value) => handleInputChange('age', value)}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Symptoms"
//                 multiline
//                 numberOfLines={4}
//                 value={formData.symptoms}
//                 onChangeText={(value) => handleInputChange('symptoms', value)}
//             />
//             <Button title="Submit" onPress={handleSubmit} />
//         </View>
//     );
// }

//mod-1
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { GlobalContext } from './Context/GlobalState';
import styles from './styles';

export default function InputFormScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { dispatch } = useContext(GlobalContext);

  const handleSubmit = () => {
    if (!name.trim() || !description.trim()) {
      alert('Both fields are required!');
      return;
    }

    const newItem = { id: Date.now().toString(), name, description };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Add New Item</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
