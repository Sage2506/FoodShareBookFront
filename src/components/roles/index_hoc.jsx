import React, { Component } from 'react';
import { getRoles } from '../../services/role_requests';
import { connect } from 'react-redux';
import RolesIndex from '.';

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
    dispatch( getRoles() )
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(RolesIndexHOC);
