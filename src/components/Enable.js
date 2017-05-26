import React, {Component} from 'react';
import {
    View, 
    Switch,
    Text,
    StyleSheet
} from 'react-native';

export default class Enable extends Component {
    state = {
        trueSwitchIsOn: true,
    };
    render() {
        return (
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
  onOff: {
    fontSize: 25,
    marginLeft: 25
  }
});