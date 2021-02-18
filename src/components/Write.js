import "../css/write.css";

import WriteIcons from "../components/WriteIcons";

import Counter from "../components/Counter";
import { utility } from "../scripts/utility";
import { events } from "../scripts/events";

function Write() {
    return (
        <div className="write_wrapper">
            <div className="write_item">
                
            </div>
            <div className="write_item threading">
                <div className="textarea_wrapper">
                    <Counter/>
                    <textarea id="write_textarea" className="write_textarea" placeholder="what's happening?" maxLength="280"
                        onChange = {(event) => {
                            utility.character_counter(event);
                        }}
                        onClick={(event) => {
                            var cnt = 280 - document.getElementById(event.target.id).value.length;
                            document.getElementsByClassName("show_count")[0].innerText = cnt;
                    }}></textarea>
                </div>
            </div>
            <div className="write_item">
                <WriteIcons/>
            </div>
        </div>
    )
}

export default Write;