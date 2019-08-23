import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class test_component_2 extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/1">Test Component 1</Link>
                Test component 2
            </div>
        );
    }
}

export default test_component_2;