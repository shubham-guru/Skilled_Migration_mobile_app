import {View, Text, StyleSheet, Image, Dimensions,ScrollView} from 'react-native';
import React, {useState} from 'react';
import {CheckBox, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import freeTest from '../images/freeTest.png';
import AssessmentForm from './AssessmentForm';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Eligibility = () => {
  const Navigation = useNavigation();
  const [checked, setChecked] = useState({
    australia: false,
    canada: false,
    uae: false,
  });
  const handleAustralia = () => {
    setChecked({...checked, 
      australia: !checked.australia,
      canada: false,
      uae: false
    });
  };
  const handleCanada = () => {
    setChecked({...checked, 
      canada: !checked.canada,
      australia: false,
      uae: false
    });
  };
  const handleUae = () => {
    setChecked({...checked, 
      uae: !checked.uae,
      canada: false,
      australia: false
    });
  };
  
  return (
    <View style={styles.container}>
      <Image source={freeTest} style={styles.freeTestImg} />
      <Text style={styles.text}>Choose country</Text>
      <View style={styles.checkBoxView}>
        <CheckBox
          title="Australia"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="orange"
          checked={checked.australia}
          onPress={handleAustralia}
        />
        <CheckBox
          title="Canada"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="orange"
          checked={checked.canada}
          onPress={handleCanada}
        />
        <CheckBox
          title="UAE"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="orange"
          checked={checked.uae}
          onPress={handleUae}
        />
      </View>
      <Divider style={styles.divider} />
      <ScrollView>
        {checked.australia ? <AssessmentForm />: null}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  freeTestImg: {
    width: width,
    height: height / 3.5,
  },
  text: {
    fontSize: 25,
    fontFamily: 'CormorantGaramond-Bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#343434',
  },
  checkBoxView: {
    flexDirection: 'row',
  },
  checkbox:{
    fontFamily: 'CormorantGaramond-Bold',
  },
  divider: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  }
});
export default Eligibility;
