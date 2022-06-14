import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HeadingTitle = (props) => {
  return (
    <View style={styles.heading}>
        <Text style={[styles.headText, {textAlign: 'right'}]}>{props.head1}</Text>
        <Text style={[styles.headText, {backgroundColor: '#fff',color: '#000', width: '50%'}]}>{props.head2}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#000',
      },
      headText:{
        fontFamily: 'JosefinSans-Regular',
        fontSize: 25,
        color: '#fff',
        paddingVertical: 12,
        width: '50%',
      },
})
export default HeadingTitle;