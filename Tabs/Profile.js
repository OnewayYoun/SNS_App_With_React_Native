import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import { Icon, Button, Left, Right, Container, Content, Header, Body } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Feeds from '../components/Feeds';
import Global from '../components/global'

const { width, height } = Dimensions.get('window');

let images = [
"https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/11878975_10153560308939589_8635582807600710982_o.jpg?_nc_cat=104&_nc_oc=AQn9ZetvXmCFGVoy4-20l5GGSMAaahSUYGCRYS6Zw3WO0cjtBb7J00iAnh3jf_rsnWg&_nc_ht=scontent-ort2-2.xx&oh=3953ece7621761f0b4592d8ce3dcb60f&oe=5E867EDB",
"https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/11794575_10153560413249589_1727847587478719736_o.jpg?_nc_cat=103&_nc_oc=AQk0INlrWPsTtLrTAbuk9Xd96fCrOuqQXT7ym81-w7bGOint0mxaX391LQJlG4miCaA&_nc_ht=scontent-ort2-2.xx&oh=f847d557475f13403c573eec8f16f44e&oe=5E5424D9",
"https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/11816312_10153560409829589_3927813950410977085_o.jpg?_nc_cat=105&_nc_oc=AQnQnJwgoWsDRQ18xvE4W4Fl-_LzkLSv0agc8jVy7BDjVJHnXH1F4LzexhovQeazWa0&_nc_ht=scontent-ort2-2.xx&oh=1ac67cd09c2663985ddb71c2e9102258&oe=5E5003CC",
"https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/11846716_10153560407069589_1445049013818552850_n.jpg?_nc_cat=107&_nc_oc=AQl99Qh3Ccz8vYpcoZpnl2bobKNSouOCRd1o430Z3VyZzY1bFWkni-KjwvJBL1dfQQU&_nc_ht=scontent-ort2-2.xx&oh=5f2ff20acf887773920fd43c3918c6c1&oe=5E845335",
"https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/11146514_10153560300139589_3832169730800625430_o.jpg?_nc_cat=108&_nc_oc=AQmkMU4-ovH5RJKaxfKXfiLl1fuSnopL2isI81pLorGgJplyuJWvQWTtCs5ZRllZW4U&_nc_ht=scontent-ort2-2.xx&oh=b6c51d07e5d383936a5763b921e1f627&oe=5E8A6FF8",
"https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/11707546_10153472557004589_1187190077151014759_n.jpg?_nc_cat=110&_nc_oc=AQlLFX28pPIFQx0g5dBJOZfTbAyuD6aKPMspK2UpYq0E_uy_0s3rO0Iuz29-eeSjmJQ&_nc_ht=scontent-ort2-2.xx&oh=1775854a171a60432f50647672eea793&oe=5E4EE571",
"https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/11401136_10153474494434589_3579774365702796469_n.jpg?_nc_cat=111&_nc_oc=AQkdeervBjZKT61CCUW5x5J2wjAaJxT4QKRF_UqfZJujIoAi-Cy1t8WmSeT5nG0ZXGA&_nc_ht=scontent-ort2-2.xx&oh=b60348b12eaa1a981b4244383330b915&oe=5E44EF5C",
"https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/11401439_10153480811589589_8884573769878206685_n.jpg?_nc_cat=108&_nc_oc=AQkYKEipt2QoW5Vv52_MEj0zol-bvnReiVe7GaG7KZFs9jGyhalk-8KxzZ7dDRslf6U&_nc_ht=scontent-ort2-2.xx&oh=6592f6e688058ea16c62c2964c17cac0&oe=5E400BB6",
"https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/1120062_10151794170484589_1233546106_o.jpg?_nc_cat=107&_nc_oc=AQlov54F-reC114ruO8yYZidvu1qPzDh8hIJDNZyBfTXyIerqhRWw1fp_5mHPPysn3g&_nc_ht=scontent-ort2-2.xx&oh=cce8051e7669baf6c70f682200fc34be&oe=5E4BCAD2"
]

export default class Profile extends Component {

    renderTaps = () => {
        if(this.state.tapIndex === 0) {
            return (
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    { this.tapOne() }
                </View>
            )
        }
        else if(this.state.tapIndex === 1) {
            return (
                <View>
                    { this.tapTwo() }
                </View>
            )
        }
        else if(this.state.tapIndex === 2) {
            return (
                <View>
                    { this.tapThree() }
                </View>
            )
        }
        else if(this.state.tapIndex === 3) {
            return (
                <View>
                    { this.tapFour() }
                </View>
            )
        }
    }
    
    //image of posting layout
    tapOne = () => {
        return images.map((image, index) => {
            return (
                <View key={index} 
                    style={{ width: width/3, height: width/3 }} >
                    <Image source={{ url: image }} style={{ flex:1 }}/>
                </View>
            )
        })
    }

    //Postings using Feeds layout
    tapTwo = () => {
        return this.state.blogs.map(blog => (
            <Feeds data={ blog } key={ blog.url }/>
        ));
    }

    tapThree = () => {
        return <View><Text>Tap3</Text></View>
    }

