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
      messages: [
        
          {
              "system": false,
              "status": 0,
              "_id": "620d612358c088297464e677",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "egergergeeruiyui",
              "type": 1,
              "createdAt": "2022-02-16T20:40:03.410Z",
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
              "createdAt": "2022-02-16T20:38:49.997Z",
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
              "type": 1,
              "createdAt": "2022-02-13T16:24:59.375Z",
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
              "createdAt": "2022-02-13T16:24:57.544Z",
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
              "createdAt": "2022-02-13T16:24:55.209Z",
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
              "createdAt": "2022-02-13T16:07:29.992Z",
              "updatedAt": "2022-02-13T16:07:29.992Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "62092cb663b88510045a1954",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "sdsdsd",
              "type": 1,
              "createdAt": "2022-02-13T16:07:18.276Z",
              "updatedAt": "2022-02-13T16:07:18.276Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208f40b63b88510045a1951",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "😂 😂",
              "type": 1,
              "createdAt": "2022-02-13T12:05:31.638Z",
              "updatedAt": "2022-02-13T12:05:31.638Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208f35563b88510045a194e",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "999",
              "type": 1,
              "createdAt": "2022-02-13T12:02:29.908Z",
              "updatedAt": "2022-02-13T12:02:29.908Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208f34c63b88510045a194d",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Oo",
              "type": 1,
              "createdAt": "2022-02-13T12:02:20.158Z",
              "updatedAt": "2022-02-13T12:02:20.158Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208f30c63b88510045a194a",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "😂 😂",
              "type": 1,
              "createdAt": "2022-02-13T12:01:16.129Z",
              "updatedAt": "2022-02-13T12:01:16.129Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208f2f463b88510045a1948",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "😂",
              "type": 1,
              "createdAt": "2022-02-13T12:00:52.245Z",
              "updatedAt": "2022-02-13T12:00:52.245Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208f25763b88510045a1946",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "😂 😂 🤣",
              "type": 1,
              "createdAt": "2022-02-13T11:58:15.746Z",
              "updatedAt": "2022-02-13T11:58:15.746Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208f15963b88510045a1945",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "😂 😂",
              "type": 1,
              "createdAt": "2022-02-13T11:54:01.077Z",
              "updatedAt": "2022-02-13T11:54:01.077Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208edc763b88510045a1944",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Tyjh",
              "type": 1,
              "createdAt": "2022-02-13T11:38:48.000Z",
              "updatedAt": "2022-02-13T11:38:48.000Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208edbe63b88510045a1942",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Yessds",
              "type": 1,
              "createdAt": "2022-02-13T11:38:38.758Z",
              "updatedAt": "2022-02-13T11:38:38.758Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208edb963b88510045a1941",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Ooo",
              "type": 1,
              "createdAt": "2022-02-13T11:38:33.690Z",
              "updatedAt": "2022-02-13T11:38:33.690Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208eda663b88510045a1940",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "😂",
              "type": 1,
              "createdAt": "2022-02-13T11:38:14.951Z",
              "updatedAt": "2022-02-13T11:38:14.951Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208eda363b88510045a193f",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "L",
              "type": 1,
              "createdAt": "2022-02-13T11:38:11.032Z",
              "updatedAt": "2022-02-13T11:38:11.032Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208ed7b63b88510045a193d",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Hhg",
              "type": 1,
              "createdAt": "2022-02-13T11:37:31.996Z",
              "updatedAt": "2022-02-13T11:37:31.996Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208ed1063b88510045a193b",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "www",
              "type": 1,
              "createdAt": "2022-02-13T11:35:44.679Z",
              "updatedAt": "2022-02-13T11:35:44.679Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208ed0c63b88510045a193a",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "cxcxc",
              "type": 1,
              "createdAt": "2022-02-13T11:35:40.429Z",
              "updatedAt": "2022-02-13T11:35:40.429Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208ed0963b88510045a1939",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "xcxc",
              "type": 1,
              "createdAt": "2022-02-13T11:35:37.260Z",
              "updatedAt": "2022-02-13T11:35:37.260Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208ec7363b88510045a1936",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "sdsdsd",
              "type": 1,
              "createdAt": "2022-02-13T11:33:07.647Z",
              "updatedAt": "2022-02-13T11:33:07.647Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208ec2c63b88510045a1934",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "gfgfg",
              "type": 1,
              "createdAt": "2022-02-13T11:31:56.040Z",
              "updatedAt": "2022-02-13T11:31:56.040Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208ebb063b88510045a1931",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Yyyy",
              "type": 1,
              "createdAt": "2022-02-13T11:29:52.256Z",
              "updatedAt": "2022-02-13T11:29:52.256Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e9f763b88510045a192e",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "hey",
              "type": 1,
              "createdAt": "2022-02-13T11:22:31.835Z",
              "updatedAt": "2022-02-13T11:22:31.835Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e9f163b88510045a192d",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "sds",
              "type": 1,
              "createdAt": "2022-02-13T11:22:25.651Z",
              "updatedAt": "2022-02-13T11:22:25.651Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e95b63b88510045a192a",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "lmlm",
              "type": 1,
              "createdAt": "2022-02-13T11:19:55.889Z",
              "updatedAt": "2022-02-13T11:19:55.889Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e90663b88510045a1927",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Hello",
              "type": 1,
              "createdAt": "2022-02-13T11:18:30.712Z",
              "updatedAt": "2022-02-13T11:18:30.712Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e8fb63b88510045a1925",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Oo",
              "type": 1,
              "createdAt": "2022-02-13T11:18:19.551Z",
              "updatedAt": "2022-02-13T11:18:19.551Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e8f363b88510045a1924",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "H",
              "type": 1,
              "createdAt": "2022-02-13T11:18:11.461Z",
              "updatedAt": "2022-02-13T11:18:11.461Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e78163b88510045a1922",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Chbih bta",
              "type": 1,
              "createdAt": "2022-02-13T11:12:01.737Z",
              "updatedAt": "2022-02-13T11:12:01.737Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e77763b88510045a1921",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "😂",
              "type": 1,
              "createdAt": "2022-02-13T11:11:51.929Z",
              "updatedAt": "2022-02-13T11:11:51.929Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e76d63b88510045a191f",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Ii",
              "type": 1,
              "createdAt": "2022-02-13T11:11:41.513Z",
              "updatedAt": "2022-02-13T11:11:41.513Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e6ae63b88510045a191d",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Hey",
              "type": 1,
              "createdAt": "2022-02-13T11:08:30.097Z",
              "updatedAt": "2022-02-13T11:08:30.097Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e69f63b88510045a191b",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Hey",
              "type": 1,
              "createdAt": "2022-02-13T11:08:15.737Z",
              "updatedAt": "2022-02-13T11:08:15.737Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e63963b88510045a1919",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Bb",
              "type": 1,
              "createdAt": "2022-02-13T11:06:33.941Z",
              "updatedAt": "2022-02-13T11:06:33.941Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e5f263b88510045a1916",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "fdfdf",
              "type": 1,
              "createdAt": "2022-02-13T11:05:22.480Z",
              "updatedAt": "2022-02-13T11:05:22.480Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e5d863b88510045a1913",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "jkjkjk",
              "type": 1,
              "createdAt": "2022-02-13T11:04:56.736Z",
              "updatedAt": "2022-02-13T11:04:56.736Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e4d863b88510045a1910",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "333666",
              "type": 1,
              "createdAt": "2022-02-13T11:00:40.794Z",
              "updatedAt": "2022-02-13T11:00:40.794Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e4d663b88510045a190f",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "333",
              "type": 1,
              "createdAt": "2022-02-13T11:00:38.345Z",
              "updatedAt": "2022-02-13T11:00:38.345Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e4d263b88510045a190e",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "3333",
              "type": 1,
              "createdAt": "2022-02-13T11:00:34.506Z",
              "updatedAt": "2022-02-13T11:00:34.506Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e44963b88510045a190a",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "121212121212121",
              "type": 1,
              "createdAt": "2022-02-13T10:58:17.482Z",
              "updatedAt": "2022-02-13T10:58:17.482Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e44563b88510045a1909",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "121212121",
              "type": 1,
              "createdAt": "2022-02-13T10:58:13.439Z",
              "updatedAt": "2022-02-13T10:58:13.439Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e44163b88510045a1908",
              "from": "610182b837c05541b8f7c457",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "122",
              "type": 1,
              "createdAt": "2022-02-13T10:58:09.377Z",
              "updatedAt": "2022-02-13T10:58:09.377Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e36363b88510045a1906",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Hjk",
              "type": 1,
              "createdAt": "2022-02-13T10:54:27.367Z",
              "updatedAt": "2022-02-13T10:54:27.367Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e35f63b88510045a1905",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Hk",
              "type": 1,
              "createdAt": "2022-02-13T10:54:23.124Z",
              "updatedAt": "2022-02-13T10:54:23.124Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e35a63b88510045a1904",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "K",
              "type": 1,
              "createdAt": "2022-02-13T10:54:18.165Z",
              "updatedAt": "2022-02-13T10:54:18.165Z",
              "__v": 0
          },
          {
              "system": false,
              "status": 0,
              "_id": "6208e2fb63b88510045a1902",
              "from": "6101b5c6b24b3971dfb70805",
              "link": "",
              "conversationId": "6123e75a39a7ed3b3c2c325f",
              "text": "Juu",
              "type": 1,
              "createdAt": "2022-02-13T10:52:43.355Z",
              "updatedAt": "2022-02-13T10:52:43.355Z",
              "__v": 0
          }
      
      ],

    };

const dates = ["2021-11-21T16:29:47.583Z","2021-11-21T16:30:47.583Z","2022-10-21T16:28:47.583Z","2021-11-21T16:28:47.583Z","2021-11-21T16:28:47.583Z","2021-11-21T16:50:47.583Z","2021-11-21T16:28:47.583Z","2021-11-21T18:28:47.583Z"]
   /* for (var i = 0; i < 10; i++) {
     let m = Math.random() < 0.2 ? Math.random() < 0.1 ? 0 : 2 : 1;
      this.state.messages.push({
        id: Math.floor(Math.random() * 100000000) + 1,
        user: Math.random() < 0.5 ? "Ahmed" : "Mohamed",
        msg: i, //m==0? this.sentence(2) : this.sentence(20),
        type: 1 ,
        link: "https://picsum.photos/200/300?random=" + Math.floor(Math.random() * 10),
        status: Math.random() < 0.3 ? Math.random() < 0.5 ? 0 : 2 : 1,
        createdAt:new Date((new Date()) - Math.floor(Math.random()*10000000000)).toISOString()
      })
    }*/
console.log(this.state.messages.length)

  }


   sentence (m) {
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