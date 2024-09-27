import React from 'react';
import Images from "./Images.jsx";
import Main from "./Main.jsx";
import $ from "jquery";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentProduct: 1,
            displayImageID: 1,
            displayImage: "",
            displayText: "Roll over image to zoom in",
            zoomHover: false,
            mouseX: 0,
            mouseY: 0
        };

        this.defaultImage = this.defaultImage.bind(this);
        this.hoverThumbnail = this.hoverThumbnail.bind(this);
        this.zoomHoverOn = this.zoomHoverOn.bind(this);
        this.zoomHoverOff = this.zoomHoverOff.bind(this);
        this.defaultState - this.defaultState.bind(this);
        this.getCursorPosition = this.getCursorPosition.bind(this);
        this.moveLens = this.moveLens.bind(this);
        
    }

    componentDidMount() {
        let idText = window.location.search;
        if (idText) {
            let croppedId = idText.substring((idText.indexOf('=') + 1));
            croppedId = Number(croppedId);
            this.defaultState(croppedId);
        } else {
            this.defaultState();
        }
    }

    defaultState(id = 1) {
        this.setState({
            currentProduct: id
        }, () => {
            this.defaultImage(id);
        });
    }
    
    // sets default image for main display
    defaultImage(id = this.state.currentProduct) {
        this.setState({
            displayImage: `https://gammazon.s3.us-east-2.amazonaws.com/Gammazon/${id}/${id}-1.jpg`
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
    zoomHoverOn(e) {
        console.log("on!", e.target.id);
        this.setState({
            zoomHover: true
        }, () => {
            this.setState({
                displayText: "Click image to open expanded view"
            });
        });
    }

    zoomHoverOff(e) {
        console.log("off!", e.target.id);
        this.setState({
            zoomHover: false
        }, () => {
            this.setState({
                displayText: "Roll over image to zoom in"
            });
        });
    }

    // ! attempt to create dynamic zoom
    getCursorPosition(e) {
        let x, y = 0;
        let a = e.target.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        this.setState({
            mouseX: x,
            mouseY: y
        }, () => {
            let lensX = x - 50;
            let lensY = y - 50;
            this.setState({
                lensX: lensX,
                lensY: lensY
            }, () => {
                $('.zoom-lens').css({left: lensX, top: lensY})
            })
        })
    }

    moveLens(e) {
        e.preventDefault();
        this.getCursorPosition(e);
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
                displayText={this.state.displayText}
                zoomHoverOn={this.zoomHoverOn}
                zoomHoverOff={this.zoomHoverOff}
                displayImage={this.state.displayImage}
                displayImageID={this.state.displayImageID}
                zoomHover={this.state.zoomHover}
                moveLens={this.moveLens}                
                 />

                {/* {this.state.zoomHover ? 
                    <Zoom 
                    displayImage={this.state.displayImage}
                    displayImageID={this.state.displayImageID} />
                : null} */}

                {/* {this.state.zoomHover ?
                    <Lense />
                    : null} */}
            </div>
        );
    }
};

export default App;
