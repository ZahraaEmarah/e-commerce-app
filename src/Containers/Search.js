import { Component, createRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GetProductByName_Action } from "../Actions/index"

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchRef = createRef()
        this.state = {

        }
    }

    render() {
        return (
            <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search"
                    aria-label="Search" ref={this.searchRef} />
                <button className="btn btn-outline-success" type="button"
                    onClick={() => this.props.GetProductByName_Action(this.searchRef.current.value)}>
                    Search</button>
            </div>
        )
    }

}
let mapToAction = (dispatch) => {
    return (bindActionCreators({ GetProductByName_Action }, dispatch))
}
export default connect(null, mapToAction)(Search)