let URL = "http://localhost:3003/products"
export async function GetProductByName_Action(name = ""){
    let payload= [];
    //fetch
    await fetch(`${URL}?name=${name}`)
    .then((res)=>{return res.json()})
    .then((data)=>{payload = data})
    .catch(()=>{})

    return {
        type:"PRODUCTSLIST",
        payload
    }
}