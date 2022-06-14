import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from 'react-native';
import OnboardingScreen from './components/OnboardingScreen';
import StackNavigator from './components/StackNavigator';


function App(){
  LogBox.ignoreLogs([
    "Bottom Tab Navigator: 'tabBarOptions' is deprecated. Migrate the options to 'screenOptions' instead."
  ]);
  return (
    <NavigationContainer style={styles.container}>
      {/* <OnboardingScreen /> */}
      <StackNavigator />
      <StatusBar backgroundColor='#000' barStyle="light-content" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
  },
})
export default App;
