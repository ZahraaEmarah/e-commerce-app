import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GetAllProducts } from "../Actions/index"
import Product from "../Components/Product";

class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prd: [],
        }
    }
    componentDidMount() {
        this.props.GetAllProducts();
    }
    renderProducts() {
        if (this.props.prd) {
            if (this.props.prd.length > 0)
                return (
                    this.props.prd.map((p) => <div key={p.id} className="col-4 mb-5"><Product Productsinfo={p} /></div>)
                )
            return (
                <div className="alert alert-danger text-center">
                    Not Found
                </div>
            )
        }
        else {
            if (this.props.allProducts)
                return (this.props.allProducts.map((p) => <div key={p.id} className="col-4 mb-5"><Product Productsinfo={p} /></div>))
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        {this.renderProducts()}
                    </div>
                </div>

            </div>
        )
    }

}
let mapStateToProps = (state) => {
    return {
        prd: state.productName,
        allProducts: state.list
    }
}

let mapToAction = (dispatch) => {
    return (bindActionCreators({ GetAllProducts }, dispatch))
}

export default connect(mapStateToProps, mapToAction)(AllProducts);