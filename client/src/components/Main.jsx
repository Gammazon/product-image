import React from 'react';

// main display image
const Main = (props) => {
    return (
        <div className="main-container">
            <img
                className="main-image"
                id="main-image"
                src={props.displayImage}
                onMouseEnter={props.toggleZoomHover}
                onMouseLeave={props.toggleZoomHover}
                // onMouseMove={props.moveLens}
                width="300px"
                height="300px"
                >
            </img>
            <p className="toggle-text">{props.displayText}</p>
    </div>
    );
}

export default Main;