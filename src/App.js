import React from 'react';
import {
  Platform,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import AnnoyModeSelect from './components/AnnoyModeSelect';
import FrequencySelect from './components/FrequencySelect';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' title='Annoy a Bot' component={Home} navigationBarStyle={{backgroundColor: 'skyblue'}} />
          <Scene key='annoyMode' title='Annoy Mode' component={AnnoyModeSelect} navigationBarStyle={{backgroundColor: 'skyblue'}} />
          <Scene key='frequency' title='Frequency' component={FrequencySelect} navigationBarStyle={{backgroundColor: 'skyblue'}} />
        </Scene>
      </Router>
    );
  }
}