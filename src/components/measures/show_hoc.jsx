import { Component } from 'react';
import { connect } from 'react-redux';
import { measureObject } from '../../models';
import MeasureShow from './show';

export class MeasureShowHOC extends Component {
  componentDidMount(){
    console.log("Measure id: ",this.props.match.params.id)
    console.log(this.props.measure);
  }
  render (  ) {
    const { measure } = this.props
    return(
    <MeasureShow measure={ measure || measureObject }/>
    );
  }
}

const mapStateToProps = store => ({
  measure: store.measureReducer.measure
})

const mapDispatchToProps = dispatch => ({
  getMeasure: id => {
    dispatch(get_measure(id))
  }
})

export default connect( mapStateToProps, mapDispatchToProps)(MeasureShowHOC)