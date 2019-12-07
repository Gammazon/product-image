import React from 'react';
import axios from "axios";
import Images from "./Images.jsx";
import Main from "./Main.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentProduct: 2,
            defaultMain: 1,
            hoverMain: 0,
            displayImage: "",
            displayText: "Roll over image to zoom in",
            defaultText: "Roll over image to zoom in",
            hoverText: "Click image to open expanded view"
        };

        this.defaultImage = this.defaultImage.bind(this);
        this.hoverThumbnail = this.hoverThumbnail.bind(this);
        this.hoverMainOn = this.hoverMainOn.bind(this);
        this.hoverMainOff = this.hoverMainOff.bind(this);
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
        let hoverText = this.state.hoverText;
        this.setState({
            displayText: hoverText
        });
    }

    hoverMainOff() {
        let defaultText = this.state.defaultText;
        this.setState({
            displayText: defaultText
        });
    }

    hoverThumbnail(id) {
        console.log(id);
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
                 />
            </div>
        );
    }
};

export default App;
