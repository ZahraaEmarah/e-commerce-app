export default function GetAllProducts(state=null,action){
    if(action.type === "ALLPRODUCTS"){
        return action.payload;
    }
    return state;
}