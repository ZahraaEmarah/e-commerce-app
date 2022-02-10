let URL = "http://localhost:3003/products"

export async function GetAllProducts() {
    let payload = []
    await fetch(`${URL}`)
        .then((res) => { return res.json() })
        .then((data) => { payload = data })
        .catch(() => { })

    return ({
        type: "ALLPRODUCTS",
        payload
    })
}

export async function GetProductByID(id = 0) {
    let payload = [];
    await fetch(`${URL}/${id}`)
        .then((res) => { return res.json() })
        .then((data) => { payload = data })
        .catch(() => { })

    return {
        type: "PRODUCTDETAILS",
        payload
    }
}

export async function GetProductByName_Action(name = "") {
    let payload = [];
    //fetch
    await fetch(`${URL}?name=${name}`)
        .then((res) => { return res.json() })
        .then((data) => { payload = data })
        .catch(() => { })

    return {
        type: "PRODUCTSLIST",
        payload
    }
}

