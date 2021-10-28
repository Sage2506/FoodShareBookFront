import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllPermissionTypes } from '../../services/permissions_type_requests';
import { getAllPermissions } from '../../services/permissions_requests';
import UserPermissionForm from './user_permission_form';
import IPermissionType, {IPermissions} from '../../interfaces/permission_types';
import { addUserPermission, deleteUserPermission } from '../../services/user_permissions';

interface IUserPermissionForm {
  userId : number,
  permissionTypes : IPermissionType[],
  userPermissions : IPermissions[],
  getPermissionTypes : Function,
  getUser : Function,
  getUserPermissions : Function
}

interface IState {
  permissionsToRemove: number[],
  permissionsToAdd: number[],
  loading : boolean
}

export class UserPermissionFormHOC extends Component<IUserPermissionForm, IState> {

  constructor(props: any) {
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

  userHasPermissionWithId = (permissionId: number) => {
    let flag = false
    let found =this.props.userPermissions.find(user_permission => user_permission.permission_id === permissionId)
    if(found !== undefined) { flag = true }
  }

  getUserPermissionFromPermissionId = (permissionId: number) =>{
    let found = this.props.userPermissions.find(user_permission => user_permission.permission_id === permissionId)
  }

  handleChecboxClick = (e: any) => {
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

  handlePermissionsSubmit = (e:any, permissionsToAdd : number[] = [], permissionsToRemove : number[] = []) =>{
    e.preventDefault()
    const promises : any[] = []
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

const mapStateToProps = ( store : any ) => ({
  permissionTypes: store.permissionTypeReducer.permissionTypes
})

const mapDispatchToProps = (dispatch: any) => ({
  getPermissionTypes: () => {
    dispatch( getAllPermissionTypes())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPermissionFormHOC);