export default function GetProductByID(state=null,action){
    if(action.type === "PRODUCTDETAILS"){
        return action.payload;
    }
    return state;
}