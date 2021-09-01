import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Icon } from 'native-base';

export default class Search extends Component {

    render() {
        return (
                <View style={style.container}>
                    <Text>Camera</Text>
                </View>
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