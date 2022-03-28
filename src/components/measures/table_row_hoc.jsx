import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeasuresTableRow from './table_row';

export class MeasuresTableRowHOC extends Component {

  render (  ) {
    const { measure } = this.props
    return(
      <MeasuresTableRow measure = { measure } />
    );
  }
}

const mapStateToProps = store => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect( mapStateToProps, mapDispatchToProps)(MeasuresTableRowHOC)