    tapFour = () => {
        return <View><Text>Tap4</Text></View>
    }

//get_state api
    getState(username) {
        const data = {
            id: 4,
            jsonrpc: "2.0",
            method: "call",
            params: [
              "database_api",
              "get_state",
              [`/@${username}`]
            ]
        };
        return fetch('https://api.steemit.com',
        {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result)
    }

//getting account info using steemit api
    getAccount(username) {
      const data = {
        id: 3,
        jsonrpc: "2.0",
        method: "call",
        params: [
          "database_api",
          "get_accounts",
          [[username]]
        ]
      };
      return fetch('https://api.steemit.com', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => res.result[0])
    }

//getting # of followings and followers using steemit api
    getCounts(username) {
      const data = {
        id: 4,
        jsonrpc: "2.0",
        method: "call",
        params: [
          "follow_api",
          "get_follow_count",
          [username]
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
            <Icon name='person' style={{ color: tintColor }} />
        )
    }

    constructor(props){
        super(props)
 
        this.state = {
            name: '',
            profile: {},
            postCount: 0,
            followingCount: 0,
            followerCount: 0,
            tapIndex: 0,
            blogs: []
        };
    }

//get account info and # of followings and followers then save them to state
    componentWillMount() {
      const username = Global.NAMES; //username  
        this.getState(username).then(({
            accounts,
            content
        }) => {
            const { name, post_count, json_metadata } = accounts[username];
            const { profile } = JSON.parse(json_metadata);
            this.setState({
                name, //username
                postCount: post_count, //# of posting
                profile, //profile
                blogs: Object.values(content)
            })
        });

      this.getCounts(username).then(({following_count, follower_count}) => {
        this.setState({
          followingCount: following_count, // # of following
          followerCount: follower_count // # of follower
        })
      });
    }

    tapClicked = (tapIndex) => {
        this.setState({ 
          tapIndex 
        });
    }

    render() {
        const { 
            name,
            profile,
            postCount,
            followingCount,
            followerCount 
        } = this.state;

        return (
        <Container style={{ flex:1, backgroundColor: 'white'}}>
          <Header>
            <Left><Icon name="person-add" style={{ paddingLeft:8 }} /></Left>
            {/* username */}
            <Body><Text>{name}</Text></Body>
            <Right><EntypoIcon name="back-in-time" style={{ paddingRight:8, fontSize: 33 }} /></Right>
          </Header>
          <Content>
            <View style={{flexDirection:'column', paddingTop:11}}>
              <View style={{flex:1, alignItems:'center'}}>
                {/* profile image */}
                <Image source={{ url: profile.profile_image }}
                      style={{width:60, height:60, borderRadius:33}}/>
              </View>
              <View style={{flex:3}}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <View style={{alignItems:'center'}}>
                    {/* # of following */}
                    <Text>{followingCount}</Text>
                    <Text style={{fontSize:13, color:'black'}}>followings</Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                    {/* # of follower */}
                    <Text>{followerCount}</Text>
                    <Text style={{fontSize:13, color:'black'}}>followers</Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                    {/* # of posting */}
                    <Text>{postCount}</Text>
                    <Text style={{fontSize:13, color:'black'}}>posts</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row'}}>
                  {/* edit button */}
                  <Button
                          style={{backgroundColor:'black', flex:6, marginLeft:10, justifyContent:'center',
                                  height:33, marginTop:13}}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:19}}>Edit</Text>
                  </Button>
                  {/* setting button */}
                  <Button small
                          style={{backgroundColor:'black', flex:1, marginRight:10, marginLeft:5,
                                  justifyContent:'center', height:33, marginTop:13}}>
                    <Icon name="settings" />
                  </Button>
                </View>
              </View>
            </View>
            <View style={{paddingHorizontal:15, paddingVertical:10}}>
              {/* username */}
              <Text style={{fontWeight:'bold'}}>{profile.name}</Text>
              {/* About */}
              <Text>{profile.about}</Text>
              {/* Website */}
              <Text>{profile.website}</Text>
            </View>
            {/* 4 taps */}
            <View style={{ borderTopWidth:1, borderTopColor:'black', flexDirection: 'row', justifyContent:'space-around' }}>
                {/* tapClicked(tapindex). It becomes TRUE when it is active. Otherwise, color = black */}
                <Button transparent
                    onPress={() => this.tapClicked(0)}
                    active={this.state.tapIndex === 0}>
                    <Icon name='apps' 
                          style={[ this.state.tapIndex === 0 ? {} : {color: 'black'} ]}/>
                </Button>
                <Button transparent
                    onPress={() => this.tapClicked(1)}
                    active={this.state.tapIndex === 1}>
                    <Icon name='list' 
                          style={[ this.state.tapIndex === 1 ? {} : {color: 'black'} ]}/>
                </Button>
                <Button transparent
                    onPress={() => this.tapClicked(2)}
                    active={this.state.tapIndex === 2}>
                    <Icon name='people' 
                          style={[ this.state.tapIndex === 2 ? {} : {color: 'black'} ]}/>
                </Button>
                <Button transparent
                    onPress={() => this.tapClicked(3)}
                    active={this.state.tapIndex === 3}>
                    <Icon name='bookmark' 
                          style={[ this.state.tapIndex === 3 ? {} : {color: 'black'} ]}/>
                </Button>
            </View>

            { this.renderTaps() }
          
          </Content>
        </Container>
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
