import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Button, Icon } from 'native-base';

export default class Feeds extends Component{
    render() {
      const { data } = this.props; // feed data
      const { image } = JSON.parse(data.json_metadata); // Parsing image url from json_metadata
      return (
          <Card>
              <CardItem>
                <Left>
                  {/* image of author */}
                  <Thumbnail source={{ uri: `https://steemitimages.com/u/${data.author}/avatar` }} />
                  <Body>
                    {/* name of author and created date */}
                    <Text>{data.author}</Text>
                    <Text note>{new Date(data.created).toDateString()}</Text>
                  </Body>
                </Left>
              </CardItem>
              {
                image && image.length ?
                <CardItem cardBody>
                  <Image 
                    source={{ uri: image[0] }} 
                    style={{ height:200, width:null, flex: 1 }} />
                </CardItem> : null
              }
              <CardItem>
                {/* title */}
                <Text style={{ fontWeight:'900'}}>{ data.title }</Text>
              </CardItem>
              <CardItem>
                {/* body */}
                <Text>
                { data.body.replace(/\n/g,' ').slice(0, 200) }
                </Text>
              </CardItem>
              <CardItem style={{ height:45 }}>
                <Left>
                  <Button transparent>
                    <Icon name='heart' style={{ color:'red', marginRight: 5 }}/> 
                    {/* # of likes */}
                    <Text>{ data.active_votes.length }</Text>
                  </Button>
                  <Button transparent>
                    <Icon name='text' style={{ color:'green', marginRight: 5 }}/>
                    {/* # of comments */}
                    <Text>{ data.children }</Text>
                  </Button>
                  <Button transparent>
                    {/* sending a message */}
                    <Icon name='send' style={{ color:'blue' }}/>
                  </Button>
                </Left>
              </CardItem>
          </Card>
      );
   }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});