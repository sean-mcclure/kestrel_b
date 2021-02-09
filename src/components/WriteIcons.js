import "../css/write_icons.css";

import {
    FaCameraRetro,
    FaPoll,
    FaPlus
} from "react-icons/fa";

function WriteIcons() {
    return(
        <div className="write_icons_wrapper">
            <div className="write_icons_item">
                 <FaCameraRetro className="write_icons" size="1.7em" color="gold"/>
            </div>
            <div className="write_icons_item">
                <FaPoll className="write_icons" size="1.7em" color="gold"/>
            </div>
            <div className="write_icons_item">
                <FaPlus className="write_icons" size="1.7em" color="gold"/>
            </div>
            <div className="write_icons_item">
                <button className="post_message">POST</button>
            </div>
        </div>
    )
}

export default WriteIcons;