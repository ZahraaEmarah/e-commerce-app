import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { GetProductByID } from '../Actions/index'



let ProductDetails = (props) => {
    let { id } = useParams();
    useEffect(() => {
        props.GetProductByID(id);
    }, [])

    let RenderProductDetails = (props) => {
        console.log(id)
        console.log(props)
        if (props.ProductDetails) {
            return (
                <div className="text-center m-3">
                    <img width="250px" src={`/images/${props.ProductDetails.img}`} alt={props.ProductDetails.name} />
                    <div className="text-right m-3">
                        <h5><span>Name:</span> {props.ProductDetails.name}</h5>
                        <h5><span>Price:</span> {props.ProductDetails.price}</h5>
                    </div>
                </div>
            )
        }
        return (
            <div>No Product</div>
        )
    }
    return (
        <div className="text-center m-5">
            <h1>Product Info</h1>
            {RenderProductDetails(props)}
        </div>
    )
}

export default connect((state) => {
    // console.log(state)
    return {
        ProductDetails: state.details
    }
},
    (dispatch) => {
        return bindActionCreators({ GetProductByID }, dispatch)
    })
    (ProductDetails);