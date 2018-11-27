/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import { SearchBar } from 'react-native-elements';
import {Avatar,Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const tintColor = '#fafafa';

export default class RegisterSire extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.searchcontainer}>
                <SearchBar 
                  placeholder=" Search cattle"
                  lightTheme
                  inputStyle={styles.searchBarInput}
                  icon={{ color: tintColor, size: '52'}}
                clearIcon={{name: 'search'}}
                />
            </View>

            <View>
                  <View style={styles.subcontainer}>
                      
                       <View style={styles.homeregcontainer}>
                          <View style={styles.homereg}>
                              <Text style={styles.registeranimaldashboard}>{"\n"} Home / Register Animal  / Animal Listening {"\n"}</Text>
                              
                          </View>
                          <View style={styles.doticon}>
                            <Icon name='more-vert' size={20} color={'grey'} />
                          </View>
                       </View>

                      <View style={styles.totalcontainer}>
                          <View style={styles.totalbox}>
                              <View style={styles.allboximage}>
                                <Image source={require('../../../../src//asset/images/total.png')} />
                                 <View>
                                  <Text>10</Text>
                                 </View>
                              </View>
                              <Text> Total</Text>
                          </View>
                          <View style={styles.milkingbox}>
                          <View style={styles.allboximage}>
                                <Image source={require('../../../../src//asset/images/milking.png')} />
                                 <View>
                                  <Text>5</Text>
                                 </View>
                              </View>
                              <Text> Milking</Text>
                          </View>
                          <View style={styles.dryoffbox}>
                          <View style={styles.allboximage}>
                                <Image source={require('../../../../src//asset/images/dryoff.png')} />
                                 <View>
                                  <Text>5</Text>
                                 </View>
                              </View>
                              <Text> Dryoff</Text>
                          </View>
                          <View style={styles.calfbox}>
                          <View style={styles.allboximage}>
                                <Image source={require('../../../../src//asset/images/calf.png')} />
                                 <View>
                                  <Text>2</Text>
                                 </View>
                              </View>
                              <Text> Calf</Text>
                          </View>
                      </View>
                  </View>

                  {/* <View style={{flexDirection:'row'}}>
                      <View style={{backgroundColor:'green'}}>
                          <Text> One</Text>
                      </View>
                      <View style={{backgroundColor:'red'}}>
                          <Text> Two</Text>
                      </View>
                      <View style={{backgroundColor:'yellow'}}>
                          <Text> Three</Text>
                      </View>
                      <View style={{backgroundColor:'blue'}}>
                          <Text> Four</Text>
                      </View>
                  </View> */}
            </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  searchBarInput: {
    color: tintColor,
    backgroundColor: '#fafafa',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0.2,
  },

   registeranimaldashboard: {
    color: 'grey',
    fontSize: 12,
},

subcontainer : {
  backgroundColor:'#ffffff'
},

homeregcontainer : {
  backgroundColor: '#ffffff',
  flexDirection : 'row',
  justifyContent : 'space-between',
  paddingRight : 14,
  paddingLeft : 14
},

totalcontainer : {
  flexDirection:'row', 
  justifyContent:'space-evenly', 
  paddingBottom:12
},

homereg : {
  flexDirection: 'row',
},

doticon : {
  flexDirection: 'row',
},

totalbox : {
   width:75, 
   height:50, 
   borderWidth:0.2
},

milkingbox : {
  width:75, 
  height:50, 
  marginLeft:-18, 
  borderWidth:0.2
},

dryoffbox : {
   width:75, 
   height:50, 
   marginLeft:-18, 
   borderWidth:0.2
},

calfbox : {
   width:75, 
   height:50, 
   marginLeft:-18, 
   borderWidth:0.2
},

allboximage : {
  flexDirection:'row', 
  justifyContent:'space-around', 
}




});
