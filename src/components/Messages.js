import "../css/messages.css";

import {data} from "../data/data.js";
import MessageAvatar from "./MessageAvatar";

function Messages() {
    return(
         data.messages.map(function(obj, i){return(
            <div className="messages_wrapper" key={i}>
                <div className="messages_item"><MessageAvatar user={obj.user}/></div>
                <div className="messages_item">{obj.message}</div>
                <div className="messages_item">Img or Video</div>
                <div className="messages_item">Comment Retweet ....</div>
            </div>
        )})
    )
}

export default Messages;