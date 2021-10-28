import api from "./foodsharebook_api"

const Path = 'user_permissions'
export const addUserPermission = (userId : number , permissionId : number ) =>{
  return api.post(Path,{user_id: userId, permission_id: permissionId});
}

export const deleteUserPermission = (userPermissionId : number ) =>{
  return api.delete(Path+`/`+userPermissionId);
}