import React from 'react';
import { StackNavigator } from 'react-navigation';

//import NavHeader from '../components/NavHeader';
import CameraPage from '../screens/Camera';

const AppNavigator = StackNavigator({
  camera: {
    screen: CameraPage,
    navigationOptions: {},
  },
}, {
  initialRouteName: 'camera',
});

export default AppNavigator;
