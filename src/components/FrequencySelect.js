import React, { Component } from 'react';
import ViewContainer from './ViewContainer';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Title,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const frequencies = ["Random", "5s", "10s", "15s", "30s", "45s", "60s", "120s"];

export default class Frequency extends Component {
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            frequencyDataSource: ds.cloneWithRows(frequencies)
        }
    }

   render() {
    return (
            <ViewContainer>
                <ListView
                    style={{marginTop: 20}}
                    dataSource={this.state.frequencyDataSource}
                    renderRow={(frequency) => { return this._renderFrequencyRow(frequency) }} />
          </ViewContainer>
        )
    }

    _renderFrequencyRow(frequency) {
        return (
            <TouchableOpacity style={styles.frequencyRow}>
                <Text style={{fontSize: 25, marginLeft:25}}>{frequency}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  frequencyRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    borderRadius:3
  },
  annoySelectedIcon: {
    color: "green",
    height: 10,
    width: 10,
    marginRight: 25
  }

});
