import "../css/upload_image_writing.css";

import {events} from "../scripts/events.js";

const upload_image = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
        alert(events.get_clicked_textarea_instance())
        const img = document.getElementsByClassName("uploaded_img_writing")[events.get_clicked_textarea_instance()];
        img.style.visibility = "visible";
        img.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0])
}

function UploadImageWriting() {
    return (
      <div className="upload_img_wrapper">
        <input type="file" className="input_hide_writing" onChange={upload_image}/>
        <img alt="img" className="uploaded_img_writing"></img>
      </div>
    );
}
export default UploadImageWriting;