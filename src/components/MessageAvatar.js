import "../css/message_avatar.css";

import avatar from "../img/avatar.png";

function MessageAvatar(props) {
    return(
        <div className="message_header_wrapper">
            <div className="message_header_item">
                <img src={avatar} alt="avatar" width="50"></img>
            </div>
            <div className="message_header_item">{props.user}</div>
        </div>
    )
}

export default MessageAvatar;