import React, { useState, useEffect } from 'react';

import "../css/ShowImgVideo.css";

function ShowImgVideo() {

    function UpdateComponent() {
        const [value, setValue] = useState(0);
        return () => setValue(value => value + 1);
    }

    const update = UpdateComponent();
    
    useEffect(() => {
        const interval = setInterval(() => {
            update();
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <img className="popped_img" src={window.popped_img}></img>
        </div>
    )
}

export default ShowImgVideo;