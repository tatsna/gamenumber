import React from 'react';
import {AppRegistry,} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './component/Livescore/Home'
import Table from './component/Livescore/Table'

const test2 = TabNavigator({
  Home: {
    screen: Home,
  },
  Table: {
    screen: Table,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

AppRegistry.registerComponent('test2', () => test2);