import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllPermissionTypes } from '../../services/permissions_type_requests';
import { getAllPermissions } from '../../services/permissions_requests';
import UserPermissionForm from './user_permission_form';
import IPermissionType, {IPermissions} from '../../interfaces/permission_types';

interface IUserPermissionForm {
  permissionTypes : IPermissionType[],
  userPermissions : IPermissions[],
  getPermissionTypes : Function,
  getPermissions: Function
}

export class UserPermissionFormHOC extends Component<IUserPermissionForm> {

  componentDidMount() {
    this.props.getPermissionTypes();
    //this.props.getPermissions();
  }

  render() {
    const { userPermissions, permissionTypes } = this.props
    return(
      <UserPermissionForm userPermissions = {userPermissions} permissionTypes = {permissionTypes} />
    );
  }
}

const mapStateToProps = ( store : any ) => ({
  permissions : store.permissionReducer.permissions,
  permissionTypes: store.permissionTypeReducer.permissionTypes
})

const mapDispatchToProps = (dispatch: any) => ({
  getPermissions: () => {
    dispatch( getAllPermissions())
  },
  getPermissionTypes: () => {
    dispatch( getAllPermissionTypes())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPermissionFormHOC);