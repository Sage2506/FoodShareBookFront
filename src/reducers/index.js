import { combineReducers } from "redux";
import { dishReducer } from "./dish";
import { ingredientReducer } from "./ingredient";
import { measureReducer } from "./measure";
import { userReducer } from "./user";
import { roleReducer } from "./role";
import { errorReducer } from './error';
import { permissionTypeReducer } from './permission_type';

export default combineReducers({
    dishReducer,
    ingredientReducer,
    measureReducer,
    userReducer,
    roleReducer,
    permissionTypeReducer,
    errorReducer
})