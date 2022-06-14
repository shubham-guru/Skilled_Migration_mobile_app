import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from './CustomInput';
import {Picker} from '@react-native-picker/picker';

const AssessmentForm = () => {
  const [data, setData] = useState({
    fullName: '',
    lastName: '',
    email: '',
    phone: '',
    ageRange: '',
    isStudy: '',
    education: '',
    inExperience: '',
    outExperience: '',
    isMarried: '',
    partnerExp: '',
    partnerSty: '',
    partnerPro: '',
    checkError: ''
  });
  return (
    <View style={styles.formView}>
      <Animatable.View animation="flipInX">
        <Icon name="person-outline" size={30} color="#000" />
      </Animatable.View>
      <Text style={styles.text}>Your Personal Profile</Text>
      <CustomInput title="Full Name" />
      <CustomInput title="Email Address" keyboardType="email-address" />
      <CustomInput title="Phone No." keyboardType="numeric" />

      <View style={styles.selection}>
        <Text style={styles.title}>1. Select Your Age</Text>
        <Picker
          selectedValue={data.ageRange}
          onValueChange={(itemValue, itemIndex) => setData({...data, ageRange: itemValue})}>
          <Picker.Item label="-- Select a Option --" value="null" />
          <Picker.Item label="18-24" value="18-24" />
          <Picker.Item label="25-32" value="25-32" />
          <Picker.Item label="33-39" value="33-39" />
        </Picker>
      </View>

      <View style={styles.selection}>
        <Text style={styles.title}>2. Did you study in Australia ?</Text>
        <Picker
          selectedValue={data.isStudy}
          onValueChange={(itemValue, itemIndex) => setData({...data, isStudy: itemValue})}>
          <Picker.Item label="-- Select a Option --" value="null" />
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>

      {data.isStudy === "No" ? <View style={styles.selection}>
        <Text style={styles.title}>3. Your Education Outside Australia ?</Text>
        <Picker
          selectedValue={data.education}
          onValueChange={(itemValue, itemIndex) => setData({...data, education: itemValue})}>
          <Picker.Item label="-- Select a Option --" value="null" />
          <Picker.Item label="PhD" value="PhD" />
          <Picker.Item label="Bachelors" value="Bachelors" />
          <Picker.Item label="Masters" value="Masters" />
          <Picker.Item label="Diploma" value="Diploma" />
        </Picker>
      </View> : null}

      <View style={styles.selection}>
        <Text style={styles.title}>
          4. Do you have Experience in Australia ?
        </Text>
        <Picker
          selectedValue={data.inExperience}
          onValueChange={(itemValue, itemIndex) => setData({...data, inExperience: itemValue})}>
          <Picker.Item label="-- Select a Option --" value="null" />
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>

     {data.inExperience === "No" ? <View style={styles.selection}>
        <Text style={styles.title}>5. Experience outside Australia ?</Text>
        <Picker
          selectedValue={data.outExperience}
          onValueChange={(itemValue, itemIndex) => setData({...data, outExperience: itemValue})}>
          <Picker.Item label="-- Select a Option --" value="null" />
          <Picker.Item label="Less than 3 years" value="Less than 3 years" />
          <Picker.Item label="3 to 4 years" value="3 to 4 years" />
          <Picker.Item label="5 to 7 years" value="5 to 5 years" />
          <Picker.Item label="More than 8 years" value="More than 8 years" />
        </Picker>
      </View> : null}

      <View style={styles.selection}>
        <Text style={styles.title}>6. Your English</Text>
        <Picker
          selectedValue={data.outExperience}
          onValueChange={(itemValue, itemIndex) => setData({...data, outExperience: itemValue})}>
          <Picker.Item label="-- Select a Option --" value="null" />
          <Picker.Item
            label="Superior - Very High Proficiency"
            value="Superior"
          />
          <Picker.Item
            label="Proficient - High Proficiency"
            value="Proficient"
          />
          <Picker.Item
            label="Competent - Moderate Proficiency"
            value="Competent"
          />
        </Picker>
      </View>

      <View style={styles.selection}>
        <Text style={styles.title}>7.1. Are you married ?</Text>
        <Picker
          selectedValue={data.isMarried}
          onValueChange={(itemValue, itemIndex) => setData({...data, isMarried: itemValue})}>
          <Picker.Item label="-- Select a Option --" value="null" />
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>
      </View>

      {data.isMarried === 'Yes' ? (
        <>
          <View style={styles.selection}>
            <Text style={styles.title}>
              7.2. Does your spouse/partner have australia work experience?
            </Text>
            <Picker
              selectedValue={data.partnerExp}
              onValueChange={(itemValue, itemIndex) => setData({...data, partnerExp: itemValue})}>
              <Picker.Item label="-- Select a Option --" value="null" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>

          <View style={styles.selection}>
            <Text style={styles.title}>
              7.3. Has your spouse/partner studied in australia for 2 or more
              years ?
            </Text>
            <Picker
              selectedValue={data.partnerSty}
              onValueChange={(itemValue, itemIndex) =>
                setData({...data, partnerSty: itemValue})
              }>
              <Picker.Item label="-- Select a Option --" value="null" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>

          <View style={styles.selection}>
            <Text style={styles.title}>
              7.4. Your spouse/partner English Proficiency
            </Text>
            <Picker
              selectedValue={data.partnerPro}
              onValueChange={(itemValue, itemIndex) =>
                setData({...data, partnerPro: itemValue})
              }>
              <Picker.Item label="-- Select a Option --" value="null" />
              <Picker.Item label="Very High Proficiency" value="Very High" />
              <Picker.Item label="High Proficiency" value="High Proficiency" />
              <Picker.Item
                label="Moderate Proficiency"
                value="Moderate Proficiency"
              />
              <Picker.Item
                label="Basic Proficiency"
                value="Basic Proficiency"
              />
            </Picker>
          </View>
        </>
      ) : null}

      {data.checkError ? (
        <Text style={styles.errorText}>Please fill all the details !</Text>
      ) : null}
      <View style={styles.selection}>
        <Text style={styles.title}>8. Enter your Details</Text>
        <TextInput
          placeholder="FirstName"
          onChangeText={text => setData({...data, firstName: text})}
          value={data.firstName}
        />
        <TextInput
          placeholder="LastName"
          onChangeText={text => setData({...data, lastName: text})}
          value={data.lastName}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={text => setData({...data, email: text})}
          value={data.email}
        />
        <TextInput
          placeholder="Phone"
          keyboardType="numeric"
          onChangeText={text => setData({...data, phone: text})}
          value={data.phone}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <LinearGradient
          style={{borderRadius: 50, padding: 10, paddingHorizontal: 35}}
          colors={['#fc855a', '#d1400c']}>
          <Text style={{color: '#fff'}}>Do I Quilify ?</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  formView: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderLeftWidth: 5,
    marginHorizontal: 10,
    borderStartColor: '#000',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
  },
  selection: {
    padding: 15,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: 'JosefinSans-SemiBold',
    color: '#fc855a',
  },
});
export default AssessmentForm;
