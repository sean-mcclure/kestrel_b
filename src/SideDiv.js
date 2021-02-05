import "./css/side_div.css";

import Write from "./Write";
import Avatar from "./Avatar";
import DirectMessages from "./DirectMessages";
import Search from "./Search";
import SignIn from "./SignIn";
import Poll from "./Poll";
import Close from "./Close";

import {utility} from "./utility.js";

function SideDiv() {
    return(
        <div className="sidediv">
            <div className="write">
                <Write/>
            </div>
            <div className="avatar">
                <Avatar/>
            </div>
            <div className="direct_messages">
                <DirectMessages/>
            </div>
            <div className="search">
                <Search/>
            </div>
            <div className="sign_in">
                <SignIn/>
            </div>
            <div className="repost">
                <Write/>
            </div>
            <div className="comment">
                <Write/>
            </div>
            <div className="poll_show">
                <Poll/>
            </div>
            <div className="img_and_video">
                <div className="close_clicked_img"><Close/></div>
                <img id="clicked_img"></img>
                <video height="200px" controls id="hold_uploaded_video"><source id="clicked_video" type="video/mp4"></source></video>
            </div>
        </div>
    )
}

export default SideDiv;