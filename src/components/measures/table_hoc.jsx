import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeasures } from '../../services/measure_request';
import { default as Pagination } from '../common/pagination';
import MeasuresTable from './table';
export class MeasuresTableHOC extends Component {
  componentDidMount() {
    this.props.getMeasures()
  }

  render() {
    const { measures, pagination, getMeasures, permissions } = this.props
    return (
      <div>
        <MeasuresTable
          measures={measures}
          permissions={permissions}
        />
        <Pagination pagination={pagination} paginationRequest={getMeasures} />
        {permissions.create &&
          <FloatingActionButtonPlus
            link='/dishes/new'
          />
        }
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
    getMeasures: params => {
      dispatch(getMeasures(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasuresTableHOC)