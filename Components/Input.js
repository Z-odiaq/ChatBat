import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onSend = () => {
        this.props.onSend(this.state.text)
        this.setState({ text :""})
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="height">
                <View style={{ flexDirection: "row", alignContent: "space-around", backgroundColor: "#eeeeee", alignItems: "center", height:60, }}>
                    <TextInput
                        style={{
                            flex: 1, backgroundColor: "#fff", color: "#000", borderWidth: 1,
                            borderColor: "#fff", borderRadius: 30, paddingLeft:15, margin: 8, 
                        }}
                        value={this.state.text}
                        placeholderTextColor="#696969"
                        onChangeText={text => this.setState({ text })}
                        blurOnSubmit={false}
                        placeholder="Type a message"
                        returnKeyType="send" />
                    <TouchableOpacity
                        style={{
                            marginRight: 5, padding:8,
                             backgroundColor: "#00BFFF", borderRadius: 15, borderColor: "#fff", borderWidth: 1
                        }}
                        onPress={() => this.onSend()}>
                        <Text style={{ fontSize: 16, color:"#fff", textAlignVertical:"center" }}>Send</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        );
    }
}
