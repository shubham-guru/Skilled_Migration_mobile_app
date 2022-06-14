import React from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import Index from './Index';
import SignUp from './SignUp';
import Welcome from './Welcome';
import Login from './Login';
import Home from './Home';
import Bookmark from './Bookmark';
import XAAcademy from './XAAcademy';
import Eligibility from './Eligibility';
import AssessmentForm from './AssessmentForm';
import DetailedCourse from './DetailedCourse';

const Stack = createStackNavigator();

const StackNavigator = () => {

    return(
      <Stack.Navigator>
      <Stack.Group>
        {/* <Stack.Screen
        options={{header: () => null}}
        name="Spalsh"
        component={SplashScreen}
      /> */}
        <Stack.Screen
          options={{header: () => null}}
          name="Index"
          component={Index}
        />
         <Stack.Screen
          options={{header: () => null}}
          name="eligibility"
          component={Eligibility}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Skilled-Mig"
          component={Index}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Signup"
          component={SignUp}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="bookmark"
          component={Bookmark}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="academy"
          component={XAAcademy}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="form"
          component={AssessmentForm}
        />
         <Stack.Screen
          options={{header: () => null}}
          name="detailedCourse"
          component={DetailedCourse}
        />
       
      </Stack.Group>
    </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
  image:{
    width: '100%',
    height: '100%',
  },
  doneTxt:{
    marginHorizontal: 20,
    color: '#000',
    fontSize: 16
  }
})

export default StackNavigator;
