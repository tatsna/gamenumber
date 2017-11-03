import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, AppRegistry, AppState, TouchableHighlight, TextInput } from 'react-native';
import WS from 'react-native-websocket'
import PushNotification from 'react-native-push-notification'

import Gamerandom from './component/Game/Gamerandom'

export default class Gamerandom extends Component {

  render() {
    return (
     <Gamerandom/>
    )
  }
}

AppRegistry.registerComponent('Gamerandom', () => Gamerandom);