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
      messages: [],

    };


    for (var i = 0; i < 20; i++) {
      this.state.messages.push({
        id: Math.floor(Math.random() * 100000000) + 1,
        user: Math.random() < 0.5 ? "Ahmed" : "Mohamed",
        msg: "hhh hhhhhhhhhh hhhhhhhh feqfzfs zefzr fsfaerg dgqergq ezgqrg sdfqsdf sdfqsdf",
        type: Math.random() < 0.2 ? Math.random() < 0.1? 0: 2 : 1 ,
        link: "https://picsum.photos/200/300?random="+Math.floor(Math.random() * 10),
        status: Math.random() < 0.3 ? Math.random() < 0.5? 0: 2 : 1 ,
        createdAt: "20-20-2022:10:50:12"
      })
    }



  }

  componentDidUpdate(prevProps = {}) {
    //setTimeout(() => this.scrollToBottom(false), 200);
  }


  send = (msg) => {

    console.log(JSON.stringify (msg));


  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="height" style={styles.keyboard}>
          <ChatBat
            messages={this.state.messages}
            friendAvatar={"https://www.bootdey.com/img/Content/avatar/avatar1.png"}
            user={"Ahmed"}
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