import React from 'react';

const Image = (props) => {
    return (
        <li>
            <img 
                src={props.image} 
                key={props.index} 
                className="thumbnail"
                id={`${props.index + 1}`}
                onMouseEnter={props.hoverThumbnail} 
                onError={i => i.target.style.display = "none"}
                 />
        </li>
    );
}

export default Image;