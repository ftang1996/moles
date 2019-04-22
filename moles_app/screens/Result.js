import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {Font} from 'expo';
import {styles} from '../assets/styles/Style';

export default class ResultScreen extends React.Component {
  constructor(){
    super();
    this.state={
      gotFonts:false, 
    }
  }

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
    
    // get predictions and format data
    var format_preds = (parseFloat(this.props.navigation.state.params.predictions) * 100).toFixed(1) 
    console.log(format_preds)
    this.setState({predictions: format_preds.toString()})
  }
  
  render(){
    return(
      <ImageBackground source={require('../assets/images/bkgwoblur.png')} style={styles.container}>
        { this.state.gotFonts && (
          <SafeAreaView style={{flex:1}}> 
            <View style={styles.container}>
                <Text style={styles.title}>Moles</Text>
                <Text style={styles.heading1}>Skin Cancer Identifier</Text>
            </View>

            <Image source={require('../assets/images/mole.png')} style={styles.moleImage}/>

            <View style={styles.card}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.backButton}>
                  <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
              <View style={styles.result}>
                <Text style={styles.resultTextHeading}>Prediction</Text>
                <Text style={styles.resultText}>{this.state.predictions}% confidence</Text>
                <Text style={styles.resultText}>this could be</Text>
                <Text style={styles.resultText}>SKIN CANCER</Text>
              </View>
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
