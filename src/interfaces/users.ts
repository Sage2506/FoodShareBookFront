import {IPermissions} from "./permission_types";

interface IUser {
    id: number,
    dishes_ids: [],
    email: string,
    role_id: number,
    permissions: IPermissions[]
}

export default IUser;