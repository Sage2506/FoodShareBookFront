import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllPermissions } from '../../services/permissions_requests';

export class PermissionsIndexHOC extends Component {

  componentDidMount() {
    console.log(this.props.permissions);
    //this.props.getPermissions(); TODO: create permission get routes
  }

  render() {
    return(
      <div>
        New component PermissionsIndexHOC
      </div>
    );
  }
}

const mapStateToProps = ( store ) => ({
  permissions : store.permissionReducer.permissions
})

const mapDispatchToProps = (dispatch) => ({
  getPermissions: () => {
    dispatch( getAllPermissions())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(PermissionsIndexHOC);