import React, { Component } from 'react'
import MeasuresTableHOC  from './table_hoc'

export default class MeasuresIndex extends Component {
  render() {
    return (
        <MeasuresTableHOC
        permissions={this.props.permissions}
        handleOpen={this.props.handleOpen}
        deleteShow={this.props.deleteShow}
        id={this.props.id}
        handleClose={this.props.handleClose}
        deleteMeasure={this.props.deleteMeasure}
        />
    )
  }
}
