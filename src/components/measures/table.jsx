import React, { Component } from 'react'
import MeasuresTableRowHOC from './table_row_hoc'
import { Table } from "react-bootstrap";
export default class MeasuresTable extends Component {
  render() {
    const { measures, permissions, handleOpen } = this.props
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Grupo</th>
            <th>Equivalencia</th>
            <th>Acciones</th>
          </tr>

        </thead>
        <tbody>
          {measures.map((measure) =>
            <MeasuresTableRowHOC key={measure.id} measure={measure} handleOpen={handleOpen}
              permissions={permissions} />
          )}
        </tbody>
      </Table>
    )
  }
}
