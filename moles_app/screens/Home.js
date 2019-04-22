import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, Button, ImageBackground, TouchableOpacity} from 'react-native';
import { Font, ImagePicker, Permissions } from "expo";
import {styles} from '../assets/styles/Style';

const defaultState = {
  values: {
    pictureUrl: '',
  }
};

var FileUpload = require('NativeModules').FileUpload;

export default class HomeScreen extends React.Component {
  state = defaultState;
  onChangeText = (key, value) => {
    this.setState(state => ({
      values: {
        ...state.values,
        [key]: value,
      },
    }));
  };
  
  constructor(){
    super();
    this.state={
      ...defaultState, 
      gotFonts:false,
      image: null
    };
    this.pickImage = this.pickImage.bind(this)
    this.postPicture = this.postPicture.bind(this)
  };
    
  //runs after the page is finished running
  async componentDidMount(){
    console.log('about to load fonts')
    await Font.loadAsync({
      'mont': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
      'mont-medium': require('../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
      'mont-bold': require('../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      'courgette': require('../assets/fonts/Courgette-Regular.ttf'),
      'fira-mono': require('../assets/fonts/Fira-Mono/FiraMono-Regular.otf'),
      'fira-mono-bold': require('../assets/fonts/Fira-Mono/FiraMono-Bold.otf'),
    });
    this.setState({gotFonts:true})
  }

  // Pick image function
  pickImage = async () => {
    const { Camera_Roll, Permissions } = Expo; 
    const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);  
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.onChangeText('pictureUrl', result.uri);
      this.setState({image: result.uri});
    }
  };

  // Post image to API
  postPicture() {
    if (this.state.image) {
      const apiUrl = 'https://moles-api-heroku.herokuapp.com/predict';
      const uri = this.state.image;
      const uriParts = uri.split('.');
      const fileType = uriParts[uriParts.length, -1];

      const formData = new FormData();
        {
          formData.append('image', {
            name: "file",
            type: fileType,
            uri: uri.replace("file://", "")})
        };

      const options = {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },

      };

      fetch(apiUrl, options)
        .then((response) => response.json())
        .then((responseJson) => { 
          console.log(responseJson);

          // Navigate to results screen
          this.props.navigation.navigate('Result', {
            predictions: responseJson.predictions
          });
        })
          .catch((error) => {console.error(error);});
    }
  };

  render() {
    const {
      values
    } = this.state;
      
    const { pictureUrl } = values;
    
    return ( 
      <ImageBackground source={require('../assets/images/bkgwoblur.png')} style={styles.container}>
        { this.state.gotFonts && (
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
              <Text style={styles.title}>Moles</Text>
              <Text style={styles.heading1}>Skin Cancer Identifier</Text>
            </View>

            <Image source={require('../assets/images/mole.png')} style={styles.moleImage}/>

            <View style={styles.card}>
              <TouchableOpacity onPress={this.pickImage} style={styles.greenButton}>
                <Text style={styles.greenButtonText}>Upload Photo</Text>
              </TouchableOpacity>

              <View style={{ width: 200, height: 200, backgroundColor: '#E3DDDD', alignSelf: 'center' }}>
                {pictureUrl ? (
                  <Image
                    source={{ uri: pictureUrl }}
                    style={{ width: 200, height: 200 }} 
                  />
                ) : null}
              </View>

              <TouchableOpacity onPress={this.postPicture} style={styles.greenButton}>
                <Text style={styles.greenButtonText}>Test</Text>
              </TouchableOpacity>

              


              <View style={styles.warning}>
                <Text style={styles.warningText}>Always consult your doctor for a verified medical exam</Text>
              </View>
            </View>
          </SafeAreaView>
        )}
       </ImageBackground> 
    );
  }
}

