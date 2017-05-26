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


export default class Home extends Component {
  static defaultProps = {
    value: 0.5,
  };

  state = {
    value: this.props.value,
    annoyMode: "Cricket",
    frequency: 36,
    trueSwitchIsOn: true,
  };

  render() {
    return (
      <View style={{marginTop:20}}>
      <View style={styles.container} >
            <Text style={styles.onOff}>
            Enable 
            </Text>
            <View style={{flex: 1}} />
            <Switch
             style={{marginRight: 18}}
             onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
             value={this.state.falseSwitchIsOn} />
      </View>
     <TouchableOpacity style={styles.container} onPress={() => {Actions.annoyMode();}}>
        <Text style={styles.annoyMode} >
        Annoy Mode
        </Text>
        <View style={{flex: 1}} />
        <Text style={styles.selectedAnnoyMode} >
        {this.state.annoyMode}
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.container} onPress={() => {Actions.frequency();}}>
        <Text style={styles.frequency}>
        Frequency
        </Text>
        <View style={{flex: 1}} />
        <Text style={styles.selectedAnnoyMode}>
        {this.state.frequency}
        </Text>
    </TouchableOpacity>
      <View>
        <Text style={styles.text} >
          Volume
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 60,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  annoyMode: {
      fontSize: 25,
      marginLeft: 25
  },
  selectedAnnoyMode: {
    color: 'darkgrey',
    fontSize: 20,
    marginRight: 20
  },
  frequency: {
    fontSize: 25,
    marginLeft: 25
  },
  onOff: {
    fontSize: 25,
    marginLeft: 25
  }
});