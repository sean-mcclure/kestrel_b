import "../css/side_div.css";

import Write from "./Write";
import Avatar from "./Avatar";
import DirectMessages from "./DirectMessages";
import Search from "./Search";
import SignIn from "./SignIn";
import Poll from "./Poll";
import Close from "./Close";
import Repost from "./Repost";
import Comment from "./Comment";
import ShowImgVideo from "./ShowImgVideo";

function SideDiv() {
    return(
        <div id="sidediv">
            <Close/>
            <div id="write">
                <Write/>
            </div>
            <div id="avatar">
                <Avatar/>
            </div>
            <div id="direct_messages">
                <DirectMessages/>
            </div>
            <div id="search">
                <Search/>
            </div>
            <div id="sign_in">
                <SignIn/>
            </div>
            <div id="repost">
                <Repost/>
            </div>
            <div id="comment">
                 <Comment/>
            </div>
            <div id="poll_show">
                <Poll/>
            </div>
            <div id="img_and_video">
                <ShowImgVideo/>
            </div>
        </div>
    )
}

export default SideDiv;