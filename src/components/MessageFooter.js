import {events} from "../scripts/events.js"

import "../css/MessageFooter.css";

import {
  FaComment,
  FaRetweet,
  FaThumbsUp,
  FaInfinity
} from "react-icons/fa";

function MessageFooter() {
    return(
        <div className="icon_wrapper_post">
            <div><FaComment className="message_footer_icons" color="#3D3D3D" size="1.5em" onClick={(event) => {

            }}/></div>
            <div><FaRetweet className="message_footer_icons" color="#3D3D3D" size="1.7em" onClick = {(event) => {
            
            }}/></div>
            <div><FaThumbsUp className="message_footer_icons" color="#3D3D3D" size="1.4em" onClick={(event) =>
                events.like(event)
            }/><span className="like_count">0</span></div>
            <div><FaInfinity className="message_footer_icons" color="#3D3D3D" size="1.5em"/></div>
        </div>
    )
}

export default MessageFooter;