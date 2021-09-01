import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TextInput, ImageBackground } from 'react-native';
import { ScreenOrientation } from 'expo';
import Dimensions from 'Dimensions';
import Global from './global'

Global.NAMES = ''
 
export default class Login extends Component {
    //constructor for username
    constructor() {
      super();
      this.state = { 
        username: '',
      }
    }
    
    //Header layout
    static navigationOptions = {
        title: 'Login',

        headerTitleStyle: {
          color:'white',
          textAlign:"center",
          flex:1,
          fontSize:25
        },

        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#000000',
        headerLeft: null
    }

    //login page layout
    render() {
      return (
        <ImageBackground 
        source={{ uri: 'https://i.pinimg.com/originals/fe/df/d2/fedfd24f4a01191b9fc51ebc978b0516.jpg'}}
        style={ styles.background }>
          <View ref = 'orient_possible' 
                style = {{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <TextInput style={ styles.userinfo_container }
                  secureTextEntry={true}
                  placeholder='username'
                  placeholderTextColor="white"
                  color='white'
                  onChangeText={(username) => this.setState({username})}
                  autoCapitalize='none'
                  value={this.props.navigation.getParam('current_username', null)}
              />
              
              <Button
                  color='cornflowerblue'
                  title="press here to continue"
                  //navigate to MainPage with sending data of username into current_username
                  onPress={() => this.props.navigation.navigate('MainPage', {
                      current_username: this.state.username
                  })}
                  animation='fade'
              />
          </View>
        </ImageBackground>
      );
    }
  }


const styles = StyleSheet.create(
    {
      background: {
          flex: 1,
          resizeMode: 'cover',
          width: '100%', 
          height: '100%'
      },
      userinfo_container: {
        fontSize: 50,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'white',
        width: 300,
        height: 70,
        padding: 5,
        textAlign: 'center',
        marginBottom: 10
      }
    });
