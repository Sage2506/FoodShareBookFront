import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { measureObject } from '../../models';
import { getMeasure, postMeasure, putMeasure } from '../../services/measure_request';
import MeasureForm from './form';

export class MeasureFormHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measure: measureObject,
      validated: false
    }
  }

  componentDidMount() {
    if (this.props.location.pathname.split('/')[2] === 'edit') {
      this.props.getMeasure(this.props.match.params.id);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.measure && nextProps.measure.id !== undefined && nextProps.measure.id !== prevState.measure.id) {
      return { ...prevState, measure: nextProps.measure }
    } else {
      return prevState
    }
  }

  handleInputChange = e => {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        this.setState({
          measure: {
            ...this.state.measure,
            measures: [
              ...this.state.measure.measures,
              parseInt(e.target.value)
            ]
          }
        })
      } else {
        this.setState({
          measure: {
            ...this.state.measure,
            measures: this.state.measure.measures.filter(measure => measure !== parseInt(e.target.value))
          }
        })
      }
    } else {
      this.setState({
        measure: {
          ...this.state.measure,
          [e.target.id]: e.target.value
        }
      })
    }
  }

  handleInputSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget
    const { name } = this.state.measure
    if (form.checkValidity() === false || name.length < 1) {
      e.stopPropagation()
    } else {
      this.createOrUpdateMeasure();
    }
    this.setState({ validated: true })
  }

  createOrUpdateMeasure = () => {
    if (this.state.measure.id) {
      this.props.putMeasure({ id: this.state.measure.id, data: this.state.measure })
    }
  }



  render() {
    if(this.props.newMeasure?.id){
      return <Redirect to = {`/measures/${this.props.newMeasure.id}`}/>
    } else {

      const { name } = this.state.measure;
      return (
        <div>
          <MeasureForm
            name={name}
            handleInputChange={this.handleInputChange}
            handleInputSubmit={this.handleInputSubmit} />
        </div>
      );
    }
  }

}

const mapStateToProps = store => ({
  measure: store.measureReducer.measure,
  newMeasure: store.measureReducer.newMeasure
})

const mapDispatchToProps = dispatch => ({
  getMeasure: id => {
    dispatch(getMeasure(id))
  },
  postMeasure: data => {
    dispatch(postMeasure(data))
  },
  putMeasure: ({ id, data }) => {
    dispatch(putMeasure({ id, data }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MeasureFormHOC)