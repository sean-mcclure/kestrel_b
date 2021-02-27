import "../css/avatar.css";

import Close from "./Close";
import UploadImage from "./UploadImage";

import {events} from "../scripts/events.js";

import {
  FaCamera
} from "react-icons/fa";

export function Avatar() {
    return (
         <>
         <Close/>
         <div className="avatar_wrapper">
         <UploadImage></UploadImage>
         <p id="follower_count">217 Followers</p>
         <div className="follow_block_wrapper">
         <button id="follow_block_1" className="follow_block" onClick={(event) => {
             events.follow_block(event);
         }}>FOLLOW</button><button id="follow_block_2" className="follow_block" onClick={(event) => {
            events.follow_block(event);
         }}>BLOCK</button>
         </div>
         <FaCamera className="camera_icon" onClick={(event) => {
            document.getElementsByClassName("input_hide")[0].click()
            document.getElementsByClassName("avatar_pic")[0].style.backgroundImage = "";
        }}></FaCamera>
         <h5 className="upload_title_sub">Upload Photo<br></br>(crop to square for best results)</h5>

         <div>
             <textarea className="bio_main" placeholder="your bio..." maxLength="150" spellCheck="false"></textarea>
         </div>

         <div>
             <button className="save_profile">SAVE</button>
         </div>
         </div>
        </>
  );
}
export default Avatar;