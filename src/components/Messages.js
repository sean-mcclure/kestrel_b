import "../css/messages.css";

import {data} from "../data/data.js";

function Messages() {
    return(
         data.messages.map(function(msg){return(
            <div className="messages_wrapper">
                <div className="messages_item">Avatar and Name</div>
                <div className="messages_item">Message</div>
                <div className="messages_item">Img or Video</div>
                <div className="messages_item">Comment Retweet ....</div>
            </div>
        )})
    )
}

export default Messages;