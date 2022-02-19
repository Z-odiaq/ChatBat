import React, { Component, createRef } from 'react';
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
import ChatBubble from './ChatBubble';

const { width, height } = Dimensions.get('window');
export default class ChatBat extends Component {

    constructor(props) {
        super(props);
        this.chatBatRef = createRef();

        this.state = {
            msg: '',
            messages: [],
            msgsLength: this.props.messages.length,
        };


        for (var i = 0; i < 100; i++) {
            this.state.messages.push({
                id: Math.floor(Math.random() * 100000000) + 1,
                User: Math.random() < 0.5 ? "Ahmed" : "Mohamed",
                msg: "hhhhhhhhhhhhhhhhhhhhhsdfqsdf",
                Type: 0,
                Status: 2,
                CreatedAt: "20-20-2022:10:50:12"
            })
        }


    }


    send() {
        if (this.state.msg.length > 0) {

            var msg = {
                id: Math.floor((Math.random() * 99999999999999999) + 1),
                sent: true,
                msg: this.state.msg,
                image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png'
            }
            this.setState({ msg: "" });
            this.flatListRef.scrollToIndex({ animated: true, index: this.state.msgsLength - 1 });
            return (this.props.OnSend(msg))

        }
    }


    renderItem = ({ item }) => {
        return (<ChatBubble userId="Ahmed" msg={item} />)
    };

    render() {
        return (
            <View style={{ flex: 1 }}>

                <KeyboardAvoidingView behavior="height" style={styles.keyboard}>
                    <FlatList
                        style={styles.list}
                        ref={this.props.forwardRef}
                        extraData={[this.props.extraData]}
                        extraData={this.state}
                        data={this.props.messages}
                        inverted={false}
                        onEndReached={this.onEndReached}
                        ref={(ref) => { this.flatListRef = ref; }}
                        onEndReachedThreshold={0.1}
                        onEndReached={this.onEndReached}
                        ListEmptyComponent={this.renderChatEmpty}
                        scrollEventThrottle={100}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={this.renderItem} />
                    <View style={{ flexDirection: "row", marginBottom: 20 }}>
                        <TextInput
                            style={{ flex: 1, backgroundColor: "#fff", color: "#000" }}
                            value={this.state.msg}
                            placeholderTextColor="#696969"
                            onChangeText={msg => this.setState({ msg })}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.send()}
                            placeholder="Type a message"
                            returnKeyType="send" />


                        <Button title='Send' onPress={() => this.send()}></Button>
                    </View>
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