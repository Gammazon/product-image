import React from 'react';

const Main = (props) => {

    return (
            <div>
        <span className="main-frame">
            <img
                className="main-image"
                src={`https://gammazon.s3.us-east-2.amazonaws.com/Gammazon/${props.currentProduct}/${props.currentProduct}-1.jpg`}
                onMouseEnter={props.toggle}
                onMouseLeave={props.toggle}>
            </img>
        </span>
        </div>
    );
}

export default Main;