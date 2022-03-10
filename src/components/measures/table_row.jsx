import React, { Component } from 'react'

export default class MeasuresTableRow extends Component {
  render() {
    const { id, name } = this.props.measure
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td></td>
      </tr>
    )
  }
}
