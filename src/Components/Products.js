import { useNavigate } from "react-router-dom"

let Products = (props) => {
    console.log("props")
    console.log(props)
    let navigator = useNavigate();
    let RenderProducts = ({ Productsinfo }) => {
        return (
            <div className="m-5 p-2 d-flex Products" onClick={() => { navigator(`/Products/${Productsinfo.id}`) }}>
                <img width="100px" className="rounded-circle" src={`/Images/${Productsinfo.pic}`} alt={Productsinfo.name}/>
                <h1 className="m-3">{Productsinfo.name}</h1>
                <h3>{Productsinfo.price}</h3>
            </div>
        )
    }
    return (
        <div className="text-center">
            {RenderProducts(props)}
        </div>
    )
}

export default Products;