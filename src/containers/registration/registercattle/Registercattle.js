/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Picker, ScrollView, Button} from 'react-native';

import {RkButton, RkChoice} from 'react-native-ui-kitten';
import RadioGroup from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'

export default class Registercattle extends Component<Props> {

    state = {
        data: [
            {
                label: 'Farm Bred',
                color: 'green',
                size: 15,
            },
            {
                label: 'Purchase',
                color: 'green',
                size: 15,
            },
         
        ],
    };
    
    onPress = data => this.setState({ data });
  render() {

    let data = [{
        value: 'Male',
      }, {
        value: 'Female',
      }, {
        value: 'Transgender',
      }];

      let birth = [{
        value: 'Foreign',
      }, {
        value: 'nation',
      }];

      let species = [{
        value: 'species1',
      }, {
        value: 'species2',
      }];

      let breed = [{
        value: 'breed',
      }, {
        value: 'breed',
      }];

      let sire = [{
        value: 'sire1',
      }, {
        value: 'sire2',
      }];

      let siretype = [{
        value: 'siretype1',
      }, {
        value: 'siretype2',
      }];

      let dam = [{
        value: 'dam1',
      }, {
        value: 'dam2',
      }];

      let damtype = [{
        value: 'damtype1',
      }, {
        value: 'damtype2',
      }];

      let livestockstate = [{
        value: 'livestockstate1',
      }, {
        value: 'livestockstate2',
      }];

    return (
      <ScrollView style={styles.container}>

        <View style={styles.marginall}>
             <Text style={styles.profiledashboard}>{"\n"} Home / mooON Dashboard / Register cattle {"\n"}</Text>
             <Text style={styles.profileinfo}>Profile Information</Text>
        </View>

           
        <View style={[styles.radiobtn, styles.marginall]}>
            <RadioGroup flexDirection='row'  radioButtons={this.state.data} onPress={this.onPress} />
        </View>

        <View style={[styles.marginall, styles.topline]}>
            <Text style={styles.regid}> Registration Id</Text>
        </View>

        <View style={styles.sexbirth}>
          <Dropdown  label='Sex' data={data}  fontSize={12} containerStyle={{width:152,zIndex:60, left:15 }}/>
          <Dropdown  label='Type of Birth' birth={birth}  fontSize={12}  containerStyle={{width:152,zIndex:60, left:40 }}/>
        </View>

        <View style={{flexDirection:'row', marginTop:-12}}>
        <TextInput style={styles.ageinput}  placeholder="Age(Yrs)"/>
             <DatePicker
                style={{width: 180}}
                date={this.state.date}
                mode="date"
                placeholder="Date Of Birth"
                format="DD-MM-YYYY"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                 
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 150,
                    
                },
                dateInput: {
                    marginLeft: 25,
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    borderBottomWidth: 0.5,
                    
                },
                
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
             />
        </View>

        <View style={styles.speciesbreed}>
          <Dropdown  label='Species' species={species}  fontSize={12} containerStyle={{width:152,zIndex:60, top:1,left:15 }}/>
          <Dropdown  label='Breed' breed={breed}  fontSize={12}  containerStyle={{width:152,zIndex:60, top:1,left:40 }}/>
        </View>

         <View style={styles.siretype}>
          <Dropdown  label='Sire#' sire={sire}  fontSize={12} containerStyle={{width:152,zIndex:60, top:1,left:15 }}/>
          <Dropdown  label='Sire Type' siretype={siretype}  fontSize={12}  containerStyle={{width:152,zIndex:60, top:1,left:40 }}/>
        </View>

         <View style={styles.damtype}>
          <Dropdown  label='Dam#' dam={dam}  fontSize={12} containerStyle={{width:152,zIndex:60, top:1,left:15 }}/>
          <Dropdown  label='Dam Type' damtype={damtype}  fontSize={12}  containerStyle={{width:152,zIndex:60, top:1,left:40 }}/>
        </View>

        <View style={styles.livestockstate}>
          <Dropdown  label='Livestock State' livestockstate={livestockstate}  fontSize={12}  containerStyle={{width:331,zIndex:60, top:1,left:15 }}/>
        </View>

         <View style={styles.buttoncopyright}>
           <View style={styles.buttonstyle}>
              <Button  title="Next" color="#009688"  onPress={() => this.props.navigation.navigate('BreedInformation')}/>
          </View>
            <Text style={styles.copyright}> Copyright @2018 Steelapp</Text>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
   
  },
  marginall : {
   marginLeft: 15,
   marginRight: 15
  },
  profiledashboard: {
    color: 'grey',
    fontSize: 12,
},

  profileinfo: {
      color: 'black',
      fontSize: 12,
  },
  radiobtn : {
      flexDirection:'row',
      justifyContent: 'flex-start',
      marginTop: 10
  },
  regid : {
    // color: 'grey',
    fontSize: 12,
    marginTop: 10,
  },

  topline: {
    borderBottomWidth: 2,
    borderBottomColor: '#efefef',
    height: 40,
    // paddignTop: 10
  },
  sexbirth : {
    flexDirection:'row', 
    marginTop:-12
  },

  agedob : {
    flexDirection:'row',
    marginTop:-12
  },

  ageinput : {
    height: 40, 
    width: 152, 
    marginLeft:15, 
    borderBottomColor: '#e1e1e1',  
    borderBottomWidth: 1, 
    fontSize: 12,
  },

  speciesbreed : {
    flexDirection:'row',
     marginTop:-12
  },

  siretype : {
    flexDirection:'row', 
    marginTop:-12
  },

  damtype : {
    flexDirection:'row', 
    marginTop:-12
  },

  livestockstate : {
    flexDirection:'row', 
    marginTop:-12
  },

  buttoncopyright : {
    flexDirection:'column', 
    marginTop: 15
  },

  buttonstyle : {
    width: "90%", 
    marginLeft: 20,
  },

  copyright :{
    textAlign: 'center',
    marginTop:5,
    fontSize: 12,
  }


});
