import { combineReducers } from "redux";
import GetProductByName from "./get-product-by-name";
import GetAllProducts from './get-all-products';
import GetProductByID from "./get-product-by-Id";

let rootReducer = combineReducers({
    list:GetAllProducts,
    details:GetProductByID,
    productName:GetProductByName,
});

export default rootReducer;