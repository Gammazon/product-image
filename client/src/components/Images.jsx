import React from 'react';
import Image from './Image.jsx';

// list of thumbnail images
const Images = (props) => {
    let array = [];
    for (let i = 1; i < 10; i++) {
        array.push(`https://gammazon.s3.us-east-2.amazonaws.com/Gammazon/${props.currentProduct}/${props.currentProduct}-${i}.jpg`)
    }

    return (
        <span className="thumbnails-container">
            <ul>
                {array.map((image, index) => {
                    return (
                        <Image
                        image={image} 
                        index={index}
                        hoverThumbnail={props.hoverThumbnail} 
                        currentProduct={props.currentProduct}
                        />
                    );
                })}
            </ul>
        </span>
    )
}

export default Images;