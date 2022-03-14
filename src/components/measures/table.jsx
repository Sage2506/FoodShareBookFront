import React, { Component } from 'react'
import { MeasuresTableRowHOC } from './table_row_hoc'
import { Table, Modal, Button} from "react-bootstrap";
export default class MeasuresTable extends Component {
  render() {
    const { measures } = this.props
    return (
      <Table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Acciones</th>
          </tr>

        </thead>
        <tbody>
          { measures.map( (measure)  =>
            <MeasuresTableRowHOC key={measure.id} measure = {measure}/>
          )}
        </tbody>
      </Table>
    )
  }
}
