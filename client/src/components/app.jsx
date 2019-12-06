import React from 'react';
import axios from "axios";
import Images from "./Images.jsx";
import Main from "./Main.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentProduct: 1,
            displayText: "Roll over image to zoom in"
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {}


    toggle() {
        console.log("hover");
    }

    render() {
        let currentProduct = this.state.currentProduct;
        return (
            <div>
                Hello World
                <Main currentProduct={currentProduct} toggle={this.toggle} />
                <Images currentProduct={currentProduct} />
            </div>
        );
    }
};

export default App;
