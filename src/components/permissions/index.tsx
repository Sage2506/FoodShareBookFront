import React, {Component} from 'react';
import PermissionsTableHOC from './table_hoc';
import { FloatingActionButtonPlus } from '../common/floating_action_button';
export class PermissionsIndex  extends Component {

  componentDidMount(){
  }
  render() {
    const { permissions , getPermissions} = this.props
    return(
      <div>
      <PermissionsTableHOC permissions = { permissions } getPermissions = {getPermissions}></PermissionsTableHOC>
      <FloatingActionButtonPlus
        link = '/permissions/new'
      />
      </div>
    );
  }
}

export default PermissionsIndex ;