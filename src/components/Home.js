/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Title,
  Switch,
  Slider, 
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import AnnoyMode from './AnnoyMode';
import Enable from './Enable';
import Frequency from './Frequency';
import VolumeControl from './VolumeControl';


export default class Home extends Component {

  render() {
    return (
      <View style={{marginTop:20}}>
        <Enable />
        <AnnoyMode />
        <Frequency />
        <VolumeControl />
      </View>
    );
  }
}