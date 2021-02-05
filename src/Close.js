import "./css/close.css";

import {
    FaTimes
} from "react-icons/fa";

export function close_div() {
    
    var close_elems = document.getElementsByClassName("close");
    for(var j=0; j<close_elems.length;j++) {
        close_elems[j].style.display = "none";
    }

    document.getElementsByClassName("write")[0].style.display = "none";
    document.getElementsByClassName("avatar")[0].style.display = "none";
    document.getElementsByClassName("direct_messages")[0].style.display = "none";
    document.getElementsByClassName("search")[0].style.display = "none";
    document.getElementsByClassName("sign_in")[0].style.display = "none";
    document.getElementsByClassName("repost")[0].style.display = "none";
    document.getElementsByClassName("comment")[0].style.display = "none";

    document.getElementsByClassName("camera_icon")[0].style.display = "block";
    document.getElementsByClassName("upload_title")[0].style.display = "block";
    document.getElementsByClassName("upload_title_sub")[0].style.display = "block";
    document.getElementsByClassName("follow_block_wrapper")[0].style.display = "none";
    document.getElementsByClassName("bio")[0].style.pointerEvents = "block";
    document.getElementsByClassName("save_profile")[0].style.display = "block";
    document.getElementsByClassName("save_profile")[0].style.margin = "0 auto";

    setTimeout(function() {
        window.recent_img_upload_url = undefined;
        document.getElementById("clicked_img").src = "";
        document.getElementById("clicked_video").src = "";
    }, 1000)
    document.getElementById("uploaded_img_writing").src = "";

    setTimeout(function() {
        document.getElementsByClassName("sidediv")[0].style.width = "0px";
        document.getElementsByClassName("sidediv")[0].style.marginRight = "-30px";
        document.getElementsByClassName("sidediv")[0].style.transition = "0.15s ease-in";
    }, 0)

}

function Close() {
    return(
        <FaTimes className="close" onClick={(event) => {
            event.preventDefault();
            close_div()
        }}/>
    )
}

export default Close;