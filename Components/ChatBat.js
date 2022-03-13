import React, { Component, createRef } from 'react';
import { View, FlatList, } from 'react-native';
import ChatBubble from './ChatBubble';
import Input from './Input';

export default class ChatBat extends Component {

  constructor(props) {
    super(props);
    this.chatBatRef = createRef();

    this.state = {
      msg: '',
    };
  }

  isUrl(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);


  }


  send(text) {
    if (text.length > 0) {
      var messages = this.props.messages;
      var msg = {
        _id: Math.floor(Math.random() * 100000000),
        from: this.props.userId,
        text: text,
        type: this.isUrl(text) ? 4 : 1,
        status: 2,
        createdAt: new Date().toISOString().toString(),
        image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png'
      }
      messages.unshift(msg)
      this.setState({ messages: messages, msg: "" });
      return (this.props.OnSend(msg))

    }
  }

  renderItem = (item, index) => {
    return (
      <ChatBubble
        userId={this.props.userId}
        item={item}
        index={index}
        key={item._id}
        prevItem={index + 1 < this.props.messages.length && this.props.messages[index + 1]}
        nextItem={index != 0 && this.props.messages[index - 1]}
        friendAvatar={this.props.friendAvatar}
        imageView={(url) => this.props.ImageViewer(url)}
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ backgroundColor: "#EFE5F6", scaleY: -1 }}
          ref={this.props.forwardRef}
          extraData={this.state}
          data={this.props.messages}
          inverted={false}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={this.renderChatEmpty}
          scrollEventThrottle={50}
          keyExtractor={(item) => { return item._id }}
          renderItem={({ item, index }) => this.renderItem(item, index)} />
        <Input onSend={(text) => this.send(text)}></Input>
      </View>
    );
  }
}
