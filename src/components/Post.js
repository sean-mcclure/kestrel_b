import {list_of_messages} from "./MessagesOr.js"
import {close_div} from "./Close";
import avatar from "../img/avatar.png";

import ReactHtmlParser from 'react-html-parser';

import {events} from "../scripts/events.js"
import {utility} from "../scripts/utility.js";
import {style} from "../scripts/style.js"

import {
  FaComment,
  FaRetweet,
  FaThumbsUp,
  FaInfinity
} from "react-icons/fa";

export function post() {

    if(document.getElementById("write_textarea").value !== "" || document.getElementsByClassName("write_textarea")[1].value !== "" || document.getElementsByClassName("poll_input_1")[0].value !== "") {
         
    events.close_div();

    const use_msg_id = "msg_wrapper_" + utility.makeid();

    setTimeout(function() {
        document.getElementsByClassName("col")[0].scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, 1000)
    
    document.getElementsByClassName("hold_uploaded_img")[0].src = ""
    var videoElement = document.getElementById("hold_uploaded_video");
    videoElement.pause();
    videoElement.removeAttribute('src');
    videoElement.load();
    document.getElementsByClassName("hold_uploaded_img")[0].style.display = "none"
    document.getElementsByClassName("hold_uploaded_video")[0].style.display = "none"
    document.getElementsByClassName("upload_input")[0].value = ""

    if(window.polling) {

        var poll_input_1 = document.getElementsByClassName("poll_input_1")[0].value; 
        
        var fin = [];

        var poll_div = ReactHtmlParser("<div style='background: lightgrey; height: auto; padding: 5px;'>" + poll_input_1 + "</div><div>CHOOSE</div>");

        fin.push(poll_div)

        window.polling = false;

    } else {

    var msg = document.getElementById("write_textarea").value;

    if(msg === "") {
        msg = document.getElementsByClassName("clone")[0].children[2].innerText;
    }

    var threads = document.getElementsByClassName("thread_textarea");
    var all_threads = [];
    for(var t=0; t<threads.length; t++) {
        all_threads.push(threads[t].value)
    }

    all_threads.unshift(msg)

    if(all_threads.length > 1) {

    all_threads.forEach(function(elem, i) {
        var use_index = i + 1;
        fin.push(use_index.toString() + "/" + all_threads.length + "\n" + elem);
    })

    fin = fin.join("\n\n")

    } else {
        fin = all_threads;
    }

    } 

    var image_src = window.recent_img_upload_url
    setTimeout(function() {
        window.recent_img_upload_url = undefined;
    }, 700)

    var post_id = Math.round(Math.random()*10000000000000, 1)
    var like_id = Math.round(Math.random()*10000000000000, 1)

    if(typeof(image_src) !== "undefined") {
        
        if(image_src.indexOf("video/mp4") === -1 && image_src.indexOf("video/quicktime") === -1) {

        list_of_messages.unshift(<div className="msg_wrapper" id={use_msg_id} key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img" onClick={(event) => {
        event.preventDefault();
        style.visible("avatar_icon");
      }}></img></div><div className="user">John Smith</div><div className="hold_msg">{fin}</div>
        <div onClick={(event) => {
                utility.open_div("img_and_video");
            }}><img className="msg_img" src={image_src} alt="kestrel_img"  onClick={
          (event) => {
              if(event.target.src.includes("video")) {
                  document.getElementById("clicked_img").style.display = "none";
                  document.getElementById("clicked_video").style.display = "block";
                 document.getElementById("clicked_video").src = event.target.src;
              } else {
                  document.getElementById("clicked_video").style.display = "none";
                  document.getElementById("clicked_img").style.display = "block";
                document.getElementById("clicked_img").src = event.target.src;
              }
              utility.open_div("img_and_video");
          }
      }></img></div>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em" onClick={(event) => {
                    event.preventDefault();
                    utility.open_div("comment");
                    utility.clone_and_append(use_msg_id, "hold_comment", 0);
                }}/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em" onClick = {(event) => {
                    event.preventDefault();
                    utility.open_div("repost");
                    utility.clone_and_append(use_msg_id, "hold_repost", 0);
                }}/></div>
                <div><FaThumbsUp id={like_id} className="like_icons" color="#3D3D3D" size="1.6em" onClick={utility.like}/><span className="like_count">0</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )

        /*
        if(window.repost) {
            var elem = document.getElementById(window.repost_id);
            var clone = elem.cloneNode(true);
        }
        */

        events.uploadFile(image_src)
        } else {
            if(document.getElementById("hold_uploaded_video").duration > 30) {
                alert("video too long")
            }
            list_of_messages.unshift(<div className="msg_wapper" id={use_msg_id} key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img" onClick={(event) => {
        event.preventDefault();
        style.isible("avatar_icon");
      }}></img></div><div className="user">John Smith</div><div className="hold_msg">{fin}</div>
            <div onClick={(event) => {
                utility.open_div("img_and_video");
            }}><img src={image_src} alt="video_upload" onClick={
          (event) => {
              if(event.target.src.includes("video")) {
                  document.getElementById("clicked_img").style.display = "none";
                  document.getElementById("clicked_video").style.display = "block";
                 document.getElementById("clicked_video").src = event.target.src;
              } else {
                  document.getElementById("clicked_video").style.display = "none";
                  document.getElementById("clicked_img").style.display = "block";
                document.getElementById("clicked_img").src = event.target.src;
              }
              utility.open_div("img_and_video");
          }
      }></img></div>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em" onClick={(event) => {
                    event.preventDefault();
                    utility.open_div("comment");
                    utility.clone_and_append(use_msg_id, "hold_comment", 0);
                }}/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em" onClick = {(event) => {
                    event.preventDefault();
                    utility.open_div("repost");
                    utility.clone_and_append(use_msg_id, "hold_repost", 0);
                }}/></div>
                <div><FaThumbsUp id={like_id} className="like_icons" color="#3D3D3D" size="1.6em" onClick={utility.like}/><span className="like_count">0</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )
        events.uploadFile(image_src)
        }
    } else {
        list_of_messages.unshift(<div className="msg_wrapper" id={use_msg_id} key={post_id}><div><img className="avatar" src={avatar} alt="avatar_img" onClick={(event) => {
        event.preventDefault();
        style.visible("avatar_icon");
      }}></img></div><div className="user">John Smith</div><div className="hold_msg">{fin}</div>
            <div className="icon_wrapper_post">
                <div><FaComment className="icons_post" color="#3D3D3D" size="1.6em" onClick={(event) => {
                    event.preventDefault();
                    utility.open_div("comment");
                    utility.clone_and_append(use_msg_id, "hold_comment", 0);
                }}/></div>
                <div><FaRetweet className="icons_post" color="#3D3D3D" size="2em" onClick = {(event) => {
                    event.preventDefault();
                    utility.open_div("repost");
                    utility.clone_and_append(use_msg_id, "hold_repost", 0);
                }}/></div>
                <div><FaThumbsUp id={like_id} className="like_icons" color="#3D3D3D" size="1.6em" onClick={utility.like}/><span className="like_count">0</span></div>
                <div><FaInfinity className="icons_post icon_thread" color="#3D3D3D" size="1.6em"/></div>
            </div>
        </div>
        )  
    }

    var areas = document.querySelectorAll('textarea');
    [].forEach.call(areas, function(area) {
        area.value = "";
    });
    document.getElementById("hold_uploaded_img").innerHTML = "";

  return (
         <>
         {list_of_messages}
         </>
  );

    } else {
        var areas_b = document.querySelectorAll('textarea');
        [].forEach.call(areas_b, function(area) {
                area.classList.add("shake_it");
                area.style.border = "2px solid red";
            setTimeout(function() {
                area.classList.remove("shake_it");
                area.style.border = "0px solid red";
        }, 1000)
        });

    }

}

export default post;