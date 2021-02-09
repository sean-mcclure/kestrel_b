import "../css/write.css";

import WriteIcons from "../components/WriteIcons";

import Counter from "../components/Counter";
import { utility } from "../scripts/utility";

function Write() {
    return (
        <div className="write_wrapper">
            <div className="write_item">
                <Counter/>
            </div>
            <div className="write_item">
                <textarea id="write_textarea" placeholder="what's happening?" maxLength="280" onChange = {(event) => {utility.character_counter()}}></textarea>
            </div>
            <div className="write_item">
                <WriteIcons/>
            </div>
        </div>
    )
}

export default Write;