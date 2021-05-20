import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPermissionById } from '../../services/permissions_requests';
import PermissionShow from './show';

export class PermissionsShowHOC extends Component {

  componentDidMount() {
    this.props.getPermission(this.props.match.params.id)
  }

  render() {
    const { permission } = this.props
    return(
      <PermissionShow permission={ permission } />
    );
  }
}

const mapStateToProps = ( store ) => ({
  permission : store.permissionReducer.permission
})

const mapDispatchToProps = (dispatch) => ({
  getPermission: id => {
    dispatch(getPermissionById(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PermissionsShowHOC);