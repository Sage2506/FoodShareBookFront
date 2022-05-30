import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllPermissionTypes } from '../../services/permissions_type_requests';
import UserPermissionForm from './user_permission_form';
import { addUserPermission, deleteUserPermission } from '../../services/user_permissions';


export class UserPermissionFormHOC extends Component {

  constructor(props) {
    super(props)
    this.state = {
      permissionsToRemove: [],
      permissionsToAdd: [],
      loading : false
    }
  }


  componentDidMount() {
    this.props.getPermissionTypes();
    //this.props.getPermissions();
  }

  userHasPermissionWithId = permissionId => {
    let flag = false
    let found = this.props.userPermissions.find(user_permission => user_permission.permission_id === permissionId)
    if(found !== undefined) { flag = true }
    return flag
  }

  getUserPermissionFromPermissionId = permissionId =>{
    let found = this.props.userPermissions.find(user_permission => user_permission.permission_id === permissionId)
    return !!found
  }

  handleChecboxClick = e => {
    const permissionId = parseInt(e.target.id)
    if (e.target.checked) {
      const { permissionsToRemove } = this.state
      if (permissionsToRemove.includes(permissionId)) {
        this.setState({
          permissionsToRemove: permissionsToRemove.filter(element => element !== permissionId) //TODO: must remove relation id
        })
      } else {
        this.setState({
          permissionsToAdd: [...this.state.permissionsToAdd, permissionId]//TODO: must add permission id
        })
      }
    } else {
      const { permissionsToAdd } = this.state
      if (permissionsToAdd.includes(permissionId)) {
        this.setState({
          permissionsToAdd: permissionsToAdd.filter(element => element !== permissionId)//TODO: must remove permission id
        })
      } else {
        this.setState({
          permissionsToRemove: [...this.state.permissionsToRemove, permissionId]//TODO: must add relation id
        })
      }
    }
  }

  handlePermissionsSubmit = (e, permissionsToAdd = [], permissionsToRemove = []) =>{
    e.preventDefault()
    const promises = []
    permissionsToAdd.forEach( permission => promises.push(addUserPermission(this.props.userId, permission)))
    permissionsToRemove.forEach( permission => {
      const userPermission = this.props.userPermissions.find( userPermission => userPermission.permission_id === permission)
      if(userPermission) promises.push(deleteUserPermission(userPermission.id))
    })
    this.setState({ loading : true})
    Promise.all(promises).then( response => {
      this.setState({
        permissionsToRemove : [],
        permissionsToAdd : [],
        loading : false
      })
      this.props.getUserPermissions(this.props.userId);
    })
  }

  render() {
    const { userPermissions, permissionTypes } = this.props
    const { permissionsToAdd, permissionsToRemove, loading } = this.state
    return(
      <UserPermissionForm
        loading = {loading}
        userPermissions = {userPermissions}
        permissionTypes = {permissionTypes}
        permissionsToAdd = { permissionsToAdd }
        permissionsToRemove = {permissionsToRemove}
        handleChecboxClick = { this.handleChecboxClick }
        handlePermissionsSubmit = { this.handlePermissionsSubmit }
        />
    );
  }
}

const mapStateToProps = store  => ({
  permissionTypes: store.permissionTypeReducer.permissionTypes
})

const mapDispatchToProps = dispatch=> ({
  getPermissionTypes: () => {
    dispatch( getAllPermissionTypes())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPermissionFormHOC);