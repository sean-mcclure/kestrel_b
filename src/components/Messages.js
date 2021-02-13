import React, { useState, useEffect, useCallback } from 'react';

import "../css/messages.css";

import {data} from "../data/data.js";
import MessageAvatar from "./MessageAvatar";

function Messages() {

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
         data.messages.map(function(obj, i){return(
            <div className="messages_wrapper" key={i}>
                <div className="messages_item"><MessageAvatar user={obj.user}/></div>
                <div className="messages_item">{obj.message}</div>
                <div className="messages_item">Img or Video</div>
                <div className="messages_item">Comment Retweet ....</div>
            </div>
        )})
    )
}

export default Messages;