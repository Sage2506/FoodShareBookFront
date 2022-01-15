import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getPermissionById, postPermission, updatePermission } from '../../services/permissions_requests';
import { getAllPermissionTypes } from '../../services/permissions_type_requests';
import { getRoles } from '../../services/role_requests';
import PermissionsForm from './form';

export class PermissionsFormHOC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      permission : {
        name: "",
        description : "",
        permission_type_id : "-1"
      },
      formSubmited : false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    if ( id !== undefined ){
      this.props.getPermission(id)
    }
    this.props.getPermissionTypes();
    this.props.getRoles();
  }

  handleInputChange = e => {
    const { type, id, value } = e.target;
    const { permission } = this.state
    if( type === 'checkbox'){

    } else {
      this.setState({
        permission: { ...permission, [id] : value }
      })
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { permission } = nextProps
    const { id } = permission
    if(id !== undefined && id !== prevState.permission.id) {
      return {...prevState, permission: permission}
    }
    return prevState
  }

  handleSubmit = e => {
    e.preventDefault();
    const { permission } = this.state
    const { name, description, role_id, permission_type_id } = permission
    if( name === "" || name.includes(" ") || description === "" || permission_type_id === "-1" ){
      this.setState({
        formSubmited : true
      })
    } else {
      if( this.props.permission.id !== undefined ){
        this.props.updatePermission(this.props.permission.id, permission);
      } else {
        this.props.postPermission(permission)
      }
    }
  }

  render() {
    const { newPermission } = this.props
    if ( newPermission.id !== undefined) {
      return <Redirect to={'/permissions/'+newPermission.id}/>
    } else {
      const { permissionTypes, roles } = this.props
      const { formSubmited, permission } = this.state
      return(
        <PermissionsForm
          permission = { permission }
          formSubmited = { formSubmited }
          handleInputChange = { this.handleInputChange }
          permissionTypes = { permissionTypes }
          roles = { roles }
          handleSubmit = { this.handleSubmit}
        />
      );
    }
  }
}

const mapStateToProps = ( store ) => ({
  permissionTypes : store.permissionTypeReducer.permissionTypes,
  newPermission : store.permissionReducer.newPermission,
  permission : store.permissionReducer.permission,
  roles : store.roleReducer.roles,
})

const mapDispatchToProps = (dispatch) => ({
  getPermission: id => {
    dispatch(getPermissionById (id))
  },
  getPermissionTypes: () => {
    dispatch(getAllPermissionTypes())
  },
  getRoles : () => {
    dispatch(getRoles())
  },
  postPermission: ( permission ) => {
    dispatch( postPermission(permission))
  },
  updatePermission: (id, permission) => {
    dispatch( updatePermission(id, permission))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PermissionsFormHOC);