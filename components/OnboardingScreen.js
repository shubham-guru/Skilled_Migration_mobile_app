import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import StackNavigator from './StackNavigator';


const OnboardingScreen = () => {
  const Navigation = useNavigation();
  const [isFirstLaunch, setIsfirstlaunch] = useState(null);

    useEffect(()=>{
      AsyncStorage.getItem('alreadyLaunched').then(value =>{
        if(value === null){
          AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsfirstlaunch(true);
        } else {
          setIsfirstlaunch(false)
        }
      })
    }, []);

    if(isFirstLaunch === null){
        return null;
      } else if(isFirstLaunch === true){
        return(
          <StackNavigator />
        );
      } else{ 
        Navigation.navigate("bookmark")
      }
    
      const Done = () => {
          return (
          <TouchableOpacity onPress={()=>Navigation.navigate("Login")}>
              <Text style={styles.doneTxt}>Done</Text>
          </TouchableOpacity>
          );
      }

      return (
        <>
          <Onboarding
            onSkip={()=> Navigation.navigate("Login")}
            onDone ={()=>Navigation.navigate("Login")}
            DoneButtonComponent={Done}
            pages={[
              {
                backgroundColor: '#fff',
                image: <Image source={require('../images/profile.jpg')} style={styles.image}/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
              },
              {
                backgroundColor: '#fff',
                image: <Image source={require('../images/eligibility.jpg')} style={styles.image}/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
              },
              {
                backgroundColor: '#fff',
                image: <Image source={require('../images/welcome.jpg')} style={styles.image}/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
              },
            ]}
          />
    
        </>
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

export default OnboardingScreen;

