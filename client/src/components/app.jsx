import React from 'react';
import Images from "./Images.jsx";
import Main from "./Main.jsx";
import Zoom from "./Zoom.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentProduct: 2,
            defaultMain: 1,
            displayImageID: 1,
            displayImage: "",
            displayText: "Roll over image to zoom in",
            zoomHover: false
            // mouseX: 0,
            // mouseY: 0
        };

        this.defaultImage = this.defaultImage.bind(this);
        this.hoverThumbnail = this.hoverThumbnail.bind(this);
        this.toggleZoomHover = this.toggleZoomHover.bind(this);
        this.getCursorPosition = this.getCursorPosition.bind(this);
        // this.moveLens = this.moveLens.bind(this);
        
    }

    componentDidMount() {
        this.defaultImage();
    }

    // sets default image for main display
    defaultImage() {
        this.setState({
            displayImage: `https://gammazon.s3.us-east-2.amazonaws.com/Gammazon/${this.state.currentProduct}/${this.state.currentProduct}-1.jpg`
        });
    }

    // grabs info of hovered thumnbnail
    hoverThumbnail(event) {
        let currentImage = `https://gammazon.s3.us-east-2.amazonaws.com/Gammazon/${this.state.currentProduct}/${this.state.currentProduct}-${event.target.id}.jpg`;
        this.setState({
            displayImage: currentImage,
            displayImageID: event.target.id
        });
    }

    // toggles when hovered on main image for captions and zoom
    toggleZoomHover() {
        let toggle = !this.state.zoomHover;
        this.setState({
            zoomHover: toggle
        }, () => {
                let caption = this.state.zoomHover ? "Click image to open expanded view" : "Roll over image to zoom in";
                this.setState({
                    displayText: caption
                });
        });
    }

    // ! attempt to create dynamic zoom
    // getCursorPosition(e) {
    //     let x, y = 0;
    //     let a = e.target.getBoundingClientRect();
    //     x = e.pageX - a.left;
    //     y = e.pageY - a.top;
    //     console.log(x, y);
    //     this.setState({
    //         mouseX: x,
    //         mouseY: y
    //     }, () => {
    //         console.log(this.state.mouseX, this.state.mouseY);
    //     });
    //     return {x: x, y: y};
    // }

    // moveLens(e) {
    //     e.preventDefault();
    //     let pos = this.getCursorPosition(e);
    //     let x = pos.x;
    //     let y = pos.y;

    // }

    render() {
        let currentProduct = this.state.currentProduct;
        return (
            <div className="container">
                <Images currentProduct={currentProduct} 
                hoverThumbnail={this.hoverThumbnail}
                 />

                <Main currentProduct={currentProduct} 
                displayImage={this.state.displayImage}
                displayText={this.state.displayText}
                toggleZoomHover={this.toggleZoomHover}
                moveLens={this.moveLens}                
                 />

                {this.state.zoomHover ? 
                    <Zoom 
                    displayImage={this.state.displayImage}
                    displayImageID={this.state.displayImageID} />
                : null}
            </div>
        );
    }
};

export default App;
