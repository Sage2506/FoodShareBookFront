import React, { Component } from 'react';
import RoleShow from './show';
import { connect } from 'react-redux';
import { getRole } from '../../services/role_requests';
// import { convertPermisionStringToList } from '../../lib/common';

export class RoleShowHOC extends Component {

  componentDidMount() {
    this.props.getRole(this.props.match.params.id)
  }


  render() {
    const { role } = this.props

    return (
      <RoleShow
        role = { role }
      />
    );
  }
}

const mapStateToProps = ( store ) => ({
  role: store.roleReducer.role
})

const mapDistpatchToProps = ( dispatch ) => ({
  getRole: (id) => {
    dispatch( getRole(id) )
  }
})

export default connect(mapStateToProps, mapDistpatchToProps)( RoleShowHOC);
