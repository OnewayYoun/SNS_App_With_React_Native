import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import Feeds from '../components/Feeds';
import Global from '../components/global'

export default class Home extends Component {

    // getting followings using steemit api
    fetchFollowings() {
 
        const data = {
            id: 2,
            jsonrpc: "2.0",
            method: "call",
            params: [
              "follow_api",
              "get_following",
              [ Global.NAMES , "", "blog", 20 ]
            ]
        };
        return fetch('https://api.steemit.com',
        {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result.map(({following}) => following))
    }

    //getting 20 feeds using steemit api
    fetchFeeds() {
        const data = {
            id: 1,
            jsonrpc: "2.0",
            method: "call",
            params: [
              "database_api",
              "get_discussions_by_created",
              [{ tag: "life", limit: 20 }]
            ]
        };
        return fetch('https://api.steemit.com', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result)
    }

    // getting feed before Home component is mounted, and declare state.feeds
    // getting followings too
        state = {
        feeds: [],
        followings: []
    }

    componentWillMount() {
    //Save feeds data in state.feeds
        this.fetchFeeds().then(feeds => {
            this.setState({
              feeds
            })
        });
    //save followings data in state.followings
        this.fetchFollowings().then(followings => {
            this.setState({
              followings
             })
        });
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={style.container}>
                <Content>
                    {/* Story Header */}
                    <View style={{ height: 80 }}>
                        <View style={{ flex: 1,
                                       flexDirection: 'row',
                                       justifyContent: 'space-between',
                                       alignItems: 'center',
                                       paddingHorizontal: 10,
                                       backgroundColor: 'black' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Story</Text>
                            <View style={{ flexDirection:'row', 'alignItems':'center'}}>
                                <Icon name="play" style={{fontSize:14, color: 'white'}}></Icon>
                                <Text style={{fontWeight:'bold', color: 'white'}}> Watch More</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3 }}>
                          {/* Horizontal story view */}
                          <ScrollView horizontal={true}>
                          {
                            this.state.followings.map(following =>
                            //Using Array's map function. Loop through state.followings then send data of followings to following
                            <Thumbnail style= {style.thumb} source={{uri: `https://steemitimages.com/u/${following}/avatar` }} />)
                          }
                          </ScrollView>
                        </View>
                      </View>
                    {
                        this.state.feeds.map(feed => <Feeds data={ feed }/>)
                          //Using Array's map function. Loop through state.feeds then send data of feeds to Feeds
                    }
                </Content>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    thumb: {
        marginHorizontal: 7,
        borderColor: 'white',
        borderWidth: 3
    }
});
