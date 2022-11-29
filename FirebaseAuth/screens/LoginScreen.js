import { KeyboardAvoidingView, PermissionsAndroid, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior = "padding"
    >
      <View style = { styles.inputContainer}>
        <TextInput
            placeholder="email"
            // value={""}
            // onChangeText={ text =>}
            style={styles.input}
        />
        <TextInput
            placeholder="password"
            // value={""}
            // onChangeText={ text =>}
            style={styles.input}
            secureTextEntry
        />
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

    }
})