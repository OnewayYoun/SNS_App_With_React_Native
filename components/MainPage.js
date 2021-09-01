import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Home from '../Tabs/Home'
import Likes from '../Tabs/Likes'
import Media from '../Tabs/Media'
import Profile from '../Tabs/Profile'
import Search from '../Tabs/Search'

import Global from './global'

//Tabs on bottom
const Tabs = createMaterialTopTabNavigator({
  
  Profile: {
    screen: Profile
  },
  Likes: {
    screen: Likes
  },
  Home: {
    screen: Home
  },
  Media: {
    screen: Media
  },
  Search: {
    screen: Search
  }
},
//bottom tab layout and feature(animation, swipe)
{
  animationEnabled: true, //animation when clicking button
  swipeEnabled: true, //enable to use swipe
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        android:{
          backgroundColor:'black',
        },
        ios:{
          backgroundColor:'black'
        }
      })
    },
    iconStyle: { height: 100 },
    activeTintColor: 'indianred',
    inactiveTintColor: 'white',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});

const AppTabs = createAppContainer(Tabs);


export default class MainPage extends Component {
  
  /*  Header layout
      Camera and Sending Message navigation*/
  static navigationOptions = {
    
    title: 'Instagram',
    
    headerTitleStyle: {
      color:'white',
      textAlign:"center",
      flex:1,
      fontSize:25
    },
    
    headerStyle: {
        backgroundColor:'black',
    },
 
    headerLeft: <Icon name='ios-camera'
    onPress={() => this.props.navigation.navigate('MainPage')}
    style={{ paddingLeft:15, color:'white' }}/>,
    headerRight: <Icon name='text' style={{ paddingRight:15, color:'white' }}/>,
  }

  //return components of AppTabs(Home, Profile, Likes, Media, Search)
  render() {
    Global.NAMES = this.props.navigation.getParam('current_username', null);
    return <AppTabs />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
