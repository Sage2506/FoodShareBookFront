import { Component } from 'react';

export default class MeasureShow extends Component {
    render() {
        const { id, name, group } = this.props.measure
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
}