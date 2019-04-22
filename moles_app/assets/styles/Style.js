import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  card: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '90%',
    height: '65%',
    backgroundColor: 'white',
    borderRadius: 20, 
    padding: 10
  },
  title: {
    fontFamily:'courgette',
    fontSize: 64,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
    textAlign: 'center'
  },
  heading1: {
    fontFamily:'courgette',
    fontSize: 30,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 2},
    textShadowRadius: 2,
    textAlign: 'center'
  },
  heading2: {
    fontFamily: 'mont-bold',
    fontSize: 24,
    textAlign: 'center',
  },
  moleImage: {
    marginLeft: 40
  },
  greenButton: {
    alignSelf: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    width: 200,
    backgroundColor:'#9FD7BB',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  greenButtonText: {
    fontFamily: 'mont-medium',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
  backButton: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    width: 80,
    backgroundColor:'#9FD7BB',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
  },
  backButtonText: {
    fontFamily: 'mont-medium',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  warning: {
    backgroundColor: '#F6295A',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10
  },
  warningText: {
    fontFamily: 'mont-bold',
    fontSize: 16,
    textAlign: 'center',
  },
  result: {
    backgroundColor: '#C7E8D8',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center'
  },
  resultTextHeading: {
    fontFamily: 'mont-bold',
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 10
  },
  resultText: {
    fontFamily: 'mont',
    fontSize: 24,
    textAlign: 'center',
}
});

export {styles}