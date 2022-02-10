import { combineReducers } from "redux";
import GetProductByName from "./get-product-by-name";
import GetAllProducts from './get-all-products';
import GetProductByID from "./get-product-by-Id";

let rootReducer = combineReducers({
    list:GetAllProducts,
    details:GetProductByID,
    search:GetProductByName,
});

export default rootReducer;