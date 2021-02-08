import "../css/write.css";

import Counter from "../components/Counter";

function Write() {
    return (
        <div className="write_wrapper">
            <div className="write_item">
                <Counter/>
            </div>
            <div className="write_item">
                <textarea id="write_textarea" placeholder="what's happening?"></textarea>
            </div>
            <div className="write_item"></div>
        </div>
    )
}

export default Write;