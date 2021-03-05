import "../css/write.css";

import Counter from "../components/Counter";
import Textarea from "../components/Textarea";
import UploadImageWriting from "./UploadImageWriting";
import Poll from "./Poll";
import MathJax from "./MathJax";
import WriteIcons from "../components/WriteIcons";

function Write() {
    return (
        <div className="write_wrapper">
            <div className="write_item">
                
            </div>
            <div className="write_item threading">
                <div className="textarea_wrapper">
                    <Counter/>
                    <Textarea/>
                    <UploadImageWriting/>
                    <Poll/>
                    <MathJax/>
                </div>
                <div className="loader"></div>
            </div>
            <div className="write_item">
                <WriteIcons/>
            </div>
        </div>
    )
}

export default Write;