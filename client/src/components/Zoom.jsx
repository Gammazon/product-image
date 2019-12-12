import React from 'react';
// import ReactImageMagnify from 'react-image-magnify';

// zoom when main display is hovered over
const Zoom = (props) => {
    return (
        <div className="zoom-container">
            <img src={props.displayImage} 
            className="zoom-image"
            id="zoom-image"
            onMouseOverCapture={props.getCursorPosition}
            />
        </div>
    );
}
export default Zoom;

// * attempt without library
// class Zoom extends React.Component {
//     constructor(props) {
//         super(props);

//         let displayImage = props.displayImage;

//         this.state = {
//             backgroundImage: displayImage,
//             backgroundPosition: '0% 0%'
//         }

        // this.handleMouseMove = this.handleMouseMove.bind(this);
    // }
    
    // handleMouseMove(e) {
    //     console.log(props.displayImage);
    //     const { left, top, width, height } = e.target.getBoundingClientRect()
    //     const x = (e.pageX - left) / width * 100
    //     const y = (e.pageY - top) / height * 100
    //     this.setState({ backgroundPosition: `${x}% ${y}%` })
    // }

// * with library
// const Zoom = (props) => {
//     return (
//         <div className="zoom">
//             <ReactImageMagnify {...{
//                 smallImage: {
//                     src: props.displayImage,
//                     width: 600,
//                     height: 600
//                 },
//                 largeImage: {
//                     src: props.displayImage,
//                     width: 1200,
//                     height: 1200
//                 }
//             }} />
//         </div>

//         // <figure onMouseMove={this.handleMouseMove} style={this.state}>
//         //     <img src={this.props.displayImage} />
//         // </figure>
//     );   
// }