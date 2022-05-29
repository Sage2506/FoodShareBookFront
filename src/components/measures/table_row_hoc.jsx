import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeasuresTableRow from './table_row';

export class MeasuresTableRowHOC extends Component {

  render() {
    const { measure, permissions, currentUser } = this.props
    return (
      <MeasuresTableRow measure={measure} permissions={permissions} currentUserRoleId={currentUser.role_id} />
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.userReducer.current_user
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MeasuresTableRowHOC)