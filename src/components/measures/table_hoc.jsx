import { Component } from 'react';
import { connect } from 'react-redux';
import { default as Pagination } from '../common/pagination';
import MeasuresTable from './table';
import { getMeasures, setMeasuresAndPaginate } from '../../actions/measure';
import { getAllAndPaginate } from '../../services/common_requests';

export class MeasuresTableHOC extends Component {
  componentDidMount() {
    //this.props.getAllMeasures()
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
    getAllMeasures : (params) =>{
      dispatch( getAndSendAction(  {path:"measures", action: setMeasuresAndPaginate , params : { page : 1, per_page : 10, ...params} } ))
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(MeasuresTableHOC)