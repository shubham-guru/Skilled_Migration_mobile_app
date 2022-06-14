import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { auth } from '../firebase';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Login = () => {

  const Navigation = useNavigation();

  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    checkError: ''
  });
  const [error, setError] = useState({
    emailError: true,
    passwordError: true
  })

  const handlePasswordChange = pass => {
    setData({
      ...data,
      password: pass,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = () => {
    if(data.email.trim() === ''){
      setError({
        ...error,
        emailError: false,
      })
      setData({
        ...data,
        checkError: true
      })
    }
    else if(data.password.trim() === ''){
      setError({
        ...error,
        passwordError: false,
      })
      setData({
        ...data,
        checkError: true
      })
    }
    else{
      auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(userCredentials => {
        const user = userCredentials.users;
        console.log(user)
      })
      .catch(error => alert(error.message))
  
      const unsubscribe = auth.onAuthStateChanged(user => {
        if(user) {Navigation.replace("Skilled-Mig");}
        else if(error){null}
        return unsubscribe
      })
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Log In</Text>
        <View style={styles.outterBox}>
          <View>
            <Icon name="google" size={30} color="#ddd" />
          </View>
          <View>
            <Text style={styles.googleText}>Login with google</Text>
          </View>
        </View>
        {data.checkError ? <Text style={styles.error}>Please fill all the fields</Text> : null}
        <Text style={{ color: '#eee', alignSelf: 'center', fontSize: 20 }}>or</Text>

        <KeyboardAvoidingView>
        <View style={styles.textView}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={[styles.textInput, {textTransform: 'lowercase', borderColor: error.emailError ? "#6536FF" : "red"}]}
            keyboardType="email-address"
            placeholder='joe@gmail.com'
            placeholderTextColor="#999"
            onChangeText={text => setData({ ...data, email: text })}
            value={data.email}
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={[styles.textInput, {borderColor: error.passwordError ? "#6536FF" : "red"}]}
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={text => setData({ ...data, password: text })}
            value={data.password}
          />
          <Animatable.View animation="flipInX" easing="ease-in"> 
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <LinearGradient
              colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
              start={{ x: 0.2, y: 2.0 }} end={{ x: 1.0, y: 1.0 }}
              style={{ height: 50, width: 300, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                <Text style={styles.buttonText}>
                  Login
                </Text>
              </LinearGradient>
              </TouchableOpacity>
          </Animatable.View>


          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => Navigation.navigate("Signup")} style={{ margin: 5 }}>
              <Text style={styles.textLink}>
                Don't have an account? Signup
              </Text>
            </TouchableOpacity>
          </View>

        </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
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
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#171717',
    color: '#fff',
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
