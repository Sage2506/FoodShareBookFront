import { Component } from 'react';
import { connect } from 'react-redux';
import { default as Pagination } from '../common/pagination';
import { get_measures } from '../../services/measure_requests';
import MeasuresTable from './table';

export class MeasuresTableHOC extends Component {
  componentDidMount() {
    this.props.getMeasures()
   }

  render (  ) {
    const { measures, pagination, getMeasures } = this.props
    return(
      <div>
        <MeasuresTable
          measures = {measures}
        />
        <Pagination pagination = {pagination} paginationRequest = { getMeasures } />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  measures: store.measureReducer.measures,
  pagination: store.measureReducer.pagination
})

const mapDispatchToProps = dispatch => {
  return {
    getMeasures: (page = 1, per_page = 10) => {
      dispatch( get_measures( page, per_page))
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(MeasuresTableHOC)