import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../firebase';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const SignUp = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    secureTextEntry1: true,
    secureTextEntry2: true,
    checkError: '',
  });
  const [error, setError] = useState({
    fullNameError: true,
    emailError: true,
    passwordError: true
  })

  const Navigation = useNavigation();

  const handleSignup = () => {
    if (data.fullName.trim() === '' || data.email.trim() === '' || data.password.trim() === '') {
      if(data.fullName.trim() === ''){
        setError({
          ...error,
          fullNameError: false
        });
      }
      else if(data.email.trim() === ''){
        setError({
          ...error,
          emailError: false
        })
      }
      else if(data.password.trim() === ''){
        setError({
          ...error,
          passwordError: false
        })
      }
      else{}
      setData({
        ...data,
        checkError: true,
      });
    }
    else {
      auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(userCredentials => {
        const user = userCredentials.users;
      })
      .catch(error => alert(error.message))

    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){Navigation.replace("Login");}
      else if(error){null}
      return unsubscribe
    })
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Sign up</Text>
        <Text style={styles.descp}>
          By clicking “Create account” you agree to our terms of service and
          privacy policy
        </Text>
        {data.checkError ? <Text style={styles.error}>Please fill all the fields</Text> : null}
        <View style={styles.outterBox}>
          <View>
            <Icon name="google" size={30} color="#ddd" />
          </View>
          <View>
            <Text style={styles.googleText}>Sign up with google</Text>
          </View>
        </View>
        <Text style={{ color: '#eee', alignSelf: 'center', fontSize: 20 }}>or</Text>

        <KeyboardAvoidingView>
        <View style={styles.textView}>
          <Text style={styles.inputLabel}>Fullname</Text>
          <TextInput
            style={[styles.textInput, {borderColor: error.fullNameError ? "#6536FF" : "red"}]}
            placeholder='Joe Admas'
            placeholderTextColor="#999"
            onChangeText={text => setData({ ...data, fullName: text })}
            value={data.fullName}
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={[styles.textInput, {textTransform: 'lowercase', borderColor: error.emailError ? "#6536FF" : "red"}]}
            keyboardType="email-address"
            placeholder='joe@gmail.com'
            placeholderTextColor="#999"
            onChangeText={text => setData({ ...data, email: text })}
            value={data.email}
          />

          <Text style={styles.inputLabel}>Password (6+ charaters)</Text>
          <TextInput
            style={[styles.textInput, {borderColor: error.passwordError ? "#6536FF" : "red"}]}
            secureTextEntry={data.secureTextEntry1 ? true : false}
            onChangeText={text => setData({ ...data, password: text })}
            value={data.password}
          />
          {/* <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                setData({...data, secureTextEntry1: !data.secureTextEntry1});
              }}>
              {data.secureTextEntry1 ? (
                <Icon name="eye-off-outline" size={25} />
              ) : (
                <Icon name="eye-outline" size={25} />
              )}

            </TouchableOpacity> */}

          <Animatable.View animation="flipInX" easing="ease-in"> 
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <LinearGradient
              colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
              start={{ x: 0.2, y: 2.0 }} end={{ x: 1.0, y: 1.0 }}
              style={{ height: 50, width: 300, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Text style={styles.buttonText}>
                  Create account
                </Text>
              </LinearGradient>
              </TouchableOpacity>
          </Animatable.View>


          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => Navigation.navigate("Login")} style={{ margin: 5 }}>
              <Text style={styles.textLink}>
                Have an account? Login
              </Text>
            </TouchableOpacity>
          </View>

        </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
  heading: {
    color: '#ddd',
    fontSize: 30,
    margin: 25,
  },
  descp: {
    width: '90%',
    alignSelf: 'center',
    color: '#4d4d4d'
  },
  inputLabel: {
    color: '#999',
    marginHorizontal: 25,
    marginBottom: 20
  },
  textInput: {
    fontSize: 16,
    marginTop: Platform.OS === 'ios' ? 0 : -6,
    margin: 20,
    paddingHorizontal: 20,
    borderColor: '#6536FF',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#171717',
    color: '#fff',
    // textTransform: 'capitalize'
  },
  error: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    color: "#ddd",
    textTransform: 'uppercase',
    marginVertical: 15
  },
  textLink: {
    color: '#eee',
    margin: 3,
    letterSpacing: 1,
    fontFamily: 'JosefinSans-Regular',
  },
  outterBox: {
    backgroundColor: '#171717',
    padding: 20,
    margin: 20,
    borderColor: '#191919',
    borderWidth: 1,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  googleText: {
    color: '#eee',
    fontSize: 18
  },
  buttonText: {
    textAlign: 'center',
    margin: 1,
    color: '#fff',
  },
  button: {
    alignSelf: 'center',
  },
});
