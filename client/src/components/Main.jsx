import React from 'react';

const Main = (props) => {

    return (
        <div className="main-container">
            <img
                className="main-image"
                src={props.displayImage}
                onMouseEnter={props.hoverMainOn}
                onMouseLeave={props.hoverMainOff}>
            </img>
            <p className="toggle-text">{props.displayText}</p>
    </div>
    );
}

export default Main;