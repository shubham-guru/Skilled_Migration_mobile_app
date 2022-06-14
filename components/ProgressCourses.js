import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


const ProgressCourses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have any IN PROGRESS course {'\n'}</Text>
      <Text style={[styles.text, {fontWeight: 'bold', fontSize: 14}]}>Go to 
      <Text style={{color: '#D25930'}}> ALL COURSES </Text> 
      to enroll in any course  {'\n'}</Text>
      <Icon name="arrowleft" size={30} color="#333" />
    </View>
  )
}

export default ProgressCourses

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'PTSans-Regular',
        fontSize: 18
    }
})