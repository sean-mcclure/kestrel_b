import "./css/write.css";
import Poll from "./Poll";
import Close from "./Close";
import UploadImageWriting from "./UploadImageWriting";

import {style} from "./style.js";

import {utility} from "./utility.js";


import {post} from "./Post";

import {
  FaTimes,
  FaCameraRetro,
  FaPoll,
  FaPlus
} from "react-icons/fa";

const React = require('react')

function validate_file_size(file, max_allowable_in_mb) {
    var FileSize = file.files[0].size / 1024 / 1024;
    if (FileSize > max_allowable_in_mb) {
        return("not allowed")
    } else {
        return("allowed")
    }
}

    const input_styles = {
        display : "none"
    }

    const img_styles = {
        width : "40%",
        display : "none",
        margin : "0 auto"
    }

    var camera_cnt = 0;


class Write extends React.Component {

render() {
    return (
        <>
        <Close/>
        <img id="hold_uploaded_img" className="hold_uploaded_img" alt="uploaded_img_preview" style={img_styles}></img>
        <video height="200px" playsInline controls id="hold_uploaded_video" className="hold_uploaded_video" style={img_styles}><source type="video/mp4"></source></video>
        <input id="upload_input" className="upload_input" type="file" style={input_styles}></input>        

        <div className="hold_comment"></div>

        <div className="write_options_wrapper">

            <div className="write_options_item">
                <div className="show_count">280</div>
                <textarea id="write_textarea" className="textarea write_textarea" onChange={(event) => {utility.character_counter(event)}} maxLength="280"></textarea>
            </div>

            <div className="write_options_item">
                <FaCameraRetro className="upload_image" size="1.7em" color="gold" onClick={(e) => {
                    document.getElementsByClassName("input_hide")[0].click()
                }}/>
            </div>

            <div className="write_options_item">
                <FaPoll className="poll" size="1.7em" color="gold" onClick={(event) => {
                     event.preventDefault();
                     utility.open_div("poll_show");
                }}/>
            </div>

            <div className="write_options_item">
                <div className="post" onClick={post}>POST</div>
            </div>

            <div>
                <div className="make_thread" onClick={(event) => {
                   event.preventDefault();
                   document.getElementById("write_textarea").style.marginBottom = "8px";
                   var thread_area = document.createElement("textarea");
                   thread_area.className = "thread_textarea";
                   thread_area.id = "thread_textarea_" + document.getElementsByClassName("thread_textarea").length;

                   thread_area.style.width = "80%";
                   thread_area.style.height = "100px";
                   thread_area.style.margin = "0 auto";
                   thread_area.style.background = "#4f4434";
                   thread_area.style.border = "2px solid goldenrod";
                   thread_area.style.outline = "none";
                   thread_area.style.resize = "none";
                   thread_area.style.fontFamily = "Roboto";
                   thread_area.style.color = "whitesmoke";
                   thread_area.style.fontSize = "20px";
                   thread_area.style.padding = "10px";

                   thread_area.maxLength="280"

                   thread_area.addEventListener("input", function(event) {
                      utility.character_counter(event)
                   }, false)

                var word_count = document.createElement("div");
                word_count.className = "show_count";
                word_count.innerText = "280";
                word_count.style.marginTop = "20px";
                
                document.getElementsByClassName("write_options_item")[0].append(word_count);
                document.getElementsByClassName("write_options_item")[0].append(thread_area);
                document.getElementsByClassName("sidediv")[0].style.overflowY = "scroll";
                   
                }}><FaPlus/></div>
            </div>

            <div className="write_options_item"><UploadImageWriting/></div>

            <div className="hold_repost"></div>

            <div className="hold_thread"></div>

        </div>

        
            

        </>
    )
  }
}

export default Write;