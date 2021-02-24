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
                    <textarea id="write_textarea" className="write_textarea" placeholder="1/n" maxLength="280"
                        onChange = {(event) => {
                            utility.character_counter(event);
                        }}
                        onClick={(event) => {
                            var areas = document.getElementsByClassName("write_textarea");
                            for(var i=0; i<areas.length; i++) {
                                areas[i].style.boxShadow = "none";
                            }
                            document.getElementById(event.target.id).style.boxShadow = "0px 10px 10px #3D3D3D";
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