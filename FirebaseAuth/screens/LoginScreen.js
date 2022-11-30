import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, {useEffect, useState} from 'react'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const {isSignedIn,setIsSignedIn} = useState(false);
  const {email,setEmail} = useState('');
  const {password,setPassword} = useState;('');

  const navigation = useNavigation()

  const RegisterUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((resultBack)=>{
      console.log(resultBack);
    })
    .catch((re)=>{
      console.log(re);
    })
    }
  

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior = 'padding'
    >
      <View style = { styles.inputContainer}>
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={ text => setEmail(text)}
            style={styles.input}
        />
        <TextInput
            placeholder='Password'
            value={password}
            onChangeText={ text => setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        // onPress={handleLogin}
        // style={styles.button}
        >
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={RegisterUser}
        style={[styles.button, styles.buttonOutline]}
        >
        <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  )
  }

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainer: {
      width: '80%',
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 75,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#28b4ee',
      width: '100%',
      padding: 15,
      borderRadius: 67,
      alignItems: 'center'

    }, 
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#28b4ee',
      borderWidth: 2,

    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,

    },
   
    buttonOutlineText: {
      color: '#28b4ee',
      fontWeight: '700',
      fontSize: 16,
      
    },
})