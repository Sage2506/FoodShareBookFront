import React, { Component } from 'react';
import { connect } from 'react-redux';
import RolesIndex from '.';
import { getAndDispatch } from '../../services/common_requests';
import { setRoles } from '../../actions/role';

export class RolesIndexHOC extends Component {

  componentDidMount() {
    this.props.getRoles();
  }

  render() {
    const { roles } = this.props
    return (
      <RolesIndex
        roles = { roles }
      />
    );
  }
}

const mapStateToProps = ( store ) => ({
  roles: store.roleReducer.roles
})

const mapDispatchToProps = (dispatch) => ({
  getRoles: () => {
    dispatch( getAndDispatch({
      path:`roles`,
      action: setRoles
    }))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(RolesIndexHOC);
