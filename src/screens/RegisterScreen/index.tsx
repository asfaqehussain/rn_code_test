import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useAppContext} from '../../context';

export default function RegisterScreen() {
  const {formData, updateFormData} = useAppContext();

  const handleSubmit = () => {
    // Perform the action with the data
    console.log(' Formdata --->', formData);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.text}>First Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => updateFormData('firstName', text)}
          value={formData.firstName}
        />

        <Text style={styles.text}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => updateFormData('lastName', text)}
          value={formData.lastName}
        />

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => updateFormData('email', text)}
          value={formData.email}
        />

        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => updateFormData('phoneNumber', text)}
          value={formData.phoneNumber}
        />

        <Text style={styles.text}>Address</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => updateFormData('address', text)}
          value={formData.address}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={{color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 20,
  },
  textInput: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 25,
    paddingHorizontal: 25,
  },
  text: {
    color: '#000',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#000fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 40,
    width: 120,
    alignSelf: 'center',
    marginTop: 30,
  },
});
