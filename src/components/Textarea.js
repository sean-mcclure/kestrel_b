import "../css/textarea.css"

import { utility } from "../scripts/utility";
import { events } from "../scripts/events";

function Textarea() {
    return(
        <textarea id="write_textarea" className="write_textarea" placeholder="1/n" maxLength="280"
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
    )
}

export default Textarea;