import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const SelectionDropDown = (props) => {
  return (
    <View style={styles.selection}>
        <Text style={styles.title}>{props.title}</Text>
        <Picker
            selectedValue={props.value}
            onValueChange={(itemValue, itemIndex) => props.setValue(itemValue)}>
            <Picker.Item label="18-24" value="18-24" />
            <Picker.Item label="25-32" value="25-32" />
            <Picker.Item label="33-39" value="33-39" />
        </Picker>
      </View>
  );
};

export default SelectionDropDown;

const styles = StyleSheet.create({
    selection: {
        padding: 15,
        borderBottomWidth: 1,
        backgroundColor: "#fff",
        marginVertical: 5,
    },
    title: {
        fontSize: 15,
        fontFamily: "JosefinSans-SemiBold",

    }
});
