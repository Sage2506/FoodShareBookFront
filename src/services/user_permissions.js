import api from "./foodsharebook_api"

const Path = 'user_permissions'
export const addUserPermission = (userId , permissionId ) =>{
  return api.post(Path,{user_id: userId, permission_id: permissionId});
}

export const deleteUserPermission = (userPermissionId ) =>{
  return api.delete(Path+`/`+userPermissionId);
}