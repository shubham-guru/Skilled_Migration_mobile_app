import {StyleSheet, Text, View, Image, Dimensions ,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Box = props => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.innerContainer, {backgroundColor: '#fff', elevation: 5}]}
      onPress={()=>Navigation.navigate(props.path)}
      >
        <View>
          <Image source={props.src} style={styles.iconImg} />
          <Text style={styles.iconText}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Box;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconImg: {
    width: 80,
    height: 80,
    alignSelf: 'center'
  },
  innerContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  iconText: {
    color: '#000',
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "JosefinSans-Light"
  },
});
