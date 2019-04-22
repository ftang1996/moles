import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, Button, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import { Font, ImagePicker, Permissions } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";

 import HomeScreen from './screens/Home';
 import ResultScreen from './screens/Result';


 // App navigation screens
 const AppNavigator = createStackNavigator({
   Home: {
     screen: HomeScreen
   },
   Result: {
     screen: ResultScreen
   } 
 },
 {
   initialRouteName: 'Home',
   headerMode: 'None', // Turns off header
   navigationOptions:({navigation}) => ({header: null})
 });

 export default createAppContainer(AppNavigator);


//TODO
// remove test screen
// conditional: cant press test unless photo uploaded
// send photo to api
// recieve data from api, disply result accordingly
// fix constraints for all iphone models