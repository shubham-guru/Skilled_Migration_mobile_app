import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const SplashScreen = () => {
  const Navigation = useNavigation();
  const handelNavigate = () => {
    Navigation.replace('Welcome');
  };
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeIn"
        easing="ease-out"
        style={styles.logoWrap}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
      </Animatable.View>
      <TouchableOpacity style={styles.button} onPress={handelNavigate}>
        <Animatable.View animation="fadeInRight" easing="ease-out">
          <Icon name="arrow-forward-circle" size={50} color="#000" />
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrap: {
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 255, 255)',
  },
  logo: {
    resizeMode: 'contain',
    width: width / 1.4,
    height: height / 8,
  },
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
export default SplashScreen;
