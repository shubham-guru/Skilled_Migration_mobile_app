import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {getCourse} from './coursesData';
import courses from './coursesData';
import Icon from 'react-native-vector-icons/AntDesign';
import money from '../images/icons/money.png';
import clock from '../images/icons/sand-clock.png';
import totalHours from '../images/icons/clock.png';


import { CartContext } from './CartContext';

const DetailedCourse = ({route, navigation}) => {
  const {courseId} = route.params;
  const [course, setCourse] = useState({});
  const [points, setPoints] = useState([]);

  const addItemToCart = useContext(CartContext);

  useEffect(() => {
    setCourse(getCourse(courseId));
    // Alert.alert(course.id)
  });

  const onAddToCart = () => {
    addItemToCart(course.id);
  };

  

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View  style={styles.card}>
          <Image style={styles.image} source={course.src} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{course.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={money} style={{width: 30, height: 30}} />
              <Text style={styles.txt}>{course.price}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={clock} style={{width: 30, height: 30}} />
              <Text style={styles.txt}>{course.duration}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={totalHours} style={{width: 30, height: 30}} />
              <Text style={styles.txt}>{course.totalHours}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onAddToCart}>
              <Text style={styles.btnText}>Add to cart</Text>
              <Icon name="shoppingcart" size={25} />
            </TouchableOpacity>
          </View>
          </View>
            <View>
              <Text style={styles.title}>
                Description
              </Text>
              <Text style={styles.descpText}>
                {course.description}{'\n'}
              </Text>
               
              <View>
                <FlatList
                  data={course.points}
                  keyExtractor={(index) => index.toString()}
                  renderItem={({ item }) => 
                  <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                    <Icon name="caretright" size={20} color='orange'/>
                    <Text style={{color: '#333', fontFamily: 'JosefinSans-Regular', fontSize: 14, margin: 8, width: '90%'}}>{item}</Text>
                  </View>
                }
                />
              </View>

              {course.learn ? <View>
                <Text style={styles.title}>What you will learn</Text>
                <FlatList
                  data={course.learn}
                  keyExtractor={(index) => index.toString()}
                  renderItem={({ item }) => 
                  <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                    <Icon name="caretright" size={20} color='orange'/>
                    <Text style={{color: '#333', fontFamily: 'JosefinSans-Regular', fontSize: 14, margin: 8, width: '90%'}}>{item}</Text>
                  </View>
                }
                />
              </View> : <>
              <Text style={styles.title}>
                Goal of this course
              </Text>
              <Text style={styles.descpText}>
                {course.goal}{'\n'}
              </Text>
              </>}

             {course.requirements ? <View>
                <Text style={styles.title}>Requirements</Text>
                <FlatList
                  data={course.requirements}
                  keyExtractor={(index) => index.toString()}
                  renderItem={({ item }) => 
                  <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                    <Icon name="caretright" size={20} color='orange'/>
                    <Text style={{color: '#333', fontFamily: 'JosefinSans-Regular', fontSize: 14, margin: 8, width: '90%'}}>{item}</Text>
                  </View>
                }
                />
              </View> : null}

              <View>
                <Text style={styles.title}>Objective behind every section</Text>
                <FlatList
                  data={course.objective}
                  keyExtractor={(index) => index.toString()}
                  renderItem={({ item }) => 
                  <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                    <Icon name="caretright" size={20} color='orange'/>
                    <Text style={{color: '#333', fontFamily: 'JosefinSans-Regular', fontSize: 14, margin: 8, width: '90%'}}>{item}</Text>
                  </View>
                }
                />
              </View>

              <View>
                <Text style={styles.title}>Curriculum</Text>
                <FlatList
                  data={course.topics}
                  keyExtractor={(index) => index.toString()}
                  renderItem={({ item }) => 
                  <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                    <Icon name="caretright" size={20} color='orange'/>
                    <Text style={{color: '#333', fontFamily: 'JosefinSans-Regular', fontSize: 14, margin: 8, width: '90%'}}>{item}</Text>
                  </View>
                }
                />
              </View>

              <View>
                <Text style={styles.title}>Who is this course for?</Text>
                <FlatList
                  data={course.eligible}
                  keyExtractor={(index) => index.toString()}
                  renderItem={({ item }) => 
                  <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                    <Icon name="caretright" size={20} color='orange'/>
                    <Text style={{color: '#333', fontFamily: 'JosefinSans-Regular', fontSize: 14, margin: 8, width: '90%'}}>{item}</Text>
                  </View>
                }
                />
              </View>

              <View>
                <Text style={styles.title}>Who will you learn with ?</Text>
                <FlatList
                  data={course.teachers}
                  keyExtractor={(index) => index.toString()}
                  renderItem={({ item }) => 
                  <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
                    <Icon name="caretright" size={20} color='orange'/>
                    <Text style={{color: '#333', fontFamily: 'JosefinSans-Regular', fontSize: 14, margin: 8, width: '90%'}}>{item}</Text>
                  </View>
                }
                />
              </View>
              <TouchableOpacity style={{
                  backgroundColor: '#eee',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 10,
                  padding: 10,
                  borderColor: 'royalblue',
                  borderWidth: 2,
                  borderRadius: 8
                }} 
                onPress={onAddToCart}>
              <Text style={{color: '#222', fontFamily: 'JosefinSans-Regular', marginHorizontal: 5}}>Add to cart</Text>
              <Icon name="shoppingcart" size={25} />
            </TouchableOpacity>

            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DetailedCourse;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    elevation: 5,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  button: {
    alignSelf: 'center',
    margin: 10,
    backgroundColor: 'royalblue',
    width: '100%',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'JosefinSans-Regular',
    marginHorizontal: 5,
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    margin: 10, 
    color: '#222',
    fontFamily: 'CormorantGaramond-Bold'
  },
  descpText:{
    marginHorizontal: 12,
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
  }
});
