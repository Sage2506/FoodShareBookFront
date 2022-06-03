import api from "./foodsharebook_api"
const path = 'user_permissions'

export const addUserPermission = (userId, permissionId) => api.post(path, { user_id: userId, permission_id: permissionId });

export const deleteUserPermission = (userPermissionId) => api.delete(path + `/` + userPermissionId);