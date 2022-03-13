import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Linking,
    Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
const { width, height } = Dimensions.get('window');

export default class ChatBubble extends PureComponent {


    dateDifference(date2, date1) {
        const msPerDay = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        return Math.floor(24 * ((utc2 - utc1) / msPerDay));
    }

    renderAvatar() {
        return <Image source={{ uri: this.props.friendAvatar }} style={[styles.avatarStyle, this.props.avatarStyle]} />
    }

    getDate(dateCurr) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const today = new Date();
        const dateP = new Date(this.props.prevItem.createdAt)
        if (dateCurr.getHours() === today.getHours()) {
            return null
        }
        if (!this.props.prevItem || dateCurr.getFullYear() !== dateP.getFullYear()) {
            return (months[dateCurr.getMonth()] + " " + (dateCurr.getDate()) + ", " + dateCurr.getFullYear())
        }
        //same year diff month
        if (dateCurr.getMonth() !== dateP.getMonth()) {
            return (months[dateCurr.getMonth()] + ", " + (dateCurr.getDate()))
        }
        //same month diff day
        if (dateCurr.getDate() !== dateP.getDate() || dateCurr.getDate() !== dateP.getDate()) {
            return (days[dateCurr.getDay()] + ", " + dateCurr.getDate())
        }
        //same day diff hours
        if (dateCurr.getHours() !== dateP.getHours()) {
            //console.log(diff);
            return ((dateCurr.getHours() < 10 ? "0" + dateCurr.getHours() : dateCurr.getHours()) + ":" + (dateCurr.getMinutes() < 10 ? "0" + dateCurr.getMinutes() : dateCurr.getMinutes()))
        }
        return
    }


    getYTId(url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    }


    renderByType = () => {
        const pos = this.props.item.from === this.props.userId;
        const sameN = this.props.item.from === this.props.nextItem.from;
        const sameP = this.props.item.from === this.props.prevItem.from;
        const dateCurr = new Date(this.props.item.createdAt)
        const date = this.getDate(dateCurr);
        if (this.props.item.type === 1) {//type = text
            return (
                <View>
                    {date && <Text style={styles.date}>{date}</Text>}
                    <View style={pos ? null : [{ flexDirection: "row", alignItems: 'flex-end' }]}>
                        <View style={pos ?
                            (sameN ? sameP ? styles.rightBlockMid : styles.rightBlockUp : sameP ? styles.rightBlockDown : styles.rightBlockOnly) :
                            (sameN ? sameP ? styles.leftBlockMid : styles.leftBlockUp : sameP ? styles.leftBlockDown : styles.leftBlockOnly)}>
                            <View>
                                <Text style={pos ? styles.msgTxtRight : styles.msgTxtLeft}>{this.props.item.text}</Text>
                                <Text style={pos ? styles.timeRight : styles.timeLeft}>
                                    {(!this.props.nextItem.from && pos) ? this.props.item.status === 0 ? "🕒" : this.props.item.status === 1 ? "✓" : "✓✓" : null}
                                    {" " + (dateCurr.getHours() < 10 ? "0" + dateCurr.getHours() : dateCurr.getHours()) + ":" + (dateCurr.getMinutes() < 10 ? "0" + dateCurr.getMinutes() : dateCurr.getMinutes())}
                                </Text>
                            </View>
                        </View>
                    </View>
                    {!sameN && !pos && this.renderAvatar()}
                </View>
            )
        } else if (this.props.item.type === 2) { //type = image
            return (
                <View>
                    {date && <Text style={styles.date}>{date}</Text>}
                    <View style={pos ? null : [{ flexDirection: "row", alignItems: 'flex-end' }]}>
                        <TouchableOpacity onPress={() => { this.props.imageView(this.props.item.link) }} style={[pos ? styles.rightBlockOnly : ([styles.leftBlockOnly, sameN ? { marginLeft: 10 } : null]), { backgroundColor: null, padding: 0, paddingTop: 2 }]}>
                            <View>
                                <Image source={{ uri: this.props.item.link }} style={{ width: 200, height: 200, borderRadius: 5 }} />
                                <Text style={pos ? [styles.timeRight, { color: '#9A979F' }] : styles.timeLeft}>
                                    {(!this.props.nextItem.from && pos) ? this.props.item.status === 0 ? "🕒" : this.props.item.status === 1 ? "✓" : "✓✓" : null}
                                    {" " + (dateCurr.getHours() < 10 ? "0" + dateCurr.getHours() : dateCurr.getHours()) + ":" + (dateCurr.getMinutes() < 10 ? "0" + dateCurr.getMinutes() : dateCurr.getMinutes())}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {!sameN && !pos && this.renderAvatar()}
                </View>
            )
        } else if (this.props.item.type === 3) { //type == video
            return (
                <View>
                    {date && <Text style={styles.date}>{date}</Text>}
                    <View style={pos ? null : [{ flexDirection: "row", alignContent: "center", }]}>
                        <View style={{ backgroundColor: "" }}>
                            <View style={!pos ? { flex: 1, padding: 5 } : { flex: 1, margin: 5, alignSelf: "flex-end", padding: 5 }}>
                                <WebView
                                    style={{ flex: 1, height: height / 3, width: width / 1.5, }}
                                    renderLoading={() => { return this.displaySpinner(); }}
                                    javaScriptEnabled={true}
                                    source={{ uri: "https://www.youtube.com/embed/" + this.getYTId(this.props.item.text) }}
                                />
                                <Text style={pos ? [styles.timeRight, { color: '#9A979F' }] : styles.timeLeft}>
                                    {(!this.props.nextItem.from && pos) ? this.props.item.status === 0 ? "🕒" : this.props.item.status === 1 ? "✓" : "✓✓" : null}
                                    {" " + (dateCurr.getHours() < 10 ? "0" + dateCurr.getHours() : dateCurr.getHours()) + ":" + (dateCurr.getMinutes() < 10 ? "0" + dateCurr.getMinutes() : dateCurr.getMinutes())}
                                </Text>
                            </View>
                        </View>
                    </View>
                    {!pos && this.renderAvatar()}
                </View>
            )
        } else if (this.props.item.type === 4) { //link
            return (
                <View>
                    {date && <Text style={styles.date}>{date}</Text>}
                    <View style={pos ? null : [{ flexDirection: "row", alignItems: 'flex-end' }]}>
                        <View style={pos ?
                            (sameN ? sameP ? styles.rightBlockMid : styles.rightBlockUp : sameP ? styles.rightBlockDown : styles.rightBlockOnly) :
                            (sameN ? sameP ? styles.leftBlockMid : styles.leftBlockUp : sameP ? styles.leftBlockDown : styles.leftBlockOnly)}>
                            <View>
                                <Text onPress={() => Linking.openURL(this.props.item.text)}
                                    style={styles.msgLinkLeft}>{this.props.item.text}</Text>
                                <Text style={pos ? styles.timeRight : styles.timeLeft}>
                                    {(!this.props.nextItem.from && pos) ? this.props.item.status === 0 ? "🕒" : this.props.item.status === 1 ? "✓" : "✓✓" : null}
                                    {" " + (dateCurr.getHours() < 10 ? "0" + dateCurr.getHours() : dateCurr.getHours()) + ":" + (dateCurr.getMinutes() < 10 ? "0" + dateCurr.getMinutes() : dateCurr.getMinutes())}
                                </Text>
                            </View>
                        </View>

                    </View>
                    {!sameN && !pos && this.renderAvatar()}
                </View>
            )
        }
        else if (this.props.item.type === 0) { //type == server
            return (
                <View >
                    {date && <Text style={styles.date}>{date}</Text>}
                    <View style={styles.midBlock}>
                        <Text style={{ fontSize: 14, color: "#808080", textAlign: "center" }}>{this.props.item.text}</Text>
                    </View>
                </View>)
        }
    }

    render() {
        return (
            <View style={{ scaleY: -1 }} >
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
    avatarStyle: {
        marginLeft: 6,
        marginBottom:4,
        width: 30,
        height: 30,
        borderRadius: 20,
    },
    midBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        maxWidth: "75%",
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    rightBlockUp: {
        borderRadius: 10,
        borderBottomRightRadius: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 5,
        marginBottom: 2,
        alignSelf: 'flex-end',
        maxWidth: "70%",
        backgroundColor: '#9C4AD5',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    rightBlockMid: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        maxWidth: "70%",
        marginRight: 5,
        marginBottom: 2,
        backgroundColor: '#9C4AD5',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: { height: 1, },
    },
    rightBlockDown: {
        borderRadius: 10,
        borderBottomRightRadius: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 5,
        marginBottom: 2,
        alignSelf: 'flex-end',
        maxWidth: "70%",
        backgroundColor: '#9C4AD5',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    rightBlockOnly: {
        borderRadius: 10,
        borderBottomRightRadius: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 5,
        marginBottom: 10,
        alignSelf: 'flex-end',
        maxWidth: "70%",
        backgroundColor: '#9C4AD5',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    leftBlockUp: {
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 10,
        marginBottom: 2,
        maxWidth: "60%",
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    leftBlockMid: {
        marginBottom: 2,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        maxWidth: "60%",
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    leftBlockDown: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 10,
        marginBottom: 10,

        maxWidth: "60%",
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    leftBlockOnly: {
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 10,
        marginBottom: 10,
        maxWidth: "60%",
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    msgTxtRight: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    msgTxtLeft: {
        fontSize: 16,
        color: '#9A979F',
        fontWeight: '600',
    },
    msgLinkLeft: {
        fontSize: 16,
        color: "#00BFFF",
        textDecorationLine: "underline",
        fontWeight: '600',
    },
    timeLeft: {
        fontSize: 10,
        color: '#9A979F',
        marginBottom: -4,
        marginRight: -4,
        marginTop: 2,
        textAlign: "right",
        fontWeight: '600',
    },
    timeRight: {
        fontSize: 10,
        color: '#fff',
        marginBottom: -4,
        marginRight: -4,
        marginTop: -2,
        textAlign: "right",
        fontWeight: '600',
    },
    date: {
        fontSize: 12,
        color: "#808080",
        textAlign: "center",
        margin: 4
    }

}); 