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

    for (var i = 0; i < 10; i++) {
      let m = Math.random() < 0.2 ? Math.random() < 0.1 ? 0 : 2 : 1;
      this.state.messages.push({
        _id: Math.floor(Math.random() * 100000000) + 1,
        from: Math.random() < 0.5 ? "6101b5c6b24b3971dfb70805" : "Mohamed",
        text: i, //m==0? this.sentence(2) : this.sentence(20),
        type: Math.random() < 0.3 ? Math.random() < 0.5 ? 0 : 3 : 1,
        link: "https://www.youtube.com/watch?v=oRC1K7uUBZ8",
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
  image: {
    width,
    height,
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
  input: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: '#3d3d3d',
    margin: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor: '#696969',
    borderWidth: 1,
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
    shadowColor: '#3d3d3d',
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
    shadowColor: '#3d3d3d',
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