import React, { Component } from 'react';
import { connect } from 'react-redux';
import { measureObject } from '../../models';
import { getMeasure } from '../../services/measure_request';
import MeasureShow from './show';

export class MeasureShowHOC extends Component {
  componentDidMount() {
    this.props.getMeasure(this.props.match.params.id);
  }
  render() {
    const { measure, handleOpen } = this.props
    return (
      <MeasureShow measure={measure || measureObject} handleOpen={handleOpen} />
    );
  }
}

const mapStateToProps = store => ({
  measure: store.measureReducer.measure
})

const mapDispatchToProps = dispatch => ({
  getMeasure: id => {
    dispatch(getMeasure(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MeasureShowHOC)