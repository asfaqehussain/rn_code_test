import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {updateFormData} from '../../redux/actions';

export default function RegisterScreen() {
  const formData = useSelector(state => state.form);
  const dispatch = useDispatch();

  //Redux implementation to dispatch the field values to global store
  const handleInputChange = (field, value) => {
    dispatch(updateFormData({[field]: value}));
  };

  const handleSubmit = () => {
    // Perform the action with the data
    console.log('Redux Formdata --->', formData);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.text}>First Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleInputChange('firstName', text)}
          value={formData.firstName}
        />

        <Text style={styles.text}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleInputChange('lastName', text)}
          value={formData.lastName}
        />

        <Text style={styles.text}>Email</Text>
        <TextInput
          inputMode="email"
          style={styles.textInput}
          onChangeText={text => handleInputChange('email', text)}
          value={formData.email}
        />

        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          inputMode="numeric"
          style={styles.textInput}
          onChangeText={text => handleInputChange('phoneNumber', text)}
          value={formData.phoneNumber}
        />

        <Text style={styles.text}>Address</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => handleInputChange('address', text)}
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
