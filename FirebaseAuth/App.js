import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth } from 'firebase/auth'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'



const Stack = createNativeStackNavigator();
const {isSignedIn,setIsSignedIn} = useState(false);
const {email,setEmail} = useState('');
const {password,setPassword} = useState;('');
const navigation = useNavigation()

export default function App() {
  return (

    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false}} name ="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
