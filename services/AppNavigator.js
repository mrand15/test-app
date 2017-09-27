import React from 'react';
import { StackNavigator } from 'react-navigation';

//import NavHeader from '../components/NavHeader';
import CameraPage from '../screens/Camera';
import ResultsPage from '../screens/Results';

const AppNavigator = StackNavigator({
  camera: {
    screen: CameraPage,
    navigationOptions: {},
  },
  results: {
    screen: ResultsPage,
    navigationOptions: {},
  },
}, {
  initialRouteName: 'camera',
});

export default AppNavigator;
