import React from 'react';

const Images = (props) => {
    let array = [];
    for (let i = 2; i < 5; i++) {
        array.push(`https://fecproductimages.s3.us-east-2.amazonaws.com/${props.currentProduct}-${i}.jpg`);
    }
    console.log(array);
    return (
        <div>
            <img src={`https://fecproductimages.s3.us-east-2.amazonaws.com/${props.currentProduct}-1.jpg`} className='main'></img>
            {array.map((image, index) => {
                return <img src={image} key={index} className="display-img"></img>
            })}
        </div>    
    );
}

export default Images;