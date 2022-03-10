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
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
    }
    componentWillUnmount() {
    }

    dateDifference(date2, date1) {
        const msPerDay = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
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
        const dateN = new Date(this.props.nextItem.createdAt)

        // console.log(dateCurr.getFullYear() + "-" + dateCurr.getMonth() + "-" + dateCurr.getDate() + " " + dateCurr.getHours() + ":" + dateCurr.getMinutes() + " " + pos);

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
        // console.log(this.props.item.from === this.props.userId)
        const status = !pos && this.props.item.status === !pos && this.props.item.status;
        console.log(this.props.item.type);
        const sameN = this.props.item.from === this.props.nextItem.from;
        const sameP = this.props.item.from === this.props.prevItem.from;
        const dateCurr = new Date(this.props.item.createdAt)
        const date = this.getDate(dateCurr);

        if (this.props.item.type === 1) {//type = text
            return (
                <View key={this.props.item.key}>
                    {date && <Text style={{ fontSize: 12, color: "#808080", textAlign: "center" }}>{date}</Text>}

                    <View style={pos ? null : [{ flexDirection: "row", alignItems: 'flex-end' }]}>
                        {!sameN && !pos && this.renderAvatar()}
                        <View onPress={() => { textshow = !textshow; console.log(textshow) }} style={pos ?
                            (sameN ? sameP ? styles.rightBlockMid : styles.rightBlockUp : sameP ? styles.rightBlockDown : styles.rightBlockOnly) :
                            (sameN ? sameP ? styles.leftBlockMid : styles.leftBlockUp : sameP ? styles.leftBlockDown : styles.leftBlockOnly)}>
                            <View>
                                <Text style={pos ? styles.msgTxtRight : styles.msgTxtLeft}>{this.props.item.text}</Text>
                                <Text style={pos ? styles.timeRight : styles.timeLeft}>
                                    {(!this.props.nextItem.from && pos) ? this.props.item.status === 0 ? "🕒" : this.props.item.status === 1 ? "✓" : "✓✓" : null}
                                    {"  " + dateCurr.getHours() + ":" + dateCurr.getMinutes()}
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            )
        } else if (this.props.item.type === 2) { //type = image
            return (
                <View key={this.props.item.key} style={pos ? null : [{ flexDirection: "row", alignItems: 'flex-end' }]}>
                    {!sameN && !pos && this.renderAvatar()}
                    <TouchableOpacity onPress={() => { this.props.imageView(this.props.item.link) }} style={[pos ? styles.rightBlockOnly : ([styles.leftBlockOnly, sameN ? { marginLeft: 50 } : null]),{backgroundColor:null}]}>
                        <View>
                            <Image source={{ uri: this.props.item.link }} style={{ width: 200, height: 200, borderRadius: 5 }} />
                            <Text style={pos ? [styles.timeRight, {color:'#9A979F'}] : styles.timeLeft}>
                                {(!this.props.nextItem.from && pos) ? this.props.item.status === 0 ? "🕒" : this.props.item.status === 1 ? "✓" : "✓✓" : null}
                                {"  " + dateCurr.getHours() + ":" + dateCurr.getMinutes()}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else if (this.props.item.type === 3) { //type == video
            return (

                <View key={this.props.item.key}>
                    {date && <Text style={{ fontSize: 12, color: "#808080", textAlign: "center" }}>{date}</Text>}
                    <Text>haha</Text>

                    <View style={pos ? null : [{ flexDirection: "row", alignContent: "center", }]}>

                        {!pos && this.renderAvatar()}
                        <View style={{ backgroundColor: "" }}>
                            <View style={!pos ?
                                { flex: 1, padding: 10} :
                                { flex: 1, margin: 5, alignSelf: "flex-end", padding: 10 }}>
                                <WebView
                                    style={{ flex: 1, height: height / 3, width: width / 1.5, }}
                                    renderLoading={() => {
                                        return this.displaySpinner();
                                    }}
                                    javaScriptEnabled={true}
                                    source={{
                                        uri: "https://www.youtube.com/embed/"+this.getYTId(this.props.item.text)
                                    }}
                                />
                                <Text style={pos ? [styles.timeRight, {color:'#9A979F'}]: styles.timeLeft}>
                                    {(!this.props.nextItem.from && pos) ? this.props.item.status === 0 ? "🕒" : this.props.item.status === 1 ? "✓" : "✓✓" : null}
                                    { dateCurr.getHours() + ":" + dateCurr.getMinutes()}
                                </Text>
                            </View>

                        </View>

                    </View>
                </View>
            )
        } else if(this.props.item.type === 4){ //link
            return (
                <View key={this.props.item.key}>
                    {date && <Text style={{ fontSize: 12, color: "#808080", textAlign: "center" }}>{date}</Text>}

                    <View style={pos ? null : [{ flexDirection: "row", alignItems: 'flex-end' }]}>
                        {!sameN && !pos && this.renderAvatar()}
                        <View onPress={() => { textshow = !textshow; console.log(textshow) }} style={pos ?
                            (sameN ? sameP ? styles.rightBlockMid : styles.rightBlockUp : sameP ? styles.rightBlockDown : styles.rightBlockOnly) :
                            (sameN ? sameP ? styles.leftBlockMid : styles.leftBlockUp : sameP ? styles.leftBlockDown : styles.leftBlockOnly)}>
                            <View>
                                <Text onPress={() => Linking.openURL(this.props.item.text)} 
                                style={styles.msgLinkLeft}>{this.props.item.text}</Text>
                                <Text style={pos ? styles.timeRight : styles.timeLeft}>
                                    {(!this.props.nextItem.from && pos) ? this.props.item.status === 0 ? "🕒" : this.props.item.status === 1 ? "✓" : "✓✓" : null}
                                    {"  " + dateCurr.getHours() + ":" + dateCurr.getMinutes()}
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            )
        }
         else if (this.props.item.type === 0) { //type == server
            return (
                <View key={this.props.item.key}>
                        <View style={styles.midBlock}>
                            <Text style={{ fontSize: 14, color: "#808080", textAlign: "center" }}>{this.props.item.text}</Text>
                        </View>
                </View>)
        }
    }

    render() {
        return (
            <View key={this.props.item.key}>

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
    ImageRightBlock: {
        borderRadius: 10,

        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
        alignSelf: 'flex-end',
        backgroundColor: '#9C4AD5',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    ImageLeftBlock: {

        borderRadius: 10,

        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
        marginLeft: 50,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    avatarStyle: {
        margin: 4,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignSelf:"flex-end"
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
    eachMsg: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 5,
    },
    midMsg: {
        alignItems: 'center',
        alignSelf: 'center',
    },
ghtBlockUp: {

        borderRadius: 10,

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
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 5,
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
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 50,
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
        marginLeft: 50,
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
        marginLeft: 2,
        marginBottom: 10,

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
    leftBlockOnly: {

        borderRadius: 10,

        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 2,
        maxWidth: "60%",
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },


    msgTxtRightStatus: {
        fontSize: 8,

        marginBottom: 1,
        color: '#1DA1F2',
        fontWeight: '600',
        position: "absolute",
        right: ".5%"

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
        color:"#00BFFF",
        textDecorationLine:"underline",
        fontWeight: '600',
    },
    timeLeft: {
        fontSize: 10,
        color: '#9A979F',
        marginBottom: -8,
        marginRight: -4,
        marginTop: 2,
        textAlign: "right",
        fontWeight: '600',
    },
    timeRight: {
        fontSize: 10,
        color: '#fff',
        marginBottom: -8,
        marginRight: -4,
        marginTop: -2,
        textAlign: "right",
        fontWeight: '600',
    },

}); 