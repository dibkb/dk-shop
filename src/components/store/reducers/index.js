import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import asyncReducer from "../../async/asyncReducer";

const rootReducer =  combineReducers({
  cartReducer
});
export default rootReducer;
