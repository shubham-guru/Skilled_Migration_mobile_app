import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react';
import AllCourses from './AllCourses';
import { getCourses } from './coursesData';

const CoursesList = ({navigation}) => {

    const renderCourses = ({item: course}) => {
        return (
          <AllCourses {...course} 
          onPress={() => {
            navigation.navigate('detailedCourse', {
                courseId: course.id,
            });
          }}
          />
        );
      }
      const [courses, setCourses] = useState([]);
      useEffect(() => {
        setCourses(getCourses());
      });

  return (
    <View>
      <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={courses}
      renderItem={renderCourses}
    />
    </View>
  )
}

export default CoursesList

const styles = StyleSheet.create({
    productsList: {
        backgroundColor: '#eeeeee',
      },
      productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8,
      },
})