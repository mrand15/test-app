import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from 'react-native-camera';

export default class CameraPage extends React.Component {

  takePicture = () => {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
        console.log(data);
      }).catch(err => console.error(err));
  } 

  render () {
    return (
    <View style={styles.container}>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
      </Camera>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    height: '100%',
    width: '100%',
  },
});

