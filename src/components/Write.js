import "../css/write.css";

import WriteIcons from "../components/WriteIcons";

import Counter from "../components/Counter";
import { utility } from "../scripts/utility";
import { events } from "../scripts/events";

import UploadImageWriting from "./UploadImageWriting";

function Write() {
    return (
        <div className="write_wrapper">
            <div className="write_item">
                
            </div>
            <div className="write_item threading">
                <div className="textarea_wrapper">
                    <Counter/>
                    <textarea id="write_textarea" className="write_textarea" placeholder="1/n" maxLength="280"
                        onChange = {(event) => {
                            utility.character_counter(event);
                        }}
                        onClick={(event) => {
                             events.add_border_on_click(event);
                             events.disable_delete();
                    }}></textarea>
                    <UploadImageWriting/>
                </div>
                <div className="loader"></div>
            </div>
            <div className="write_item">
                <WriteIcons/>
            </div>
        </div>
    )
}

export default Write;