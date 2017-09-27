import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Camera from 'react-native-camera';

export default class CameraPage extends React.Component {

  takePicture = () => {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
        this.props.navigation.navigate('results',{imagePath: data.path});
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
        aspect={Camera.constants.Aspect.fill}
        playSoundOnCapture={false}
        captureQuality={Camera.constants.CaptureQuality['1080p']}
      >
        <View style={styles.capture}>
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
            <Text style={{ color: 'white' }}>[CAPTURE]</Text>
          </TouchableOpacity>
        </View>
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
  capture: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    justifyContent: 'center',
    margin: 'auto',
    flex: 1,
    flexDirection: 'row',
  },
});

