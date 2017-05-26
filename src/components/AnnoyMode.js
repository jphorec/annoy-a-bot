import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class AnnoyMode extends Component {
    state = {
        annoyMode: "Cricket",
    };

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {Actions.annoyMode();}}>
                <Text style={styles.annoyMode} >
                    Annoy Mode
                </Text>
                <View style={{flex: 1}} />
                <Text style={styles.selectedAnnoyMode} >
                    {this.state.annoyMode}
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
  annoyMode: {
      fontSize: 25,
      marginLeft: 25
  },
  selectedAnnoyMode: {
    color: 'darkgrey',
    fontSize: 20,
    marginRight: 20
  }
});