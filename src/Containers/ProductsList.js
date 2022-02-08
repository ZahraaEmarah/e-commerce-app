import { connect } from "react-redux";
import Product from '../Components/Products';


let ProductsList = ({ Products }) => {
    let RenderAllProducts = (Products) => {
        if (Products) {
            return Products.map((prd) => {
                return (
                    <Product key={prd.id} Productsinfo={prd} />
                )
            })
        } else {
            return (
                <div>No Products</div>
            )
        }
    }
    return (
        <div>
            {RenderAllProducts(Products)}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        Products: state.list
    }
}

export default connect(mapStateToProps)(ProductsList);