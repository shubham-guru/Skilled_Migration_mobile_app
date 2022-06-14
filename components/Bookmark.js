import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import course1 from '../images/AcademyCourses/course1.jpg';
import course2 from '../images/AcademyCourses/course2.jpg';
import course4 from '../images/AcademyCourses/course4.jpg';
import Services from './Services';

const Bookmark = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Your bookmarks !</Text>
      </View>
      <View style={styles.services}>
        <Services
          src={course1}
          text1="Intensive English Program [IEP]"
          text2="3 weeks"
          price="$200"
          iconName="heart"
        />
        <Services
          src={course2}
          text1="Transitional English Program [TEP]"
          text2="8 weeks"
          price="$250"
          iconName="heart"
        />
        <Services
          src={course4}
          text1="Foundation IELTS English Course [FIEC]"
          text2=""
          price="$180"
          iconName="heart"
        />
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;

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
  },
  services: {
    display: 'flex',
    flexDirection: 'row'
  },
});
