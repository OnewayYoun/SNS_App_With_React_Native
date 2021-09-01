import { ListItem, SearchBar, Headers } from 'react-native-elements';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Linking, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import { Icon, Thumbnail } from 'native-base';
import Constants from 'expo-constants';
import Global from '../components/global'

//layout for flatlist
function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class Search extends Component {
    //constructor for feeds, followings, Search data and key
    constructor(props) {
        super(props);
        
        this.state = {
            searching_data: [],
            searching_key: '',
            feeds: [],
            followings: []
        }
    }
    
    lookup = (text) => {
        const new_data = this.state.searching_data.filter(item => {      
            const item_data = item.toUpperCase();
            const text_data = text.toUpperCase();            
            return item_data.indexOf(text_data) == 0;    
        });    
        this.setState({ searching_data: new_data, searching_key: text });  
      };

    headerSearch = () => {    
        return (      
          <SearchBar        
            placeholder="Find..."        
            lightTheme        
            round        
            onChangeText={text => this.lookup(text)}
            onClear={text => this.lookup('')}
            autoCorrect={false}             
            value={this.state.searching_key}
            autoCapitalize='none'
          />
        );
      };

    // getting 100 followings using steemit api
    fetchFollowings() {
        const data = {
            id: 2,
            jsonrpc: "2.0",
            method: "call",
            params: [
              "follow_api",
              "get_following",
              [ Global.NAMES, "", "blog", 100 ]
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

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='search' style={{ color: tintColor }} />
        )
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
              searching_data: followings
             })
        });
    }

    render() {
      return (
        <ImageBackground
        source={{ uri: 'https://usercontents-c.styleshare.io/images/13649262/640x-'}}
        style={ styles.background }>
            <View style={{flex:1}}>
            <FlatList
                data = {this.state.followings, this.state.searching_data}
                renderItem={({ item }) => <Item title={item} />}
                // keyExtractor={item => item.id}
                ListHeaderComponent = {this.headerSearch} />
            </View>
        </ImageBackground>
      );
    }
  }


const styles = StyleSheet.create({
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
    },
    item: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)', //almost transparent
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 30,
        color: 'white'
    }
});