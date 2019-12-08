import React from 'react';
import axios from "axios";
import Images from "./Images.jsx";
import Main from "./Main.jsx";
import Zoom from "./Zoom.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentProduct: 2,
            defaultMain: 1,
            hoverMain: 0,
            displayImage: "",
            displayText: "Roll over image to zoom in",
            zoomHover: false
        };

        this.defaultImage = this.defaultImage.bind(this);
        this.hoverThumbnail = this.hoverThumbnail.bind(this);
        this.hoverMainOn = this.hoverMainOn.bind(this);
        this.hoverMainOff = this.hoverMainOff.bind(this);
        this.toggleZoomHover = this.toggleZoomHover.bind(this);
    }

    componentDidMount() {
        this.defaultImage();
    }

    defaultImage() {
        this.setState({
            displayImage: `https://gammazon.s3.us-east-2.amazonaws.com/Gammazon/${this.state.currentProduct}/${this.state.currentProduct}-1.jpg`
        });
    }

    hoverMainOn() {
        console.log("hovering");
        this.setState({
            displayText: "Click image to open expanded view"
        });
    }

    hoverMainOff() {
        console.log("hovering");
        this.setState({
            displayText: "Roll over image to zoom in"
        });
    }

    hoverThumbnail(event) {
        let currentImage = `https://gammazon.s3.us-east-2.amazonaws.com/Gammazon/${this.state.currentProduct}/${this.state.currentProduct}-${event.target.id}.jpg`;
        this.setState({
            displayImage: currentImage
        });
    }

    toggleZoomHover() {
        let toggle = !this.state.zoomHover;
        this.setState({
            zoomHover: toggle
        });
    }


    render() {
        let currentProduct = this.state.currentProduct;
        return (
            <div className="container">
                <Images currentProduct={currentProduct} 
                hoverThumbnail={this.hoverThumbnail}
                 />

                <Main currentProduct={currentProduct} 
                displayImage={this.state.displayImage}
                hoverMainOn={this.hoverMainOn} 
                hoverMainOff={this.hoverMainOff}
                displayText={this.state.displayText}
                toggleZoomHover={this.toggleZoomHover}
                 />

                {this.state.zoomHover ? <Zoom displayImage={this.state.displayImage} /> : null}
            </div>
        );
    }
};

export default App;
