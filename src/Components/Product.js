import { useNavigate } from "react-router-dom"

let Products = (props) => {
    console.log("props")
    console.log(props)
    let navigator = useNavigate();
    let RenderProducts = ({ Productsinfo }) => {
        return (
            <div className="product-card" onClick={() => { navigator(`/Products/${Productsinfo.id}`) }}>
                <div className="img-container">
                    <img className="" src={`/images/${Productsinfo.img}`} alt={Productsinfo.name} />
                </div>
                <h1 className="m-3">{Productsinfo.name}</h1>
                <h3 className="m-3">{Productsinfo.price}$</h3>
                <button className="btn btn-outline-primary ">Add to cart</button>
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