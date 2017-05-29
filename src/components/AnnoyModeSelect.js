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
import Icon from 'react-native-vector-icons/FontAwesome';

const annoyModes = ["Cricket", "Cat", "Beep 1", "Beep 2", "Breathing"];

export default class AnnoyModeSelect extends Component {
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            annoyModeDataSource: ds.cloneWithRows(annoyModes)
        }
    }

   render() {
    return (
            <ViewContainer>
                <ListView
                    style={{marginTop: 20}}
                    dataSource={this.state.annoyModeDataSource}
                    renderRow={(annoyMode) => { return this._renderAnnoyMode(annoyMode) }} />
          </ViewContainer>
        )
    }

    _renderAnnoyMode(annoyMode) {
        return (
            <TouchableOpacity style={styles.annoyModeSelectRow}>
                <Text style={{fontSize: 25, marginLeft:25}}>{annoyMode}</Text>
                 <View style={{flex: 1}} />
                <Icon name='chevron-right' size={20} style={styles.annoyModeSelected} />
            </TouchableOpacity>
        )
    }
}


AnnoyModeSelect.defaultProps = {
  name: 'Test',
};

AnnoyModeSelect.propTypes = {
  name: React.PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    annoyModeSelectRow: {
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
    },
    annoyModeSelected: {
        color: "green",
        height: 20,
        width: 20,
        marginRight: 50
    },
});
