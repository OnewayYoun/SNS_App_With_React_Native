import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Icon } from 'native-base';

export default class Likes extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='heart' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <ImageBackground 
               source={ require('../Image/Mongolia.jpg')}
               style={ style.background }>
                <View style={style.container}>
                    <Text>LikesTab</Text>
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%', 
        height: '100%'
    }
});