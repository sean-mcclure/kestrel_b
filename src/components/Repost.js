import "../css/repost.css";

import Counter from "../components/Counter";
import Textarea from "../components/Textarea";
import  WriteIcons from "../components/WriteIcons";

function Repost() {
    return(
        <div className="repost_wrapper">
            <Counter/>
            <Textarea/>
            <div className="hold_repost"></div>
             <WriteIcons/>
        </div>
    )
}

export default Repost;