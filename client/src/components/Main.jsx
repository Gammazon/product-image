import React from 'react';
import Zoom from './Zoom.jsx';
import Lense from './Lense.jsx';

// main display image
const Main = (props) => {
    return (
        <div className="main-container" onMouseEnter={props.zoomHoverOn} onMouseLeave={props.zoomHoverOff}>
            <img
                className="main-image"
                id="main-image"
                src={props.displayImage}
                onMouseMove={props.moveLens}
                onMouseOverCapture={props.getCursorPosition}
                >
            </img>
            <p className="toggle-text">{props.displayText}</p>
            {props.zoomHover ?
                <Zoom
                    displayImage={props.displayImage}
                    displayImageID={props.displayImageID} />
                    : null}
            {props.zoomHover ? <Lense /> : null}

        </div>
    );
}

export default Main;