import {utility} from "./utility.js";

var viz_cnt = 0;
export var style = {
    style_element: function(type, e) {
        if (type === "feed") {
            document.getElementsByClassName("feed_titles")[0].style.background = "#313030";
            document.getElementsByClassName("feed_titles")[1].style.background = "#313030";
            document.getElementsByClassName("feed_titles")[0].style.color = "whitesmoke";
            document.getElementsByClassName("feed_titles")[1].style.color = "whitesmoke";
            document.getElementById(e.target.id).style.background = "gold";
            document.getElementById(e.target.id).style.color = "#141414";
        }
    },
    visible: function(type) {
        window.recent_img_upload_url = undefined
        viz_cnt++;
        if ((viz_cnt % 2 === 0)) {
            document.getElementsByClassName("add_message")[0].style.visibility = "visible";
            document.body.style.position = "fixed";
            document.body.style.overflow = "hidden";
        } else {
            const mobile_check = utility.is_mobile()
            if (mobile_check) {
                document.body.style.position = "fixed";
                document.body.style.overflowY = "hidden";
                document.getElementsByClassName("flex-grid")[0].style.background = "";
                document.body.addEventListener('touchstart', function(e) {
                    e.preventDefault();
                });
            }
        }
        if (type === "avatar_icon") {
            utility.open_div("avatar");
            document.getElementsByClassName("camera_icon")[0].style.display = "none";
            document.getElementsByClassName("upload_title")[0].style.display = "none";
            document.getElementsByClassName("upload_title_sub")[0].style.display = "none";
            document.getElementsByClassName("follow_block_wrapper")[0].style.display = "block";
            document.getElementsByClassName("bio")[0].style.pointerEvents = "none";
            document.getElementsByClassName("save_profile")[0].style.display = "none";
        }
        if (type === "repost") {
            if (viz_cnt % 2 === 0) {
                document.getElementsByClassName("repost")[0].style.width = "0vw";
                document.getElementsByClassName("repost")[0].style.transition = "0.15s ease-in";
            } else {
                if (utility.is_mobile()) {
                    document.getElementsByClassName("repost")[0].style.width = "100vw";
                    document.getElementsByClassName("repost_item")[0].style.width = "100vw";
                    document.getElementsByClassName("repost_item")[1].style.width = "100px";
                } else {
                    document.getElementsByClassName("repost")[0].style.marginBottom = "70px";
                    document.getElementsByClassName("repost")[0].style.width = "50vw";
                    document.getElementsByClassName("repost_item")[0].style.width = "105vw";
                    document.getElementsByClassName("repost_item")[0].style.marginRight = "10px";
                    document.getElementsByClassName("repost_item")[1].style.width = "50px";
                    document.getElementsByClassName("repost_item")[1].style.width = "100px";
                    document.getElementsByClassName("repost_item")[1].style.marginTop = "-4px";
                    document.getElementsByClassName("repost_item")[1].style.marginBottom = "20px";
                }
                document.getElementsByClassName("repost_item")[0].style.display = "block";
                document.getElementsByClassName("repost_item")[1].style.display = "block";
                document.getElementsByClassName("repost")[0].style.marginRight = "0px";
                document.getElementsByClassName("repost")[0].style.transition = "0.15s ease-in";
            }
        }
        if (type === "poll") {
            document.getElementsByClassName("write_options_item")[0].style.display = "none";
            document.getElementsByClassName("write_options_item")[1].style.display = "none";
            document.getElementsByClassName("write_options_item")[2].style.display = "none";
            document.getElementsByClassName("write_options_item")[3].style.display = "none";
            document.getElementsByClassName("make_thread")[0].style.display = "none";
            document.getElementsByClassName("poll_wrapper")[0].style.display = "block";
            document.getElementsByClassName("poll_wrapper")[0].innerHTML += "";
        }
    }
}