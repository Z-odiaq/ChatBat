import React, { Component } from 'react';
import { KeyboardAvoidingView} from 'react-native';
import ChatBat from './Components/ChatBat';
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.chatBatRef = React.createRef();
    this.state = {
      msg: '',
      messages: [],

    };

    let links = ["youtube.com", "www.blogger.com", "www.google.com", "microsoft.com	", "support.google.com"];
    let vids = ["oRC1K7uUBZ8", "TWJVgTeNljs", "66VnOdk6oto", "3YxaaGgTQYM", "fHI8X4OXluQ", "EZzbh9YjVhQ"];

    for (var i = 0; i < 100; i++) {
      let m = Math.random() < 0.3 ? Math.random() < 0.5 ? Math.random() < 0.7 ? Math.random() < 1 ? 4 : 0 : 3 : 2 : 1
      this.state.messages.push({
        _id: Math.floor(Math.random() * 100000000) + 1,
        from: Math.random() < 0.5 ? "6101b5c6b24b3971dfb70805" : "6101b5c6b2ok5971dfb70805",
        text: m == 0 ? this.sentence(1) : m == 4 ? links[Math.floor(Math.random() * 4)] : m == 1 ? this.sentence(10) : m == 3 ? "https://www.youtube.com/watch?v=" + vids[Math.floor(Math.random() * 5)] : null,
        type: m,
        link: "https://picsum.photos/200/300?random=" + vids[Math.floor(Math.random() * 10)],
        status: Math.random() < 0.3 ? Math.random() < 0.5 ? 0 : 2 : 1,
        createdAt: new Date((new Date()) - Math.floor(Math.random() * 10000000000 + 1)).toISOString()
      })
    }
  }

  sentence(m) {
    const words = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi", "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];
    const count = Math.round(Math.abs(20) * 1 + m);
    var result = [];
    while (result.length < count) {
      var pos = Math.floor(Math.random() * words.length);
      var rnd = words[pos];
      result.push(rnd);
    }
    return result.join(' ');

  }

  send = (msg) => {
    console.log(JSON.stringify(msg));
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} >
          <ChatBat
            messages={this.state.messages.reverse()}
            friendAvatar={"https://www.bootdey.com/img/Content/avatar/avatar1.png"}
            userId={"6101b5c6b24b3971dfb70805"}
            OnSend={(msg) => this.send(msg)}
            ImageViewer={(url) => { console.log("handle it yourself p*ssy. : " + url) }}
          />
      </KeyboardAvoidingView>
    );
  }
}

