import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class ChatBubble extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };

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

    getWeek() {
        return <Image source={{ uri: this.props.friendAvatar }} style={[styles.avatarStyle, this.props.avatarStyle]} />
    }

    getTime() {
        return <Image source={{ uri: this.props.friendAvatar }} style={[styles.avatarStyle, this.props.avatarStyle]} />
    }


    renderByType = () => {
        const pos = this.props.item.from === this.props.userId;
        // console.log(this.props.item.from === this.props.userId)
        const status = !pos && this.props.item.status === !pos && this.props.item.status;

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
                                    {!this.props.nextItem.from && pos && this.props.item.status === 0 && "\n🕒"}
                                    {!this.props.nextItem.from && pos && this.props.item.status === 1 && "\n✓"}
                                    {!this.props.nextItem.from && pos && this.props.item.status === 2 && "\n✓✓"}
                                    {dateCurr.getHours() + ":" + dateCurr.getMinutes()}
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
                    <TouchableOpacity onPress={() => { this.props.imageView(this.props.item.link) }} style={pos ? styles.rightBlockOnly : ([styles.leftBlockOnly, sameN ? { marginLeft: 65 } : null])}>
                        <Image source={{ uri: this.props.item.link }} style={{ width: 200, height: 200, borderRadius: 5 }} />
                        <Text style={pos ? styles.msgTxtRightStatus : styles.msgTxtLeftStatus}>
                            {pos && this.props.item.status === 0 && "\n⏳"}
                            {pos && this.props.item.status === 1 && "\n✓"}
                            {pos && this.props.item.status === 2 && "\n✓✓"}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        } else if (this.props.item.type === 3) { //type == video
            return (
                <View key={this.props.item.key}>
                    <View style={pos ? styles.rightMsg : styles.eachMsg}>
                        <View style={pos ? ([styles.rightBlock, { borderRadius: 15, }]) : styles.msgBlock}>
                            <Text style={pos ? styles.msgTxtRight : styles.msgTxtLeft}>{this.props.item.msg}</Text>
                            <Text style={pos ? styles.msgTxtRightStatus : styles.msgTxtLeftStatus}>
                                {!pos && this.props.item.status === 0 && "\n⏳"}
                                {!pos && this.props.item.status === 1 && "\n✓"}
                                {!pos && this.props.item.status === 2 && "\n✓✓"}
                            </Text>
                        </View>
                    </View>
                </View>)
        } else if (this.props.item.type === 0) { //type == server
            return (
                <View key={this.props.item.key}>
                    <View style={styles.midMsg}>
                        <View style={styles.midBlock}>
                            <Text style={{ fontSize: 14, color: "#808080", textAlign: "center" }}>{this.props.item.msg}</Text>
                            <Text style={pos ? styles.msgTxtRightStatus : styles.msgTxtLeftStatus}>
                                {!pos && this.props.item.status === 0 && "\n⏳"}
                                {!pos && this.props.item.status === 1 && "\n✓"}
                                {!pos && this.props.item.status === 2 && "\n✓✓"}
                            </Text>
                        </View>
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
        borderBottomRightRadius: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
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

        borderBottomLeftRadius: 0,
        borderTopLefttRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
        marginLeft: 65,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    avatarStyle: {
        margin: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    midBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        maxWidth: "75%",
        backgroundColor: '#F5F5F5',
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
    msgBlock: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 5,
        maxWidth: "60%",
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    rightMsg: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: 5,
        alignSelf: 'flex-end',
    },
    rightBlockUp: {

        borderBottomRightRadius: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
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

        borderBottomRightRadius: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        maxWidth: "70%",
        marginRight: 5,
        marginBottom: 5,
        backgroundColor: '#9C4AD5',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: { height: 1, },
    },
    rightBlockDown: {

        borderBottomRightRadius: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 5,
        marginBottom: 5,
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

        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
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

        borderBottomLeftRadius: 0,
        borderTopLefttRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 65,
        marginTop: 5,
        marginBottom: 5,
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
        borderBottomLeftRadius: 0,
        borderTopLefttRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginBottom: 5,
        marginLeft: 65,
        flexDirection: 'row',
        alignItems: 'flex-end',
        maxWidth: "60%",
        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    leftBlockDown: {

        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 0,

        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 5,
        marginBottom: 10,

        maxWidth: "60%",
        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    leftBlockOnly: {

        borderRadius: 15,

        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 5,
        marginBottom: 5,
        marginTop: 5,
        maxWidth: "60%",
        backgroundColor: '#fff',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },





    rightBlock2: {

        // borderRadius: sameN && sameP ? 15 : 0,
        // borderBottomRightRadius: sameN ? 5 : 0,
        // borderTopRightRadius: sameP ? 5 : 30,
        // borderTopLeftRadius: sameP ? 5 : 30,
        // borderBottomLeftRadius: sameN ? 5 : 30,

        maxWidth: "60%",
        backgroundColor: '#9C4AD5',
        padding: 10,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 1,
        },
    },
    msgTxtRightStatus: {
        fontSize: 8,

        marginBottom: 8,
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
        marginTop: 2,
        textAlign: "right",
        fontWeight: '600',
    },

}); 