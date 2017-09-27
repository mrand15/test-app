import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Camera from 'react-native-camera';
import RNTesseractOcr from 'react-native-tesseract-ocr';

export default class ResultsPage extends React.Component {

  constructor () {
    super();

    this.state = {
      ocrResult: '',
    };
  }

  componentDidMount () {
    const { imagePath } = this.props.navigation.state.params;
    RNTesseractOcr.startOcr(imagePath.replace('file://',''), 'LANG_ENGLISH')
    .then((result) => {
      this.setState({ ocrResult: result });
      console.log("OCR Result: ", result);
    })
    .catch((err) => {
      console.log("OCR Error: ", err);
    })
    .done();  
  }

  render () {
    const { imagePath } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <Image style={{ width: '100%', height: 300 }} source={{ uri: imagePath }} />
        <Text>
          {this.state.ocrResult}
        </Text>
      </View>
    );
  }
}

