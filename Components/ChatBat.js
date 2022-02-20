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
        };





    }


    send() {

        if (this.state.msg.length > 0) {

            var messages = this.props.messages;
            var msg = {
                id: Math.floor(Math.random() * 100000000) + 1,
                user: Math.random() < 0.5 ? "Ahmed" : "Mohamed",
                msg: this.state.msg,
                type: 1,
                status: 2,
                createdAt: "20-20-2022:10:50:12",
                image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png'
            }
            messages.push(msg);
            this.setState({ messages: messages, msg: "" });
            console.log(messages.length + " " + (this.props.messages.length) - 1);

            this.flatListRef.scrollToIndex({ animated: true, index: messages.length - 2 });

            return (this.props.OnSend(msg))

        }


    }


    renderItem = ( item , index) => {
        console.log(index+1+" "+this.props.messages.length);
        return (<ChatBubble 
            userId="Ahmed" 
            item={item} 
            nextItem={index+1 < this.props.messages.length && this.props.messages[index+1]}
            prevItem={index !=0 && this.props.messages[index-1]} />)
    };

    render() {
        return (
            <View style={{ flex: 1 }}>

                <KeyboardAvoidingView behavior="height" style={styles.keyboard}>
                    <FlatList
                        style={{ backgroundColor: "#EFE5F6" }}
                        ref={this.props.forwardRef}
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
                        renderItem={({item, index}) => this.renderItem(item, index)} />
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