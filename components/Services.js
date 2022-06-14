import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Services = props => {
  const [heart, setHeart] = useState(true);

  const handleHeart = () =>{
    setHeart(!heart)
  }
  
  return (
    <>
    <View style={styles.service}>
      <Image
        source={props.src}
        style={styles.serviceImg}
      />
      <View style={props.price ? styles.courseBox : null}>
        <Text style={props.price ? styles.priceText : styles.serviceText}>{props.text1} {'\n'}{props.text2}</Text>
        {props.price ? 
        <TouchableOpacity onPress={handleHeart}>
          {heart ? <Icon name={props.iconName} size={18} color="coral"/>: 
            <Icon name="heart" size={18} color="coral" />
          } 
        </TouchableOpacity>
        : null}
      </View>
      {props.price ?  <Text style={styles.price}>{props.price}</Text> : null}
    </View>
    </>
  );
};

export default Services;

const styles = StyleSheet.create({
    service:{
        backgroundColor: "#fff",
        marginHorizontal: 5,
        marginVertical: 25,
        borderRadius: 30,
        paddingBottom: 12
      },
      serviceImg: {
        width: 120,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      },
      serviceText: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'PTSans-Regular'
      },
      price: {
        fontWeight: 'bold',
        fontFamily: 'PTSans-Regular',
        marginHorizontal: 10,
        color: '#222'
      },
      priceText: {
        margin: 5,
        width: 82,
        fontFamily: 'PTSans-Regular',
      },
      courseBox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 5
      }
});
