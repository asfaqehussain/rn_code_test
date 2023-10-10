import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {AppProvider} from './src/context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
