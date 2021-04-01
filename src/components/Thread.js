import React, { useState, useEffect } from 'react';


import "../css/Thread.css";

import {thread} from "../data/data.js";
import MessageAvatar from "./MessageAvatar";

import MessageFooter from "./MessageFooter";

import {utility} from "../scripts/utility.js";

import ReactHtml from 'raw-html-react';

window.current_thread = ""

function Thread() {
    function UpdateComponent() {
        const [value, setValue] = useState(0);
        return () => setValue(value => value + 1);
    }

    const update = UpdateComponent();
    
    useEffect(() => {
        const interval = setInterval(() => {
            update();
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return(
        thread.messages.map(function(obj, i){
             //    console.log(obj)
            return(
            <div className="messages_wrapper" key={i}>
                <div className="messages_item"><MessageAvatar user={obj.user}/></div>
                <div className="messages_item"><ReactHtml html={obj.message}/></div>
                <div className="messages_item"><div className="crop"><img id={"img_" + i} className="message_image" src={obj.img} alt="msg_image" onClick={(event) => {
                    utility.pop_image(event)
                }}></img></div></div>
                <div className="messages_item"><MessageFooter like_id={i}/></div>
            </div>
        )})
    )
}

export default Thread;