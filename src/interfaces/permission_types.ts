interface IPermissionType {
    id: number,
    name: string,
    permissions: IPermissions[]
}

export interface IPermissions {
    id: number,
    name: string,
    description: string,
    permission_id: number
}

export default IPermissionType;