import "../css/close.css";

import {events} from "../scripts/events.js";

import {
    FaTimes
} from "react-icons/fa";

function Close() {
    return(
        <FaTimes id="close" onClick={(event) => {
            events.close_div()
        }}/>
    )
}

export default Close;