import React, {Component} from 'react';
import PermissionsTable from './table';
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

  handleOpen = id => {
    this.setState({
      deleteShow: true,
      id
    })
  }

  deletePermission = id => {
    console.log(id);
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