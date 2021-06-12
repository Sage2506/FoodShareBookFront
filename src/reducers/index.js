import { combineReducers } from "redux";
import { dishReducer } from "./dish";
import { errorReducer } from './error';
import { ingredientReducer } from "./ingredient";
import { measureReducer } from "./measure";
import { permissionReducer } from './permission';
import { permissionTypeReducer } from './permission_type';
import { roleReducer } from "./role";
import { userReducer } from "./user";


export default combineReducers({
    dishReducer,
    errorReducer,
    ingredientReducer,
    measureReducer,
    permissionReducer,
    permissionTypeReducer,
    roleReducer,
    userReducer,
})