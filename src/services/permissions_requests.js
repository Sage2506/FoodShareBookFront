import { apiDelete } from './foodsharebook_api';
import { addPermission, setPermissions } from '../actions/permission';
import { getAndDispatch, postAndDispatch, putAndDispatch } from './common_requests';

const path = 'permissions'

export const getPermissions = params => getAndDispatch({ path, action: setPermissions, params: { page: 1, per_page: 10, ...params } })

export const postPermission = data => postAndDispatch({ path, data, action: addPermission })

export const putPermission = args => putAndDispatch({ path, action: addPermission, ...args })

export const deletePermission = id => apiDelete({ path, id })