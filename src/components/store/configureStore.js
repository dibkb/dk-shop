import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";

export function configureStore(){
   return createStore(cartReducer)
}