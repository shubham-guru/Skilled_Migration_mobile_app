import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Services from './Services';
import immigration from '../images/immigration.jpg';
import passport from '../images/passport.jpg';
import academy from '../images/academy.jpg';
import course1 from '../images/AcademyCourses/course1.jpg';
import course2 from '../images/AcademyCourses/course2.jpg';
import course3 from '../images/AcademyCourses/course3.jpg';
import course4 from '../images/AcademyCourses/course4.jpg';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


const Home = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <View style={{flex: 1, backgroundColor: '#eee'}}>
      <View>
        <Text style={styles.heading}>Our Services</Text>
        <TouchableOpacity onPress={()=>Navigation.navigate("bookmark")}>
          <Text style={styles.subHeading}>See all</Text>
        </TouchableOpacity>  
      </View>
      <View style={styles.services}>
        <TouchableOpacity activeOpacity={0.7}>
          <Services src={immigration} text1="Immigration" text2="Pathway"/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={()=> Navigation.navigate('eligibility')}>
          <Services src={passport} text1="Free Eligibility" text2= "test"/>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={()=>Navigation.navigate('academy')}>
          <Services src={academy} text1="XA" text2= "Academy"/>
        </TouchableOpacity>
      </View>
        <ImageBackground source={require('../images/banner.jpg')} 
          resizeMode='contain' style={styles.bannerImg}>
          <Text style={styles.overLayText}>Explore more about {'\n'}Skilled Migration</Text>
        </ImageBackground>

      <View>
        <Text style={styles.heading}>Academy Courses</Text> 
        <TouchableOpacity onPress={()=>Navigation.navigate("academy")}>
          <Text style={styles.subHeading}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* <Text>This course has been added in your bookmarks</Text> */}
      <View style={styles.services}>
        <Services src={course1} 
        text1="Intensive English Program [IEP]" 
        text2="3 weeks"  
        price="$200"
        iconName="hearto"
        />
        <Services src={course2} 
        text1="Transitional English Program [TEP]" 
        text2="8 weeks" 
        price="$250"
        iconName="hearto"
        />
        <Services src={course3} 
        text1="Extensive English Program [EEP]" 
        text2="12 weeks" 
        price="$100"
        iconName="hearto"
        />
      </View>
      <View style={styles.services}>
        <Services src={course4} 
        text1="Foundation IELTS English Course [FIEC]" 
        text2=""
        price="$180"
        iconName="hearto"/>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    resizeMode: 'contain',
    width: width / 1.6,
    height: height / 10,
    alignSelf: 'center',
    margin: 5
  },
  heading:{
    fontSize: 25,
    color: "#222",
    margin: 10,
    fontFamily: 'CormorantGaramond-Bold'
  },
  subHeading:{
    textAlign: 'right',
    marginHorizontal: 10,
    color: '#D25930',
    fontFamily: 'PTSans-Regular'
  },
  services: {
    display: 'flex',
    flexDirection: 'row'
  },
  bannerImg:{
    width: 400,
    height: 300,
    alignSelf: 'center',
    marginTop: -30
  },
  overLayText:{
    fontSize: 20,
    color: '#fff',
    fontFamily: 'CormorantGaramond-Bold',
    top: height/4,
    marginHorizontal: 20
  }
});
