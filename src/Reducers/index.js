import { combineReducers } from "redux";
import GetProductByName from "./get-product-by-name";

let rootReducer = combineReducers({
    list:GetProductByName,
});

export default rootReducer;