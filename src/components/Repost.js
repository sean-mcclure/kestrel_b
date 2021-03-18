import "../css/repost.css";

import Counter from "../components/Counter";
import Textarea from "../components/Textarea";
import  WriteIcons from "../components/WriteIcons";

import {utility} from "../scripts/utility.js";
import {events} from "../scripts/events.js";

function Repost() {
    return(
        <div className="repost_wrapper">
            <div className="hold_textarea_repost">
                <Counter/>
                <textarea id="write_textarea_repost" className="write_textarea" placeholder="1/n" maxLength="280"
                    onChange = {(event) => {
                        utility.character_counter(event);
                    }}
                    onClick={(event) => {
                            events.add_border_on_click(event);
                            events.disable_delete();
                    }}
                    onPaste={(event) => {
                        setTimeout(function() {
                            window.current_formula = document.getElementById(event.target.id).value;
                        }, 100)
                    }}
                ></textarea>
            </div>  
            <div className="hold_repost"></div>
             <WriteIcons/>
        </div>
    )
}

export default Repost;