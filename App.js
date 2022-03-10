import React, { Component, createRef, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import ChatBat from './Components/ChatBat';

const { width, height } = Dimensions.get('window');
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.chatBatRef = React.createRef();
    this.state = {
      msg: '',
      messsages: [

        {
          "system": false,
          "status": 0,
          "_id": "620d612358c088297464e677",
          "from": "610182b837c05541b8f7c457",
          "link": "https://www.youtube.com/embed/oRC1K7uUBZ8",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "egergergeeruiyui",
          "type": 3,
          "createdAt": "2015-06-16T20:40:03.410Z",
          "updatedAt": "2022-02-16T20:40:03.410Z",
          "__v": 0
        },
        {
          "system": false,
          "status": 0,
          "_id": "620d60d958c088297464e676",
          "from": "610182b837c05541b8f7c457",
          "link": "",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "22",
          "type": 1,
          "createdAt": "2016-02-16T20:38:49.997Z",
          "updatedAt": "2022-02-16T20:38:49.997Z",
          "__v": 0
        },
        {
          "system": false,
          "status": 0,
          "_id": "620930db63b88510045a1959",
          "from": "610182b837c05541b8f7c457",
          "link": "",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "ghghgh",
          "type": 2,
          "link": "https://picsum.photos/200/300?random=" + Math.floor(Math.random() * 10),
          "createdAt": "2022-03-13T16:24:59.375Z",
          "updatedAt": "2022-02-13T16:24:59.375Z",
          "__v": 0
        },
        {
          "system": false,
          "status": 0,
          "_id": "620930d963b88510045a1958",
          "from": "610182b837c05541b8f7c457",
          "link": "",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "hghghgh",
          "type": 1,
          "createdAt": "2022-03-13T16:24:57.544Z",
          "updatedAt": "2022-02-13T16:24:57.544Z",
          "__v": 0
        },
        {
          "system": false,
          "status": 0,
          "_id": "620930d763b88510045a1957",
          "from": "610182b837c05541b8f7c457",
          "link": "",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "hghgh",
          "type": 1,
          "createdAt": "2022-04-13T16:24:55.209Z",
          "updatedAt": "2022-02-13T16:24:55.209Z",
          "__v": 0
        },
        {
          "system": false,
          "status": 0,
          "_id": "62092cc163b88510045a1955",
          "from": "610182b837c05541b8f7c457",
          "link": "",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "dsdsdsdsd",
          "type": 1,
          "createdAt": "2022-05-13T16:07:29.992Z",
          "updatedAt": "2022-02-13T16:07:29.992Z",
          "__v": 0
        },
        {
          "system": false,
          "status": 0,
          "_id": "62092cc163b8q510045a1955",
          "from": "610182b837c05541b8f7c457",
          "link": "",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "dsdsdsdsd",
          "type": 1,
          "createdAt": "2022-05-15T16:07:29.992Z",
          "updatedAt": "2022-02-13T16:07:29.992Z",
          "__v": 0
        },
        {
          "system": false,
          "status": 0,
          "_id": "62092cc163bss510045a1955",
          "from": "610182b837c05541b8f7c457",
          "link": "",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "dsdsdsdsd",
          "type": 1,
          "createdAt": "2022-05-16T16:07:29.992Z",
          "updatedAt": "2022-02-13T16:07:29.992Z",
          "__v": 0
        },
        {
          "system": false,
          "status": 0,
          "_id": "62092cc163bss510ss5a1955",
          "from": "610182b837c05541b8f7c457",
          "link": "",
          "conversationId": "6123e75a39a7ed3b3c2c325f",
          "text": "dsdsdsdsd",
          "type": 1,
          "createdAt": "2022-05-16T18:07:29.992Z",
          "updatedAt": "2022-02-13T16:07:29.992Z",
          "__v": 0
        }
      ],
      messages: [],

    };
    let links = ["youtube.com", "www.blogger.com", "www.google.com", "microsoft.com	", "support.google.com"];
    let vids = ["oRC1K7uUBZ8", "TWJVgTeNljs", "66VnOdk6oto", "3YxaaGgTQYM", "DMAaLIIRB38", "EZzbh9YjVhQ"];
    for (var i = 0; i < 100; i++) {
      let m = Math.random() < 0.5 ? Math.random() < 0.6 ? Math.random() < 0.7 ? Math.random() < 0.8 ? 4 : 0 : 3 : 1 : 2
      this.state.messages.push({
        _id: Math.floor(Math.random() * 100000000) + 1,
        from: Math.random() < 0.5 ? "6101b5c6b24b3971dfb70805" : "Mohamed",
        text: m == 0 ? this.sentence(2) : m == 4 ? links[Math.floor(Math.random() * 4)] : m == 1 ? this.sentence(10) : m == 3 ? "https://www.youtube.com/watch?v="+vids[Math.floor(Math.random() * 5)] : null,

        type: m,
        link: "https://picsum.photos/200/300?random=" + vids[Math.floor(Math.random() * 10)],
        status: Math.random() < 0.3 ? Math.random() < 0.5 ? 0 : 2 : 1,
        createdAt: new Date((new Date()) - Math.floor(Math.random() * 10000000000 + 1)).toISOString()
      })
    }
    console.log(this.state.messages.length)

  }





  sentence(m) {
    const words = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi", "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];
    const count = Math.round(Math.abs(20) * 1 + m);
    var result = [];
    while (result.length < count) {
      var pos = Math.floor(Math.random() * words.length);
      var rnd = words[pos];
      result.push(rnd);
    }
    // console.log(result);
    return result.join(' ');

  }

  componentDidUpdate(prevProps = {}) {
    //setTimeout(() => this.scrollToBottom(false), 200);
  }


  send = (msg) => {

    console.log(JSON.stringify(msg));


  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="height" style={styles.keyboard}>
          <ChatBat
            messages={this.state.messages.reverse()}
            friendAvatar={"https://www.bootdey.com/img/Content/avatar/avatar1.png"}
            userId={"6101b5c6b24b3971dfb70805"}
            OnSend={(msg) => this.send(msg)}
          />

        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
}); 