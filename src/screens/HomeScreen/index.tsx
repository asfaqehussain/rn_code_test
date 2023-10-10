import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
      <Button title='Register Now' onPress={()=> navigation.navigate('RegisterScreen')}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  
});
