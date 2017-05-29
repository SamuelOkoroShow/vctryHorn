/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';


import horn from '../assets/horn.mp3'

import background from '../assets/back.jpg'
var Sound = require('react-native-sound');
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VctryHorn extends Component {
  constructor(){
    super()
       this.playSoundFromRequire = () => {
      const s = new Sound(horn, (e) => {
        if (e) {
          console.log('error', e);
          return;
        }

        s.play(() => s.release());
      });
    };
  }
  onHorn(){
    // stop sound
    // Play the sound with an onEnd callback
horn.play((success) => {
  if (success) {
    console.log('successfully finished playing');
  } else {
    console.log('playback failed due to audio decoding errors');
  }
});
    // play sound
  }
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{height:20, backgroundColor:'#000'}}></View>
      <Image source = {background} resizeMode = "cover" style={styles.container}>
        <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />
   <TouchableOpacity onPress={this.playSoundFromRequire} style={{width:110, borderWidth:3, alignItems:'center', justifyContent:'center', height:110, borderRadius:555, backgroundColor:'rgba(0,0,0,0.7)'}}>
   <Icon name="bullhorn" color='#D4AF37' size ={33} />
   </TouchableOpacity>
      </Image>
      <View style={{backgroundColor:'#446d97', alignItems:'center', justifyContent:'center', height:20}}>
      <Text style={{color:'#fff', fontSize:10, fontWeight:'700'}}>BY VCTRYSAM</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

