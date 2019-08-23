import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class test_component_1 extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/2">Test Component 2</Link>
                Component 1
                
            </div>
        );
    }
}

export default test_component_1;
