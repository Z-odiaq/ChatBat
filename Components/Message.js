import React, { Component,PureComponent } from 'react';
import { View, Text } from 'react-native';

class Message extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ backgroundColor:"#cdcdcd", padding:8}}>
        <Text style={{ color:"#000", fontWeight:"bold"}}> {this.props.item.User} </Text>
        <Text style={{ color:"#000",}}> {this.props.item.Message} </Text>
        <Text style={{ color:"#000", }}> {this.props.item.CreatedAt} </Text>
      </View>
    );
  }
}

export default Message;
