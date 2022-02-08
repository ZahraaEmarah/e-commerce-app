export default function GetProductByName(state=null,action){
    if(action.type === "PRODUCTSLIST"){
        return action.payload;
    }
    return state;
}