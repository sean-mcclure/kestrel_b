import "../css/close.css";

import Counter from "./Counter";

import {events} from "../scripts/events.js";

import {
    FaTimes
} from "react-icons/fa";

function Close() {
    return(
        <div className="hold_close">
         <h2 className="write_title">WHAT'S HAPPENING?</h2>
        <FaTimes id="close" onClick={(event) => {
            events.close_div()
        }}/>
        </div>
    )
}

export default Close;