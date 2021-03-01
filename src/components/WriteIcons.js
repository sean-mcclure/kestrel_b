import "../css/write_icons.css";

import {
    FaCameraRetro,
    FaPoll,
    FaPlus,
    FaPaperPlane
} from "react-icons/fa";

import { events } from "../scripts/events";

function WriteIcons() {
    return(
        <div className="write_icons_wrapper">
            <div className="write_icons_item">
                 <FaCameraRetro className="write_icons" size="1.7em" color="gold" onClick={(event) => {
                        document.getElementsByClassName("input_hide_writing")[events.get_clicked_textarea_instance()].click();
                     }}/>
            </div>
            <div className="write_icons_item">
                <FaPoll className="write_icons" size="1.7em" color="gold"/>
            </div>
            <div className="write_icons_item">
                <FaPlus className="write_icons plus" size="1.5em" color="gold" onClick={(event) => {
                    events.make_thread()
                    }}/>
            </div>
            <div className="write_icons_item">
                <FaPaperPlane  className="write_icons plus" size="1.5em" color="gold" className="write_icons post_message" onClick={(event) => {events.validate_input.write_textarea({
                    success_function : function() {
                        events.post()
                    }
                })}}></FaPaperPlane>
            </div>
        </div>
    )
}

export default WriteIcons;