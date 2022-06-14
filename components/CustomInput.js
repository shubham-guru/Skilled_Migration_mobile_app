import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'

var width = Dimensions.get('window').width;
const CustomInput = (props) => {
  return (
    <View>

        <View style={styles.inputView}>
            <Text style={{fontSize: 15}}>{props.title}</Text>
            <TextInput
            style={styles.textInput}
            keyboardType={props.keyboardType}
            />
        </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
    textInput: {
    // flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    borderWidth: 1,
    width: width/1.5,
    paddingHorizontal: 10,
    fontFamily: 'Quicksand-Regular',
    borderRadius: 5,
},
inputView: {
    marginVertical: 20,
}
})
export default CustomInput