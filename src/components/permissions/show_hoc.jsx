import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPermission } from '../../actions/permission';
import { getAndSendAction } from '../../services/common_requests';
import PermissionShow from './show';

export class PermissionsShowHOC extends Component {

  componentDidMount() {
    this.props.getPermission(this.props.match.params.id)
  }

  render() {
    const { permission, history } = this.props
    return(
      <PermissionShow permission={ permission }  goBack = { history.goBack }/>
    );
  }
}

const mapStateToProps = ( store ) => ({
  permission : store.permissionReducer.permission
})

const mapDispatchToProps = (dispatch) => ({
  getPermission: id => {
    dispatch(getAndSendAction({
      path:`permissions/${id}`,
      action: getPermission
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PermissionsShowHOC);