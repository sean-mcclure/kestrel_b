import "../css/side_div.css";

import Write from "./Write";
import Avatar from "./Avatar";
import DirectMessages from "./DirectMessages";
import Search from "./Search";
import SignIn from "./SignIn";
import Poll from "./Poll";
import Close from "./Close";

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
             {/*<Write/>*/}
            </div>
            <div id="comment">
                 {/*<Write/>*/}
            </div>
            <div id="poll_show">
                <Poll/>
            </div>
            <div id="img_and_video">
                <div className="close_clicked_img"><Close/></div>
                <img id="clicked_img" alt="clicked"></img>
                <video height="200px" controls id="hold_uploaded_video"><source id="clicked_video" type="video/mp4"></source></video>
            </div>
        </div>
    )
}

export default SideDiv;