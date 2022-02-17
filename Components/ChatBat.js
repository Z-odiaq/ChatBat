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
            messages: [{
                key: 45645646,
                User: "Mohamed",
                Message: "hhhhhhhhhhhhhhhhhhhhhsdfqsdf",
                Type: 0,
                Status: 2,
                CreatedAt: "20-20-2022:10:50:12"
            },
            {
                key: 456545646,
                User: "Mohamed",
                Message: "hhhhhhhhhhhhhhhhhhhhhsdfqsdf",
                Type: 0,
                Status: 2,
                CreatedAt: "20-20-2022:10:50:12"
            },
            {
                key: 456745646,
                User: "Mohamed",
                Message: "hhhhhhhhhhhhhhhhhhhhhsdfqsdf",
                Type: 0,
                Status: 2,
                CreatedAt: "20-20-2022:10:50:12"
            }]
        };
    }

    componentDidMount() {
        var temp = [];

        console.log("temp generated " + this.state.messages.length + " objects.");
    }


    onSend = (msg) => {
        console.log(msg);
    };


    renderItem = (item) => { return <Text style={{color:"#fff", fontSize:24}}>{item.Message}</Text> }




    render() {
        return (

            <View >

                <FlatList
                    data={this.state.messages}
                    renderItem={({ item }) => <Text>{item.message}</Text>}

                    keyExtractor={item => item.key}
                />

<Button title='eeeeeeee'></Button>
            </View>

        );
    }
}
