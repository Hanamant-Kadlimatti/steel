/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Picker, Button} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

export default class BreedInformation extends Component<Props> {
    
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            breedingstate: '',
            numberofcaving: '',
        }
        
        
      }
     
  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.subcontainer}>

        <View style={styles.marginall}>
             <Text style={styles.profiledashboard}>{"\n"} Home / mooON Dashboard / Register cattle {"\n"}</Text>
             <Text style={styles.breedinfo}>Profile Information {"\n"}</Text>
         </View>

          <View style={styles.marginall}>
          <Text>Location</Text>
          <Picker
                   style={{width: 335, marginTop:5}}
                    mode="dropdown"
                     selectedValue={this.state.location}
                onValueChange={(loc) => this.setState({location: loc})}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="Natinal" value="national" />
                    <Picker.Item label="International" value="International" />
            </Picker>
            {/* <View style={styles.location}></View> */}
          </View>
            
          <View style={styles.marginall}>
          <Text>Breeding State</Text>
          <Picker
                 style={{width: 335, marginTop:5}}
                 mode="dropdown"
                 selectedValue={this.state.breedingstate}
                 onValueChange={(breed) => this.setState({breedingstate: breed})}>
   
                 <Picker.Item label="" value="" />
                 <Picker.Item label="Pregnant" value="pragnant" />
                 <Picker.Item label="NonPragnant" value="nonPragnant" />
            </Picker>
            {/* <View style={styles.breedingstate}></View> */}
          </View>

          <View style={styles.marginall}>
          <Text>Breeding State</Text>
          <Picker
                 style={{width: 335, marginTop:5}}
                 mode="dropdown"
                 selectedValue={this.state.numberofcaving}
                 onValueChange={(noofcav) => this.setState({numberofcaving: noofcav})}>
   
                 <Picker.Item label="" value="" />
                 <Picker.Item label="1" value="1" />
                 <Picker.Item label="2" value="2" />
                 <Picker.Item label="3" value="3" />
                 <Picker.Item label="4" value="4" />
            </Picker>
            {/* <View style={styles.breedingstate}></View> */}
          </View>
    

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#f2f2f2',
  },

  subcontainer : {
    backgroundColor:'white',
  },

  marginall : {
    marginLeft: 15,
    marginRight: 15,
   },

   profiledashboard: {
    color: 'grey',
    fontSize: 12,
},

  breedinfo: {
      color: 'black',
      fontSize: 12,
  },

//   location: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#efefef',
//     marginTop: -20
//   },

//   breedingstate: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#efefef',
//     marginTop: -20
//   },

 
});
