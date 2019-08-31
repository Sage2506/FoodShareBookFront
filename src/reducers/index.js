import { combineReducers } from "redux";
import { dishReducer } from "./dish";
import { ingredientReducer } from "./ingredient";
import { measureReducer } from "./measure";

export default combineReducers({
    dishReducer,
    ingredientReducer,
    measureReducer
})