import React, {Component} from 'react';
import {
    View, 
    Slider,
    Text,
    StyleSheet
} from 'react-native';

export default class VolumeControl extends Component {
    static defaultProps = {
        value: 0.5,
    };

    state = {
        value: this.props.value,
    };

    render() {
        return (
            <View>
                <Text style={styles.volumeText} >
                    Volume
                </Text>
                <Slider
                    {...this.props}
                    onValueChange={(value) => this.setState({value: value})} />
             </View>
        )
    }
}

const styles = StyleSheet.create({
    volumeText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 60,
    }
});