import { getPermissionTypes } from '../actions/permission_type';
import { setCurrentUserPermissions } from '../actions/user';
import { getAndDispatch } from './common_requests';
const path = "permission_types"

export const getAllPermissionTypes = () => getAndDispatch({ path, action: getPermissionTypes });

export const getCurrentUserPermissionByType = id => getAndDispatch({ path: `${path}/${id}`, action: setCurrentUserPermissions })
