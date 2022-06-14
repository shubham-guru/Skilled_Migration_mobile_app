import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProgressCourses from './ProgressCourses';
import CompletedCourse from './CompletedCourse';
import CoursesList from './CoursesList';


const Tab = createMaterialTopTabNavigator();

const XAAcademy = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={styles.heading}>Welcome back !</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor:'#343',
          tabBarIndicatorStyle: {
          backgroundColor: '#D25930',
          }
        }}
      >
      <Tab.Screen name="All courses" component={CoursesList}/>
      <Tab.Screen name="In Progress" component={ProgressCourses} />
      <Tab.Screen name="Completed" component={CompletedCourse} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontFamily: 'CormorantGaramond-Bold',
    margin: 15,
    color: '#222',
  },
  innerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default XAAcademy;
