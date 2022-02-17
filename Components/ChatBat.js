import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView, Button } from 'react-native';
import Input from "./Input";
import Message from './Message';
import Renderer from "./Renderer";

export default class ChatBat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageToSend: {},
            messages: []
        };
        for (var i = 0; i < 100; i++) {
            this.state.messages.push({
                key: Math.floor(Math.random() * 100000000) + 1,
                User: "Mohamed",
                Message: "hhhhhhhhhhhhhhhhhhhhhsdfqsdf",
                Type: 0,
                Status: 2,
                CreatedAt: "20-20-2022:10:50:12"
            })
        }
    }

    componentDidMount() {
        console.log("temp generated " + this.state.messages.length + " objects.");
    }


    onSend = (msg) => {
        this.state.messages.push({
            key: Math.floor(Math.random() * 100000000) + 1,
            User: "Mohamed",
            Message: msg,
            Type: 0,
            Status: 2,
            CreatedAt: "20-20-2022:10:50:12"
        })
    };



    renderItem = (item) => { return <View style={{padding:4}}><Message item={item} ></Message></View>}



    render() {
        return (

            <View >

                <FlatList
                    data={this.state.messages}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.key}
                />
                <Input onSend={msg=>this.onSend(msg)}></Input>
            </View>

        );
    }
}
