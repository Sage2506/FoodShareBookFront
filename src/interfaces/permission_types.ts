interface IPermissionType {
    id: number,
    name: string,
    permissions: IPermissions[]
}

export interface IPermissions {
    id: number,
    name: string,
    description: string,
    permission_id?: number,
    permission_type_id?: number
}

export default IPermissionType;