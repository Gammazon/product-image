import React from "react";
import axios from "axios";
import Images from "./Images.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentProduct: 1
        };
    }

    componentDidMount() { }

    render() {
        return (
            <div>
                Hello World
                <Images currentProduct={this.state.currentProduct} />
            </div>
        );
    }
};

export default App;
