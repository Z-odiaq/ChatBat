import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onSend = () => {
        this.props.onSend(this.state.text)
    };

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", alignContent: "space-around" }}>
                <Button title='Send' onPress={this.onSend} style={{ color: "yellow" }}></Button>
                <TextInput
                    style={{ height: 40, width: "80%" }}
                    placeholder="Type here to translate!"
                    onChangeText={newText => this.setState({ text: newText })}
                />
            </View>
        );
    }
}
