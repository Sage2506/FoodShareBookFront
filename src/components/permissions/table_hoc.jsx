import React, { Component } from 'react';
import PermissionsTable from './table';
import { deletePermission, getPermissions } from '../../services/permissions_requests'
import { connect } from 'react-redux';
export class PermissionsTableHOC extends Component {

  constructor(props) {
    super(props)
    this.state = {
      deleteShow: false,
      id: -1,
    }
  }

  handleClose = () => {
    this.setState({
      deleteShow: false,
      id: -1,
    })
  }

  handleOpen = id => {
    this.setState({
      deleteShow: true,
      id
    })
  }

  deletePermission = id => {
    deletePermission(id).then(response => {
      if (response.code === 200) {
        this.handleClose()
        this.props.getPermissions();
      } else {
        this.props.showError(response)
      }
    })
  }

  componentDidMount() {
  }

  render() {
    const { deleteShow, id } = this.state
    const { permissions } = this.props
    return (
      <div>
        <PermissionsTable permissions={permissions} handleOpen={this.handleOpen} deleteShow={deleteShow} deleteId={id} handleClose={this.handleClose} deletePermission={this.deletePermission} />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  getPermissions: params => { dispatch(getPermissions(params)) }
})

export default connect(null, mapDispatchToProps)(PermissionsTableHOC)
