import React from 'react';
import {events} from "./events.js";
import avatar from "./img/avatar.png";

import {utility} from "./utility.js";

import {
  FaComment,
  FaRetweet,
  FaThumbsUp,
  FaInfinity
} from "react-icons/fa";

import {
    style
} from "./style.js";

const messages = ["ONE This is some text that represents a message in Kestrel. And then therer is some more text to see how this wraps around the avater. \n\nDoes it every wrap around teh vater or does it just keep in the same flush!!!", "TWO This is some text that represents a message in Kestrel.", "THREE This is some text that represents a message in Kestrel.", "FOUR This is some text that represents a message in Kestrel.", "FIVE This is some text that represents a message in Kestrel.", "SIX This is some text that represents a message in Kestrel.", "SEVEN This is some text that represents a message in Kestrel."]

export var list_of_messages = messages.map((msg, i) => 
      <div className="msg_wrapper" id={"msg_wrapper_" + i} key={i.toString()}><div>
      <img className="avatar" src={avatar} alt="avatar_img" onClick={(event) => {
        event.preventDefault();
        style.visible("avatar_icon");
      }}></img></div><div className="user">John Smith</div>
      <div className="hold_msg">{msg}</div>
      <img className="msg_img" src="https://i.redd.it/tk46u5nrkxm21.png" alt="kestrel_img" onClick={
          (event) => {
              document.getElementById("clicked_img").src = event.target.src;
              document.getElementById("clicked_video").src = event.target.src;
              alert(event.target.src)
              utility.open_div("img_and_video");
          }
      }></img>
      <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em" onClick={(event) => {
                    event.preventDefault();
                    utility.open_div("comment");
                    utility.clone_and_append(i, "hold_comment", i);
                }}/></div>
                <div><FaRetweet className="icons_post icon_retweet" color="#3D3D3D" size="2em" onClick = {(event) => {
                    event.preventDefault();
                    utility.open_div("repost");
                    utility.clone_and_append(i, "hold_repost", i);
                 
                }}/></div>
                <div><FaThumbsUp id={"like_icon_" + i.toString()} className="icons_post like_icons" color="#3D3D3D" size="1.5em" onClick={events.like}/><span className="like_count">0</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
      </div>    
);

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: list_of_messages
};
  }

  componentDidMount() {
    this.message_id = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.message_id);
  }

  tick() {
    this.setState({
      messages: list_of_messages
    });
  }

  render() {
    return (
         <>
         {this.state.messages}
         </>
    );
  }
}

export default Messages