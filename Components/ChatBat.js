import React, { Component, createRef } from 'react';
import { StyleSheet, View, FlatList, } from 'react-native';
import ChatBubble from './ChatBubble';
import Input from './Input';

export default class ChatBat extends Component {

  constructor(props) {
    super(props);
    this.chatBatRef = createRef();

    this.state = {
      msg: '',
      inverted: true,
    };
  }

  isUrl(str) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    console.log(!!pattern.test(str));
    return !!pattern.test(str);


  }


  send(text) {
    console.log(text);
    if (text.length > 0) {
      var messages = this.props.messages;
      var msg = {
        id: Math.floor(Math.random() * 100000000),
        from: this.props.userId,
        text: text,
        type: this.isUrl(text) ? 4 : 1,
        status: 2,
        key: new Date().toISOString(),
        createdAt: new Date().toISOString().toString(),
        image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png'
      }
      messages.unshift(msg)
      this.setState({ messages: messages, msg: "" });
      console.log(messages.length + " " + (this.props.messages.length) - 1);
      return (this.props.OnSend(msg))

    }
  }

  renderItem = (item, index) => {
    //console.log(index + 1 + " " + JSON.stringify(item));
    return (<View style={{ scaleY: -1 }}>
      <ChatBubble
        userId={this.props.userId}
        item={item}
        index={index}
        key={item._id}
        prevItem={index + 1 < this.props.messages.length && this.props.messages[index + 1]}
        nextItem={index != 0 && this.props.messages[index - 1]}
        friendAvatar={this.props.friendAvatar}
        imageView={(url) => { console.log("handle it yourself p*ssy. " + url) }}
      />
    </View>)
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
          // ref={(ref) => { this.flatListRef = ref; }}
          onEndReachedThreshold={0.1}
          // onEndReached={this.onEndReached}
          ListEmptyComponent={this.renderChatEmpty}
          scrollEventThrottle={50}
          keyExtractor={(item) => { return item._id }}
          renderItem={({ item, index }) => this.renderItem(item, index)} />
        <Input onSend={(text) => this.send(text)}></Input>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },

  avatarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#075e54',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },

  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#97c163',
    padding: 10,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
  rightTxt: {
    fontSize: 15,
    color: '#202020',
    fontWeight: '600',
  },
}); 