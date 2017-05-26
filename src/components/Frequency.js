import React, {Component} from 'react';
import {
    View, 
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

import { Actions } from 'react-native-router-flux';

export default class Frequency extends Component {
    state = {
        frequency: '30s'
     };
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {Actions.frequency();}}>
                <Text style={styles.frequency}>
                    Frequency
                </Text>
                <View style={{flex: 1}} />
                    <Text style={styles.selectedFrequency}>
                        {this.state.frequency}
                    </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },
  selectedFrequency: {
    color: 'darkgrey',
    fontSize: 20,
    marginRight: 20
  },
  frequency: {
    fontSize: 25,
    marginLeft: 25
  }
});