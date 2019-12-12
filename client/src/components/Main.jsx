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
                onMouseMove={props.moveLens}
                onMouseOverCapture={props.getCursorPosition}
                >
            </img>
            <p className="toggle-text">{props.displayText}</p>
            <div className="zoom-lens"></div>
        </div>
    );
}

export default Main;