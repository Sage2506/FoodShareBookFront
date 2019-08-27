import { combineReducers } from "redux";
import { dishReducer } from "./dish";
import { ingredientReducer } from "./ingredient";

export default combineReducers({
    dishReducer,
    ingredientReducer
})