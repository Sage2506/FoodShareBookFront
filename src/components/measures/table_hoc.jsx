import { Component } from 'react';
import { connect } from 'react-redux';
import { default as Pagination } from '../common/pagination';
import MeasuresTable from './table';
import { setMeasuresAndPaginate } from '../../actions/measure';
import { getAndSendAction } from '../../services/common_requests';

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
    getMeasures : params =>{
      dispatch( getAndSendAction ({
          path:"measures", 
          action: setMeasuresAndPaginate , 
          params : { page : 1, per_page : 10, ...params} 
        }))
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(MeasuresTableHOC)