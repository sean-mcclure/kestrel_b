import "../css/comment.css";

import Counter from "../components/Counter";
import Textarea from "../components/Textarea";
import  WriteIcons from "../components/WriteIcons";

function Comment() {
    return(
        <div className="comment_wrapper">
            <div className="hold_comment"></div>
            <div className="hold_textarea_comment">
                <Counter/>
                <Textarea/>  
            </div>
            <WriteIcons/>
        </div>
    )
}

export default Comment;