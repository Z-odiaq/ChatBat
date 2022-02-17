import React, { Component,PureComponent } from 'react';
import { View, Text } from 'react-native';

class Renderer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> {this.props.item.User} </Text>
        <Text> {this.props.item.Message} </Text>
        <Text> {this.props.item.CreatedAt} </Text>
      </View>
    );
  }
}

export default Renderer;
