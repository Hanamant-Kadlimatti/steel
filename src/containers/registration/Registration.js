/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, Dimensions } from 'react-native';

import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome, { Icons } from 'react-native-fontawesome';
// import  {Ionicons, FontAwesome} from '@expo/vector-icons'

import Carousel from 'react-native-banner-carousel';


const tintColor = 'white';

// const BannerWidth = Dimensions.get('window').width;
const BannerHeight =   100;
const BannerWidth =   280;

const images = [
  "https://i.ytimg.com/vi/JcJrjx91tlM/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsShoUXDqOJbFd_l4Ej0247R6jTqW6EPoESIJxTdvScR8euwFPrg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTz86D6rfGs3lu-xGz-UDX2cSZRnOXN9C2zxBdyuab3gL2Wm-x",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnscN4M8OiMpzzHeQCIkZyfuqdkhsfGjx1U9Bvm7eDpgEfne2J9A",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZXpe5jwiEtbkL79q7jo5hOXAWg_4qrXuAKGQ6CNamKP2rpjD_g"
];

   class Registration extends Component<Props> {
    
    renderPage(image, index) {
      return (
          <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight  }} source={{ uri: image }} />
          </View>
      );
  }

    render() {
      return (
        <View style={styles.container}>
       
       <SearchBar inputStyle={{ color: '#CCCCCC' }}
            placeholder=" Search cattle"
            lightTheme
            inputStyle={styles.searchBarInput}
            icon={{ color: tintColor, size: '52'}}
          clearIcon={{name: 'search'}}
          />
               {/* <Button title="Go to " onPress={() => this.props.navigation.navigate('Details')}></Button> */}
  
             <View >
              <View style={{ flexDirection: 'row', marginTop:-70}}>
              
                 <Text style={styles.registercattle}>  <Image source={ require('../../asset/images/registercattle.png')} /> {"\n"}{"\n"}{"\n"} Register cattle</Text>
                 <Text style={styles.registersir}>  <Image source={ require('../../asset/images/registersire.png')}/> {"\n"}{"\n"}{"\n"} Register Sire</Text>
              </View>
  
              <View style={{ flexDirection: 'row', marginTop:-80}}>
                <Text style={styles.cattlesummary}> <Image source={ require('../../asset/images/cattlesummary.png')}/> {"\n"}{"\n"}{"\n"} Cattle Summary</Text>
                 <Text style={styles.activitylog}>  <Image source={ require('../../asset/images/activitylog.png')}/> {"\n"}{"\n"}{"\n"} Activity Log</Text>
              </View>
             </View>

             
             <View style={styles.banner}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>

             {/* <View >
              <View style={{ flexDirection: 'row'}}>
            
                  <Image style={styles.registercattle} source={ require('../../asset/images/registercattle.png')} />    <Text> Register cattle</Text>
                   <Image style={styles.registersir} source={ require('../../asset/images/registersire.png')}/> 
              </View>
  
              <View style={{ flexDirection: 'row'}}>
                  <Image style={styles.cattlesummary} source={ require('../../asset/images/cattlesummary.png')}/>
                  <Image style={styles.activitylog} source={ require('../../asset/images/activitylog.png')}/> 
              </View>
             </View> */}
           

        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    searchBarInput: {
      // color: tintColor,
      backgroundColor: '#fff',
      marginLeft: 10,
      marginRight: 10,
    },
   
  
    //  All Registration screens
    registercattle: {
      margin: 50,
      fontSize: 10,
      textAlign: 'center',
    },
    registersir: {
      margin: 50,
      fontSize: 10,
      textAlign: 'center',
    },
    cattlesummary: {
      margin: 50,
      fontSize: 10,
      textAlign: 'center',
    },
    activitylog: {
      margin: 50,
      fontSize: 10,
      textAlign: 'center',
    },
    //
   
    banner: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      marginLeft:40,
      marginRight: 80,
      marginTop: -50
  },

  });
export default Registration;