import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import bg from '../images/welcome.jpg';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Welcome = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={{flex: 1}}>
          <View style={styles.logoContainer}>
          <View>
            
          </View>
          <Image source={require('../images/black&whiteLogo.png')} style={styles.logo} />
          <Text style={{fontSize: 17, color: "#fff"}}>Global Immigration services at  your doorstep</Text>
          </View>
        
          <View style={styles.subMenu}>
            <View style={styles.menuItem}>
              <Image source={require('../images/course.jpg')} style={styles.icons} />
              <Text style={styles.text}>Learn a course</Text>
            </View>

            <View style={styles.menuItem}>
              <Image source={require('../images/job.jpg')} style={styles.icons} />
              <Text style={styles.text}>Find a job</Text>
            </View>

          </View>
          
        </ImageBackground>
        <View style={styles.bottomView}>
          <Animatable.View animation="fadeInLeft" easing="ease-out">
            <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate("Signup")}>
              <Text style={{fontSize: 16, color: "#d1400c"}}>SignUp</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation="fadeInRight" easing="ease-out" >
              <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate("Login")}>
                <Text style={{fontSize: 16, color: "#d1400c"}}>Login</Text>
              </TouchableOpacity>
          </Animatable.View>
          </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
      alignItems: "center",
      backgroundColor: '#fff',
      flexDirection: "row",
      justifyContent: "space-between",
      height: 120
  },
  button: {
      marginTop: height/12,
      marginHorizontal: 20
  },
  logo: {
    resizeMode: 'contain',
    width: width / 1.3,
    height: height / 9,
  },
  logoContainer: {
    top: 350,
    left: 10,
  },
  icons: {
    resizeMode: 'contain',
    height: height /7,
    borderRadius: 20,
    marginBottom: 10
  },
  subMenu: {
    flexDirection: 'row',
    top: 380,
    zIndex: 10,
    marginHorizontal: 5,
  },
  menuItem:{
    alignItems: 'center',
    width: '50%',
    borderRadius: 20,
    padding: 5,  
    shadowColor: "#000",
    elevation: 4,
    backgroundColor: '#fff',
  },
  text: {
    marginVertical: 5,
    fontWeight: '900'
  }
});

export default Welcome;
