import React, {Component} from 'react';
import PermissionsTable from './table';
import {deletePermission} from '../../services/permissions_requests'
export class PermissionsTableHOC extends Component {

  constructor(props) {
    super(props)
    this.state = {
      deleteShow: false,
      id: -1,
    }
  }

  handleClose = () => {
    this.setState ( {
      deleteShow: false,
      id: -1,
    })
  }

  handleOpen = ( id : number ) => {
    this.setState({
      deleteShow: true,
      id
    })
  }

  deletePermission =( id :number )=> {
    const promises = []
    promises.push(deletePermission(id))
    Promise.all(promises).then( response => {
      this.setState({ deleteShow : false, deleteId : -1 })
      this.props.getPermissions();
    })
  }

  componentDidMount() {
  }

  render() {
    const { deleteShow, id } = this.state
    const { permissions } = this.props
    return(
      <div>
        <PermissionsTable permissions = { permissions } handleOpen = { this.handleOpen } deleteShow = { deleteShow } deleteId = { id } handleClose = { this.handleClose } deletePermission = {this.deletePermission}/>
      </div>
    );
  }
}

export default PermissionsTableHOC;