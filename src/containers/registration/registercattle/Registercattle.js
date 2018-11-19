/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Picker} from 'react-native';

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

      const birth = [{
        value: 'Foreign',
      }, {
        value: 'nation',
      }];
    return (
      <View style={styles.container}>

        <View style={styles.marginall}>
             <Text style={styles.profiledash}>{"\n"} Home / mooOn / Dashboard / Register cattle {"\n"}</Text>
             <Text style={styles.profileinfo}>Profile Information</Text>
        </View>

           
        <View style={[styles.radiobtn, styles.marginall]}>
            <RadioGroup flexDirection='row'  radioButtons={this.state.data} onPress={this.onPress} />
        </View>

        <View style={[styles.marginall, styles.borderbott]}>
            <Text style={styles.regid}> Registration Id</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Dropdown  label='Sex' data={data}  fontSize={12} containerStyle={{width:152,zIndex:60, top:1,left:15 }}/>
          <Dropdown  label='Birth' birth={birth}  fontSize={12}  containerStyle={{width:152,zIndex:60, top:1,left:40 }}/>
        </View>

        <View style={{flexDirection:'row'}}>
        <TextInput
             style={{height: 40, width: 152, marginLeft:15, borderBottomColor: '#e1e1e1',  borderBottomWidth: 1,}}  placeholder="Age(Yrs)"/>
             <DatePicker
                style={{width: 150}}
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
                    marginLeft: 150
                },
                dateInput: {
                    marginLeft: 1
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
             />
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
   
  },
  marginall : {
   margin: 15
  },
  profiledash: {
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
  },
  regid : {
    // color: 'grey',
    fontSize: 12,
  },

  borderbott: {
    borderBottomWidth: 2,
    borderBottomColor: '#efefef',
    height: 40,
    // paddignTop: 10
  }



});
