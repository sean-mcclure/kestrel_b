import "../css/repost.css";

import Counter from "../components/Counter";
import Textarea from "../components/Textarea";
import  WriteIcons from "../components/WriteIcons";

function Repost() {
    return(
        <div className="repost_wrapper">
            <div className="hold_textarea_repost">
                <Counter/>
                <Textarea/>
            </div>  
            <div className="hold_repost"></div>
             <WriteIcons/>
        </div>
    )
}

export default Repost;