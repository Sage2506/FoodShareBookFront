import React, { Component } from 'react';

export default class MeasureShow extends Component {
    render() {
        const { id, name, group } = this.props.measure
        return (
            <div>
                <h1>{id}</h1>
                <h1>{name}</h1>
                <h1>{group}</h1>
            </div>
        );
    }
}