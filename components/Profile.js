import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

var width = Dimensions.get('window').width;

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#D25930', '#ed754e', '#ffa589']}
        start={{x: 0.2, y: 2.0}}
        end={{x: 1.0, y: 1.0}}
        style={styles.topContainer}>
        <Image
          source={require('../images/profile.jpg')}
          style={styles.profilePic}
        />
      </LinearGradient>
      <View style={styles.details}>
        <Text style={styles.data}>Lucy adams</Text>
        <Text style={[styles.data, styles.post]}>Project Manager</Text>
        <Text style={styles.bio}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </Text>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 0.9,
            marginVertical: 10,
            width: width/1.3,
            alignSelf: 'center'
          }}
        />
      </View>
      <View style={styles.courseStatus}>
        <View>
            <Text style={styles.courseHead}>Enrolled Courses</Text>
            <Text style={styles.status}>5</Text>
        </View>
        <View>
            <Text style={styles.courseHead}>In Progress</Text>
            <Text style={styles.status}>3</Text>
        </View>
        <View>
            <Text style={styles.courseHead}>Completed</Text>
            <Text style={styles.status}>1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#222',
    height: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 30,
    top: 200 / 1.5,
    alignSelf: 'center',
  },
  details: {
    alignSelf: 'center',
    top: 200 / 3,
  },
  data: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'PTSans-Regular',
    letterSpacing: 5,
  },
  post: {
    fontSize: 13,
    paddingTop: 10,
    textTransform: 'capitalize',
    color: '#D25930',
  },
  bio: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
  courseStatus:{
      flexDirection: 'row',
      top: 100,
      justifyContent: 'space-evenly',

  },
  courseHead:{
      color: '#222',
      fontSize: 20,
      fontFamily: 'CormorantGaramond-Bold',
      marginVertical: 5,
  },
  status:{
      textAlign: 'center',
      fontSize: 16
  }
});
