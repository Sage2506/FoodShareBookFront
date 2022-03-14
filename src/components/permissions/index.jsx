import React, {Component} from 'react';
import PermissionsTableHOC from './table_hoc';
import { FloatingActionButtonPlus } from '../common/floating_action_button';
import Pagination from "../common/pagination";
export class PermissionsIndex  extends Component {

  componentDidMount(){
  }
  render() {
    const { permissions , getPermissions, pagination} = this.props
    return(
      <div>
      <PermissionsTableHOC permissions = { permissions } getPermissions = {getPermissions}></PermissionsTableHOC>
      <Pagination
        pagination={pagination}
        paginationRequest={getPermissions}
      />
      <FloatingActionButtonPlus
        link = '/permissions/new'
      />
      </div>
    );
  }
}

export default PermissionsIndex ;