import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import { TextInput } from 'react-native-web'
import { FIREBASE_AUTH } from '../FirebaseConfig.js';
import { createUserWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = () => {
        createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.email);
            })
            .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

   /**const handleSignup = () => {
        FIREBASE_AUTH
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    }*/
    
 /**  const handleLogin = () => {
        FIREBASE_AUTH
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log("Logged in with: ", user.email)
        })
        .catch(error => alert(error.message))
    } */

    return (
        <KeyboardAvoidingView>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = "Email"
                    style = {styles.input}
                    value = {email}
                    onChangeText = {text=> setEmail(text)}
                />
                <TextInput
                    placeholder = "Password"
                    style = {styles.input}
                    value = {password}
                    onChangeText = {text=> setPassword(text)}
                    secureTextEntry

                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress = {handleSignup}>
                    <Text style={styles.button}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    inputContainer: {
        width: "80%",
    },

    buttonContainer: {
        marginTop: 40,
    },

    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
})