import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import React, {useState} from 'react';

const AllCourses = ({name, price, src, duration, onPress}) => {
  const [heart, setHeart] = useState(true);

  const handleIconPress = () => {
    setHeart(!heart);
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.mainView}>
          <Image style={styles.bg} source={src} />
          <View>
            <Text style={styles.txt}>Name : {name}</Text>
            <Text style={styles.txt}>Price : {price}</Text>
            <Text style={styles.txt}>Duration : {duration}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AllCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: '100%',
    height: 250,
    marginBottom: 15,
  },
  mainView: {
    backgroundColor: '#f2f2f2',
    marginBottom: 20,
    borderRadius: 20,
    elevation: 5
  },
  txt: {
    marginHorizontal: 15,
    marginVertical: 8,
    color: '#333',
    fontFamily: 'JosefinSans-Regular',
  },
  // circle: {
  //   backgroundColor: '#fff',
  //   width: 40,
  //   padding: 10,
  //   alignSelf: 'flex-end',
  //   margin: 5,
  //   borderRadius: 20,
  // },
});
