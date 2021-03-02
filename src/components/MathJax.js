import React, { useState, useEffect } from 'react';
import { MathComponent } from 'mathjax-react';

const math_styles = {
    "color" : "black"
}

function MathJax(props) {
    
    const [count, setCount] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(window.current_formula);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div style={math_styles}>
            <MathComponent tex={String.raw`${count}`} />
        </div>
    )
}

export default MathJax;