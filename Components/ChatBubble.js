import React, { Component } from 'react';
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
const { width, height } = Dimensions.get('window');

export default class ChatBubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderAvatar() {
        return (<Image source={{ uri: this.props.friendAvatar }} style={[styles.avatarStyle, this.props.avatarStyle]} />);
    }


    renderByType = () => {
        const pos = this.props.msg.User === this.props.userId;
        if (this.props.msg.Type === 1) {//type = text
            return (<View>
                <View style={pos ? styles.rightMsg : styles.eachMsg}>
                    <View style={pos ? styles.rightBlock : styles.msgBlock}>
                        <Text style={styles.msgTxt}>{this.props.msg.msg}</Text>
                    </View>
                </View>
            </View>)
        } else if (this.props.msg.Type === 2) { //type = image
            return (<View>
                <View style={pos ? styles.rightMsg : styles.eachMsg}>
                    <View style={pos ? styles.rightBlock : styles.msgBlock}>
                        <Text style={styles.msgTxt}>{this.props.msg.msg}</Text>
                    </View>
                </View>
            </View>)
        } else if (this.props.msg.Type === 3) { //type == video
            return (<View>
                <View style={pos ? styles.rightMsg : styles.eachMsg}>
                    <View style={pos ? styles.rightBlock : styles.msgBlock}>
                        <Text style={styles.msgTxt}>{this.props.msg.msg}</Text>
                    </View>
                </View>
            </View>)
        } else if (this.props.msg.Type === 3) { //type == server
            return (<View>
                <View style={pos ? styles.rightMsg : styles.eachMsg}>
                    <View style={pos ? styles.rightBlock : styles.msgBlock}>
                        <Text style={styles.msgTxt}>{this.props.msg.msg}</Text>
                    </View>
                </View>
            </View>)
        }
    }

    render() {
        return (
            <View>
                {this.renderByType()}
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