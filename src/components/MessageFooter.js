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
            <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em" onClick={(event) => {

            }}/></div>
            <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em" onClick = {(event) => {
            
            }}/></div>
            <div><FaThumbsUp className="like_icons" color="#3D3D3D" size="1.6em" onClick={(event) =>
                events.like(event)
            }/><span className="like_count">0</span></div>
            <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
        </div>
    )
}

export default MessageFooter;