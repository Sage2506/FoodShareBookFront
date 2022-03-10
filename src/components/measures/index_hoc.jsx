import { Component } from 'react';
import { connect } from 'react-redux';
import MeasuresIndex from '.';
import { get_measures } from '../../services/measure_requests';

export class MeasuresIndexHOC extends Component {

  render (  ) {
    return(
    <MeasuresIndex
    />
    );
  }
}

const mapStateToProps = store => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect( mapStateToProps, mapDispatchToProps)(MeasuresIndexHOC)